import React, { useState } from "react";
import { db } from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [reservationType, setReservationType] = useState(null); // Initially, no type is selected
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
    reservationKey: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // Success modal control

  // Close success modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "numberOfRooms" || name === "numberOfPeople") && value < 0) {
      return;
    }

    if (name === "numberOfRooms" && value >= 13) {
      setErrorMessage("Only 12 rooms are available for booking.");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle date changes with validation
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const today = new Date().toISOString().split("T")[0];
    const formattedDate = value.split("-").reverse().join("-");

    if (name === "checkinDate" && value < today) {
      setErrorMessage("Check-in date must be today or later.");
      return;
    }

    if (name === "checkoutDate" && value > formData.checkinDate) {
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

  const [loading, setLoading] = useState(false); // Add loading state

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setErrorMessage("");

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrorMessage("Please enter a valid phone number (10 digits).");
      return;
    }

    setLoading(true); // Set loading to true when processing starts

    const collectionName =
      reservationType === "rooms"
        ? "RoomReservations"
        : reservationType === "dayOut"
        ? "DayOutPackages"
        : "EventReservations";

    const reservationKey = `${reservationType}_${Date.now()}`;
    const timestamp = new Date();

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
      // Submit the data to Firestore
      await addDoc(collection(db, collectionName), {
        ...formData,
        reservationKey,
        bookingTime,
      });

      // Show the success modal only after successful submission
      setShowModal(true);

      // Reset form data
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
    } finally {
      setLoading(false); // Reset loading to false when processing ends
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Reserve Your Spot</h1>

      {/* Reservation Type Buttons */}
      <div className="flex flex-col items-center space-y-4 mb-4">
        <button
          className={`w-full py-3 px-6 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform ${
            reservationType === "rooms"
              ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg scale-105"
              : "bg-gradient-to-r from-blue-400 to-green-500 text-white hover:scale-105 hover:shadow-xl"
          }`}
          onClick={() => setReservationType("rooms")}
        >
          Rooms
        </button>
        <button
          className={`w-full py-3 px-6 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform ${
            reservationType === "dayOut"
              ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg scale-105"
              : "bg-gradient-to-r from-blue-400 to-green-500 text-white hover:scale-105 hover:shadow-xl"
          }`}
          onClick={() => setReservationType("dayOut")}
        >
          Day-out Package
        </button>
        <button
          className={`w-full py-3 px-6 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform ${
            reservationType === "event"
              ? "bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg scale-105"
              : "bg-gradient-to-r from-blue-400 to-green-500 text-white hover:scale-105 hover:shadow-xl"
          }`}
          onClick={() => setReservationType("event")}
        >
          Event
        </button>
      </div>

      <p className="text-lg text-red-500 mb-1">{errorMessage}</p>

      {/* Conditional Forms based on Reservation Type */}
      {reservationType && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="10-digit mobile number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email for confirmation"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {reservationType === "rooms" && (
            <>
              <div>
                <label
                  htmlFor="checkinDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkinDate"
                  name="checkinDate"
                  value={formData.checkinDate.split("-").reverse().join("-")}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="checkoutDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkoutDate"
                  name="checkoutDate"
                  value={formData.checkoutDate.split("-").reverse().join("-")}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfRooms"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of Rooms
                </label>
                <input
                  type="number"
                  id="numberOfRooms"
                  name="numberOfRooms"
                  placeholder="How many rooms do you need?"
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  min="1"
                  max="12"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfPeople"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of People
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  placeholder="Total number of guests across all rooms?"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  min="1"
                  required
                />
              </div>
            </>
          )}

          {reservationType === "dayOut" && (
            <>
              <div>
                <label
                  htmlFor="dayOutDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Day-out Date
                </label>
                <input
                  type="date"
                  id="dayOutDate"
                  name="dayOutDate"
                  value={formData.dayOutDate.split("-").reverse().join("-")}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfPeople"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of People
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  placeholder="Enter total number of participants"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  min="1"
                  required
                />
              </div>
            </>
          )}

          {reservationType === "event" && (
            <>
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate.split("-").reverse().join("-")}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="" className=" text-gray-600">
                    Select Event Type
                  </option>
                  <option value="birthday">Birthday</option>
                  <option value="meeting">Meeting</option>
                  <option value="conference">Conference</option>
                  <option value="celebration">Celebration</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfPeople"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of People
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  placeholder="Enter expected number of attendees"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  min="1"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className={`w-full py-3 px-6 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white font-bold rounded-full shadow-lg transition-all duration-300`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Reserving..." : "Confirm Reservation"}
          </button>
        </form>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2 text-center text-green-600">
              Reservation successful!
            </h2>
            <p className="text-center text-gray-700">
              Our Team will contact you shortly.
            </p>

            <button
              onClick={closeModal}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
