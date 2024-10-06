import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "Our family had an unforgettable time at this resort! The natural surroundings made it so peaceful, and the staff was extremely friendly. The kids loved the adventure activities too!",
    author: "Ravi Kumar",
  },
  {
    id: 2,
    text: "The perfect place for a relaxing break! My wife and I enjoyed the calm environment, and the day-out package was worth every rupee. Great food and even better service.",
    author: "Anjali Sharma",
  },
  {
    id: 3,
    text: "We had our engagement party here, and it was beautifully organized! The team was very accommodating, and the view of the greenery was stunning. All our guests had a fantastic time.",
    author: "Rajesh and Priya Menon",
  },
  {
    id: 4,
    text: "I’ve visited many resorts, but New Viva Fernleaf is unique. The mix of nature, comfort, and activities is unmatched. I recommend it to everyone looking for a peaceful escape.",
    author: "Sneha Patil",
  },
  {
    id: 5,
    text: "A great place for a family getaway. The staff was polite, the food was delicious, and we loved the rope course adventure. My kids can't wait to come back!",
    author: "Vikram Reddy",
  },
  {
    id: 6,
    text: "The new road was well-marked and easy to follow, and the peaceful surroundings made it a perfect break from the city. Highly recommend for those looking to recharge.",
    author: "Meera Nair",
  },
  {
    id: 7,
    text: "The rooms were clean and comfortable, and the activities were fun for the whole family. We really enjoyed our weekend stay. Will definitely visit again!",
    author: "Deepak Joshi",
  },
  {
    id: 8,
    text: "Celebrated my birthday here, and it was an incredible experience. The staff went out of their way to make it special. Lovely place with wonderful service!",
    author: "Neha Agarwal",
  },
  {
    id: 9,
    text: "The resort is amazing! Even though the route changed, the staff guided us well, and everything went smoothly. We had a fantastic corporate retreat.",
    author: "Siddharth Rao",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const transitionDuration = 3000;

  const extendedTestimonials = [...testimonials, testimonials[0]];

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 10000); //set slide change time for 10sec
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionDuration);
    }
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }

    startAutoSlide();
  };

  const handleScroll = () => {
    stopAutoSlide();

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 2000);
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setIsTransitioning(true);
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* New Top Content */}
      <div className="text-center mb-8">
        <div className="items-center">
          <h1
            className="uppercase text-green-700 tracking-widest"
            style={{ wordSpacing: "2px" }}
          >
            TESTIMONIALS
          </h1>
        </div>
        <br />
        <div className="title text-4xl text-gray-800 px-2">
          Hear from those who've experienced paradise
        </div>
      </div>

      {/* Existing Carousel Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Side - Resort Image */}
        <div className="w-full md:w-1/2 h-96 p-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2FIMG_5782.webp?alt=media&token=925a176d-157c-4f58-86cb-8368fd1de507"
            alt="main-image"
            className="bg-cover bg-center w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Testimonials Slider */}
        <div
          className="w-full md:w-1/2 p-6 overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex transition-transform duration-1000 ease-in-out ${
              isTransitioning ? "transition-all" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transitionDuration: isTransitioning
                ? `${transitionDuration}ms`
                : "100ms",
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
                style={{ width: "100%" }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg italic">"{testimonial.text}"</p>
                  <p className="mt-4 text-right font-semibold">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
                  index === currentIndex % testimonials.length
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
