import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Booking from "./Screens/Booking";
import Contact from "./Screens/Contact";
import Galary from "./Screens/Galary";
import Packages from "./Screens/landing-compo/Packages";
import Amanities from "./Screens/landing-compo/Amanities";
import Crousal from "./Screens/landing-compo/Craosal";
import Facilities from "./Screens/landing-compo/Facilities";
import Faq from "./Screens/landing-compo/Faq";
import Welcome from "./Screens/landing-compo/Welcome";
import Testimonial from "./Screens/landing-compo/Testimonial";
import Landing from "./Screens/Landing";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Register from "./admin/Register";
import ProtectedRoute from "./admin/auth/ProtectedRoute"; // Import ProtectedRoute
import { AuthProvider } from "./admin/auth/AuthProvider"; // Import AuthProvider
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoomDetails from "./Screens/RoomDetails";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Galary />} />
          <Route path="/amanities" element={<Amanities />} />
          <Route path="/crousal" element={<Crousal />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
          <Route path="/roomDetails" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
