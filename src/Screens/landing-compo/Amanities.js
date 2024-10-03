import React from "react";
import "../../assets/styleImports.css";
import "./amanities.css";

const Amenities = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2">
        <div>
          <div>
            <div
              className=" uppercase text-green-700 tracking-widest pl-4"
              style={{ wordSpacing: "2px" }}
            >
              LUXURY, COMFORT & TAILOR-MADE SERVICES
            </div>
            <br />
            <p className=" text-4xl title text-gray-800 px-2">
              Amenities & Services
            </p>
          </div>
        </div>
        <div>
          <br />
          <p className=" text-base text-gray-600 text-wrap px-2">
            Relax and rejuvenate in our lavish spa, take a refreshing swim in
            our sparkling pool, or maintain your fitness routine in our modern
            gym facilities. Indulge your palate with exquisite dining options at
            our onsite restaurants, and stay connected with complimentary
            high-speed Wi-Fi throughout the hotel.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div
        id="servicecards"
        className=" w-full flex space-x-4 flex-wrap justify-evenly relative scroller element services"
      >
        <div
          className=" w-80 h-96 flex flex-col items-center mb-12 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
        >
          <p className=" title-services absolute text-3xl bottom-4 text-white left-4 h-16 pl-[50px]">
            Restauarant
          </p>
          <p className=" mini-tital text-white absolute text-base bottom-0 left-9 h-10 w-64 pl-11">
            Culinary Experience
          </p>
        </div>
        <div className=" w-80 h-96 relative flex flex-col items-center mb-12 bg-[url('https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600')]">
          <p className=" title-services text-white absolute text-2xl inset-x-16 bottom-10  h-10 pl-2">
            Spa & Wellness
          </p>
          <p className=" mini-tital pl-3 absolute text-base inset-x-16 text-white bottom-0 h-10">
            Spa. Sauna. Massage
          </p>
        </div>
        <div className=" w-80 h-96 flex flex-col relative items-center mb-12 bg-[url('https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600')]">
          <p className=" title-services text-white absolute text-2xl inset-x-92 bottom-10 h-10 ">
            Celebration
          </p>
          <p className="absolute mini-tital text-white text-base inset-x-92 bottom-0 h-10 ">
            Meeting & Events
          </p>
        </div>
        <div className=" w-80 h-96 flex flex-col relative items-center mb-12 bg-[url('https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&w=600')]">
          <p className="absolute text-slate-800  title-services text-3xl font-bold inset-x-92 bottom-10 h-10 ">
            Fitness Center
          </p>
          <p className=" mini-tital font-semibold absolute text-base inset-x-92 bottom-0 h-10">
            Trainning Space
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
