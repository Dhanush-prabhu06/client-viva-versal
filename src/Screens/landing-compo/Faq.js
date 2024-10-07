import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styleImports.css";

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
        "Amenities included in our resort room can vary widely based on the type of accommodation. Common amenities include a bed or beds, private bathroom, toiletries, towels, television, air conditioning and Wi-Fi access.",
    },
    {
      question: "4. What Forms Of Payment Are Accepted?",
      answer:
        "Our resort typically accepts a variety of payment methods, including UPI payments and cash is welcomed",
    },
    {
      question: "5. Are Day-Out Packages Available?",
      answer:
        "Yes, we offer special day-out packages that include access to the swimming pool, indoor and outdoor games, as well as adventure activities like rope courses. You can book these directly through our website.",
    },
    {
      question: "6. Do You Provide Event Hosting Services?",
      answer:
        "Absolutely! Our resort is available for hosting a wide range of events including weddings, engagements, conferences, and birthday parties. Please contact us for more details about event packages and bookings.",
    },

    {
      question: "7. Are Pets Allowed At The Resort?",
      answer:
        "Unfortunately, pets are not allowed at our resort to ensure the comfort of all our guests.",
    },
    {
      question: "8. Is The Resort Easily Accessible?",
      answer:
        "Due to a recent issue with the main road, we have built a separate road to the resort, with clear signboards added for ease of navigation. Please follow the updated route for a smooth drive.",
    },
  ];

  return (
    <div className=" text-center">
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
          <h1
            className="uppercase text-green-700 tracking-widest"
            style={{ wordSpacing: "2px" }}
          >
            FAQ
          </h1>
          <h1 className="text-3xl lg:text-4xl title mt-2">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-2 flex justify-center">
          <div className="tracking-wide md:w-3/4">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 pl-2 border-b border-gray-300">
                <div
                  className="cursor-pointer align-baseline"
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center justify-center">
                    <h2 className="sm:text-md lg:text-lg font-semibold mb-4">
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
