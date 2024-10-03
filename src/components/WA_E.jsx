import React from "react";
import WhatsAppIcon from "../assets/icons/whatsapp-svg-icon.svg";
import EmailIcon from "../assets/icons/email-svg-icon.svg";
const WA_E = () => {
  return (
    <div className="flex flex-col fixed bottom-5 right-5 z-50">
      <a
        href="mailto:vivafernleaftumkur@gmail.com?subject=Query regarding booking.."
        aria-label="Send an Email"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center  mb-2"
      >
        <img src={EmailIcon} alt="email logo" className="w-16 h-16" />
      </a>
      <a
        href="https://wa.me/919886009778?text=Hello!!"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        className=" flex items-center justify-center rounded-full "
      >
        <img src={WhatsAppIcon} alt="whats app logo" className="w-14 h-14" />
      </a>
    </div>
  );
};

export default WA_E;
