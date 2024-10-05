import React, { useEffect, useState } from "react";
import { db } from "../firebase/Config";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "./auth/AuthProvider"; // Import the useAuth hook

const Dashboard = () => {
  const { logout } = useAuth(); // Access the logout function from AuthProvider
  const [reservations, setReservations] = useState({
    rooms: [],
    dayOut: [],
    events: [],
  });
  const [activeTab, setActiveTab] = useState("rooms");
  const [selectedReservation, setSelectedReservation] = useState(null);

  useEffect(() => {
    // Fetching Room Reservations
    const unsubscribeRooms = onSnapshot(
      collection(db, "RoomReservations"),
      (snapshot) => {
        const rooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservations((prev) => ({ ...prev, rooms }));
      }
    );

    // Fetching Day-Out Reservations
    const unsubscribeDayOut = onSnapshot(
      collection(db, "DayOutPackages"),
      (snapshot) => {
        const dayOut = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservations((prev) => ({ ...prev, dayOut }));
      }
    );

    // Fetching Event Reservations
    const unsubscribeEvents = onSnapshot(
      collection(db, "EventReservations"),
      (snapshot) => {
        const events = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReservations((prev) => ({ ...prev, events }));
      }
    );

    // Clean up subscriptions
    return () => {
      unsubscribeRooms();
      unsubscribeDayOut();
      unsubscribeEvents();
    };
  }, []);

  // Handle Deleting Reservations
  const handleDelete = async (id, type) => {
    try {
      await deleteDoc(doc(db, type, id));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  // Handle Updating Reservation Status
  const handleStatusChange = async (id, type, status) => {
    try {
      const reservationRef = doc(db, type, id);
      await updateDoc(reservationRef, { status });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // Handle "View More" functionality for each reservation type
  const handleViewMore = (reservation, type) => {
    const details = {};

    if (type === "rooms") {
      details.name = reservation.name;
      details.phoneNumber = reservation.phoneNumber;
      details.email = reservation.email;
      details.checkinDate = reservation.checkinDate;
      details.checkoutDate = reservation.checkoutDate;
      details.numberOfRooms = reservation.numberOfRooms;
      details.numberOfPeople = reservation.numberOfPeople;
    } else if (type === "dayOut") {
      details.name = reservation.name;
      details.phoneNumber = reservation.phoneNumber;
      details.email = reservation.email;
      details.dayoutDate = reservation.dayoutDate;
      details.numberOfPeople = reservation.numberOfPeople;
    } else if (type === "events") {
      details.name = reservation.name;
      details.phoneNumber = reservation.phoneNumber;
      details.email = reservation.email;
      details.eventDate = reservation.eventDate;
      details.numberOfPeople = reservation.numberOfPeople;
    }

    setSelectedReservation(details);
  };

  // Display detailed information of the selected reservation
  const renderDetails = () => {
    if (!selectedReservation) return null;

    return (
      <div className="p-4 border rounded shadow-md bg-gray-50">
        <h3 className="font-bold text-lg mb-4">Reservation Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> {selectedReservation.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedReservation.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {selectedReservation.phoneNumber}
            </p>
            {selectedReservation.checkinDate && (
              <p>
                <strong>Check-in Date:</strong>{" "}
                {selectedReservation.checkinDate}
              </p>
            )}
            {selectedReservation.checkoutDate && (
              <p>
                <strong>Check-out Date:</strong>{" "}
                {selectedReservation.checkoutDate}
              </p>
            )}
            {selectedReservation.dayoutDate && (
              <p>
                <strong>Day-Out Date:</strong> {selectedReservation.dayoutDate}
              </p>
            )}
            {selectedReservation.eventDate && (
              <p>
                <strong>Event Date:</strong> {selectedReservation.eventDate}
              </p>
            )}
          </div>
          <div>
            {selectedReservation.numberOfRooms && (
              <p>
                <strong>Number of Rooms:</strong>{" "}
                {selectedReservation.numberOfRooms}
              </p>
            )}
            <p>
              <strong>Number of People:</strong>{" "}
              {selectedReservation.numberOfPeople}
            </p>
          </div>
        </div>
        <button
          onClick={() => setSelectedReservation(null)}
          className="mt-4 text-blue-500 hover:underline"
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Reservations Dashboard
      </h1>

      {/* Logout Button */}
      <div className="text-right mb-4">
        <button
          onClick={logout} // Call the logout function when clicked
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Tabs for selecting reservation type */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("rooms")}
          className={`px-4 py-2 rounded ${
            activeTab === "rooms" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Room Reservations
        </button>
        <button
          onClick={() => setActiveTab("dayOut")}
          className={`px-4 py-2 rounded ${
            activeTab === "dayOut" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Day-Out Packages
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`px-4 py-2 rounded ${
            activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Event Reservations
        </button>
      </div>

      {/* Scrollable Table for mobile view */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {(reservations[activeTab] || []).map((reservation) => (
              <tr key={reservation.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {reservation.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={reservation.status || "pending"}
                    onChange={(e) =>
                      handleStatusChange(
                        reservation.id,
                        activeTab === "rooms"
                          ? "RoomReservations"
                          : activeTab === "dayOut"
                          ? "DayOutPackages"
                          : "EventReservations",
                        e.target.value
                      )
                    }
                    className={`p-2 rounded ${
                      reservation.status === "approved"
                        ? "bg-green-500"
                        : reservation.status === "rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() =>
                      handleDelete(
                        reservation.id,
                        activeTab === "rooms"
                          ? "RoomReservations"
                          : activeTab === "dayOut"
                          ? "DayOutPackages"
                          : "EventReservations"
                      )
                    }
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleViewMore(reservation, activeTab)}
                    className="ml-4 text-blue-500 hover:underline"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render detailed information when a reservation is selected */}
      {renderDetails()}
    </div>
  );
};

export default Dashboard;
