import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Facilities from "./Screens/landing-compo/Facilities";
import WA_E from "../src/components/WA_E";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WA_E />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
