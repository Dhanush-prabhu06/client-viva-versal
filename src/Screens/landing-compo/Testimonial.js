import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "This resort is amazing! Had the best vacation.",
    author: "John Doe",
  },
  {
    id: 2,
    text: "A perfect getaway, with excellent service!",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Stunning views and wonderful hospitality.",
    author: "Emily Johnson",
  },
  {
    id: 4,
    text: "This resort is amazing! Had the best vacation.",
    author: "John Doe",
  },
  {
    id: 5,
    text: "A perfect getaway, with excellent service!",
    author: "Jane Smith",
  },
  {
    id: 6,
    text: "Stunning views and wonderful hospitality.",
    author: "Emily Johnson",
  },
  {
    id: 7,
    text: "This resort is amazing! Had the best vacation.",
    author: "John Doe",
  },
  {
    id: 8,
    text: "A perfect getaway, with excellent service!",
    author: "Jane Smith",
  },
  {
    id: 9,
    text: "Stunning views and wonderful hospitality.",
    author: "Emily Johnson",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const transitionDuration = 500; // Transition time in milliseconds

  // Duplicate the first testimonial at the end for seamless loop
  const extendedTestimonials = [...testimonials, testimonials[0]];

  // Function to start the auto-slide
  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Function to stop the auto-slide
  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide(); // Clean up on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // After reaching the last (duplicate) slide, instantly go back to the first slide
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, transitionDuration);
    }
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    stopAutoSlide(); // Stop carousel auto-slide during touch
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left (next slide)
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right (previous slide)
      prevSlide();
    }

    startAutoSlide(); // Restart auto-slide after interaction
  };

  const handleScroll = () => {
    stopAutoSlide(); // Stop carousel auto-slide during scroll

    // Clear the timeout if it's already set
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Restart the auto-slide after the user stops scrolling (with a small delay)
    scrollTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 1000);
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setIsTransitioning(true);
    setCurrentIndex(index);
    startAutoSlide(); // Restart auto-slide when a dot is clicked
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100"
      onScroll={handleScroll}
    >
      {/* Left Side - Resort Image */}
      <div className="w-full md:w-1/2 h-96 p-6">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/new-viva-fernleaf-resort.appspot.com/o/crousal%2FIMG_5782.webp?alt=media&token=925a176d-157c-4f58-86cb-8368fd1de507"
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
              : "0ms",
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
  );
};

export default Testimonial;
