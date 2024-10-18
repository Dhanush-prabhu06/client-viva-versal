import React from "react";
import WhatsAppIcon from "../assets/icons/whatsapp-svg-icon.svg";
import EmailIcon from "../assets/icons/email-svg-icon.svg";
import PhoneIcon from "../assets/icons/phone-svg-icon.svg"; // Add phone icon import

const WA_E = () => {
  return (
    <div className="flex flex-col fixed bottom-2 right-2 z-50">
      <a
        href="tel:+919886009778" // tel: protocol for phone call
        aria-label="Call us"
        className="flex items-center justify-center rounded-full mb-3"
      >
        <img src={PhoneIcon} alt="phone logo" className="w-14 h-14" />
        {/* Use phone icon */}
      </a>
      <a
        href="https://wa.me/919886009778?text=Hello!!"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center rounded-full mb-2"
      >
        <img src={WhatsAppIcon} alt="whatsapp logo" className="w-14 h-14" />
      </a>

      <a
        href="mailto:vivafernleaftumkur@gmail.com?subject=Query regarding booking.."
        aria-label="Send an Email"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center mb-2"
      >
        <img src={EmailIcon} alt="email logo" className="w-16 h-16" />
      </a>
    </div>
  );
};

export default WA_E;
