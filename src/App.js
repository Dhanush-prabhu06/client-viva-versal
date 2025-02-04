import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Booking from "./Screens/Booking";
import Contact from "./Screens/Contact";
import Galary from "./Screens/Galary";

import Faq from "./Screens/landing-compo/Faq";

import Landing from "./Screens/Landing";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import ProtectedRoute from "./admin/auth/ProtectedRoute"; // Import ProtectedRoute
import { AuthProvider } from "./admin/auth/AuthProvider"; // Import AuthProvider
import RoomDetails from "./Screens/RoomDetails";
import GallerySection from "./Screens/gallery-section/GallerySection";
import RoomsPhotos from "./Screens/gallery-section/listed-cards/RoomsPhotos";
import ResortPhotos from "./Screens/gallery-section/listed-cards/ResortPhotos";
import PoolAndActivitiesPhotos from "./Screens/gallery-section/listed-cards/PoolAndActivitiesPhotos";
import EventsPhotos from "./Screens/gallery-section/listed-cards/EventsPhotos";

import ScrollToTop from "./components/ScrollToTop";
import AcRooms from "./Screens/room details/AcRooms";
import NonAcRooms from "./Screens/room details/NonAcRooms";
import DayOutPackage from "./Screens/room details/DayOutPackage";

import Menu from "./Screens/Menu";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/GallerySection" element={<Galary />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/faq" element={<Faq />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/roomDetails" element={<RoomDetails />} />

          {/* Galary Routing */}

          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/gallery/RoomsPhotos" element={<RoomsPhotos />} />
          <Route path="/gallery/ResortPhotos" element={<ResortPhotos />} />
          <Route
            path="/gallery/PoolAndActivitiesPhotos"
            element={<PoolAndActivitiesPhotos />}
          />
          <Route path="/gallery/EventsPhotos" element={<EventsPhotos />} />

          {/* Room details pages */}

          <Route path="/roomDetails/AcRooms" element={<AcRooms />} />
          <Route path="/roomDetails/Non-Ac-rooms" element={<NonAcRooms />} />
          <Route
            path="/roomDetails/Dayout-package"
            element={<DayOutPackage />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
