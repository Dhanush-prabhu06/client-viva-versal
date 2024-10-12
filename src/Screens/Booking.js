import React, { useState } from "react";
import { db } from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [reservationType, setReservationType] = useState("rooms");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    checkinDate: "",
    checkoutDate: "",
    numberOfRooms: "",
    numberOfPeople: "",
    eventDate: "",
    eventType: "",
    dayOutDate: "",
    reservationKey: "", // To segregate reservation types
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "numberOfRooms" || name === "numberOfPeople") && value < 0) {
      return;
    }

    if (name === "numberOfRooms" && value >= 13) {
      setErrorMessage("Only 12 Rooms are available for booking");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const today = new Date().toISOString().split("T")[0];

    // Convert yyyy-mm-dd to dd-mm-yyyy format
    const formattedDate = value.split("-").reverse().join("-");

    if (name === "checkinDate" && value < today) {
      setErrorMessage("Check-in date must be today or later.");
      return;
    }

    if (name === "checkoutDate" && value <= formData.checkinDate) {
      setErrorMessage("Checkout date must be after check-in date.");
      return;
    }

    if (name === "dayOutDate" && value < today) {
      setErrorMessage("Day-out date must be today or later.");
      return;
    }

    if (name === "eventDate" && value < today) {
      setErrorMessage("Event date must be today or later.");
      return;
    }

    if (name === "eventDate" && value <= formData.dayOutDate) {
      setErrorMessage("Event date must be after day-out date.");
      return;
    }

    setErrorMessage("");
    setFormData({ ...formData, [name]: formattedDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrorMessage("Please enter a valid phone number (10 digits).");
      return;
    }

    const collectionName =
      reservationType === "rooms"
        ? "RoomReservations"
        : reservationType === "dayOut"
        ? "DayOutPackages"
        : "EventReservations";

    const reservationKey = `${reservationType}_${Date.now()}`; // Unique key for segregation
    const timestamp = new Date();

    // Format the timestamp to dd-mm-yyyy format and a 12-hour clock with AM/PM
    let hours = timestamp.getHours();
    const minutes = String(timestamp.getMinutes()).padStart(2, "0");
    const seconds = String(timestamp.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    const formattedTime = `${String(hours).padStart(
      2,
      "0"
    )}:${minutes}:${seconds} ${ampm}`;
    const bookingTime = `${String(timestamp.getDate()).padStart(
      2,
      "0"
    )}-${String(timestamp.getMonth() + 1).padStart(
      2,
      "0"
    )}-${timestamp.getFullYear()} ${formattedTime}`;

    try {
      await addDoc(collection(db, collectionName), {
        ...formData,
        reservationKey,
        bookingTime, // Store the exact time of booking in dd-mm-yyyy format
      });
      alert("Reservation successful!");
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        checkinDate: "",
        checkoutDate: "",
        numberOfRooms: "",
        numberOfPeople: "",
        eventDate: "",
        eventType: "",
        dayOutDate: "",
        reservationKey: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Reserve Your Spot</h1>
      <p className="text-sm text-red-500 mb-2">{errorMessage}</p>
      <div className="flex flex-wrap justify-around mb-4">
        <button
          className="flex-1 mx-1 my-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setReservationType("rooms")}
        >
          Reserve Rooms
        </button>
        <button
          className="flex-1 mx-1 my-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setReservationType("dayOut")}
        >
          Reserve Day-out Package
        </button>
        <button
          className="flex-1 mx-1 my-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setReservationType("event")}
        >
          Reserve Event
        </button>
      </div>

      {reservationType && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <p className="text-xs text-gray-500">
            * Please enter a valid phone number for verification.
          </p>

          {reservationType === "rooms" && (
            <>
              <input
                type="date"
                name="checkinDate"
                value={formData.checkinDate.split("-").reverse().join("-")} // display date in dd-mm-yyyy
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="date"
                name="checkoutDate"
                value={formData.checkoutDate.split("-").reverse().join("-")} // display date in dd-mm-yyyy
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="numberOfRooms"
                placeholder="Number of Rooms"
                value={formData.numberOfRooms}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
              />
              <input
                type="number"
                name="numberOfPeople"
                placeholder="Number of People"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
              />
            </>
          )}

          {reservationType === "dayOut" && (
            <>
              <input
                type="date"
                name="dayOutDate"
                value={formData.dayOutDate.split("-").reverse().join("-")} // display date in dd-mm-yyyy
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="number"
                name="numberOfPeople"
                placeholder="Number of People"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
              />
            </>
          )}

          {reservationType === "event" && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate.split("-").reverse().join("-")} // display date in dd-mm-yyyy
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Event Type</option>
                <option value="birthday">Birthday</option>
                <option value="meeting">Meeting</option>
                <option value="conference">Conference</option>
                <option value="celebration">Celebration</option>
                <option value="others">Others</option>
              </select>
              <input
                type="number"
                name="numberOfPeople"
                placeholder="Number of People"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                min="0"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
