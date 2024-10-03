// src/ReservationForm.js
import React, { useState } from "react";
import { db } from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [reservationType, setReservationType] = useState("");
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

    // Ensure no negative values for number fields
    if ((name === "numberOfRooms" || name === "numberOfPeople") && value < 0) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const today = new Date().toISOString().split("T")[0];

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const today = new Date().toISOString().split("T")[0];

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

    try {
      await addDoc(collection(db, collectionName), {
        ...formData,
        reservationKey,
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
                value={formData.checkinDate}
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="date"
                name="checkoutDate"
                value={formData.checkoutDate}
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
                value={formData.dayOutDate}
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
                value={formData.eventDate}
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
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit Reservation
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
