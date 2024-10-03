import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./styleImports.css";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "1. How Can I Make A Reservation At A Resort?",
      answer:
        "You can make a reservation at a hotel or resort by contacting them directly through our website, phone, or email.",
    },
    {
      question: "2. What Is The Check-In And Check-Out Time?",
      answer:
        "The standard check-in time at our resort is around 9:00 AM to 11:00 AM, while check-out time is typically between 9:00 AM to 12:00 PM.",
    },
    {
      question: "3. What Amenities Are Included In The Room?",
      answer:
        "Amenities included in our resort room can vary widely based on the type of accommodation. Common amenities include a bed or beds, private bathroom, toiletries, towels, television, air conditioning or heating, Wi-Fi access, and a mini-fridge.",
    },
    {
      question: "4. What Forms Of Payment Are Accepted?",
      answer:
        "Our resort typically accepts a variety of payment methods, including credit cards (Visa, Mastercard, American Express, etc.), debit cards, cash, and sometimes mobile payment options like Apple Pay or Google Pay.",
    },
  ];

  return (
    <div className="faq text-center">
      {/* <div className="relative mx-auto">
        <img
          className="h-96 w-full object-cover"
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="faq-imag"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl">
            FAQ <br />
            <span className="text-white text-xl">Home &#62; Faq</span>
          </h2>
        </div>
      </div> */}
      <br />
      <div className="px-4">
        <div className="lg:flex flex-col items-center py-6">
          <h6 className="text-green-700 mb-2">FAQ</h6>
          <h1 className="text-5xl title mb-2">Frequently Asked</h1>
          <h1 className="text-5xl title mb-6">Questions</h1>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="tracking-wide md:w-3/4">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 pl-2 border-b border-gray-300">
                <div
                  className="cursor-pointer align-baseline"
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center justify-center">
                    <h2 className="sm:text-lg lg:text-xl font-semibold mb-4">
                      {faq.question}
                    </h2>
                    <FontAwesomeIcon
                      icon={
                        activeQuestion === index ? faAnglesUp : faAnglesRight
                      }
                      className="ml-3 text-green-700"
                    />
                  </div>
                </div>
                {activeQuestion === index && (
                  <p className="text-gray-700 mb-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Faq;
