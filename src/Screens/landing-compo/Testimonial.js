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
        <div
          className="bg-cover bg-center w-full h-full rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUWFxcbFhgYGRgXGBgXFxYWGBgXFxcZHSogGBolHRcYITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy8mICUtLS0tNzAvLS8vLS8tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABAEAABAgQEAwUHAgQFAwUAAAABAhEAAyExBBJBUQUiYQYTcYGRMkKhscHR8FLhFCNyohVDYrLxFoLiByQzY8L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAtEQACAgICAAQFAwUBAAAAAAAAAQIRAyESMQQTQVEiMmFx8IGh0QVCUrHxFP/aAAwDAQACEQMRAD8AzZUIYmYx1aHS00hqxAXsM/ckUQrpE+HnFNLHQwKnrDjPBpt0YxmvQKfqWMyWAl1JLkUItAS5psbEW6RPh+KCWghYcUo1epHheDpisKtkiYM6hTwu52HWJcuL2ivHmtMonjnhcUpCfe1PwJrTwiLvkuzx0JpnM00S5o4qjmjmhhNnRKEgxG0OTGZkzlIhGh5jmgmYiYcI4CJ5RSaKp4fWAwodh5raCLrAT0KooN5xU4eSlwSqlIPx+GKEpmoYpO2niIhkSbo6MbklYvEpGSqX+kBpxigLwi8apVCYhIh4wpVISeS3cRsxZNzCAQ4CHARVEWzgIcBCgRIlMYA0CHpEKkQ8CMYQCHAQ4CJJctzGDQwCJAmJe6AFx9fOJJcs2p+dYXkHiQAQ8CJTKOsPRJLO1I3JAoWVJBbm0/BDu6FiWqYLlYW28Om4MjTy38ITmr7KcHXQGECmsOCYlkSSoskV2glOCNX5Tt4wXJLsVRbB5iAGYvSvjCBMEABJII1+RhVrfRoyZmjzwIOxjpkwCh+R+kaiZwyXVS15RvQAbXjLdq+GlCmuGcFykeLh6xzQzxm6R1zwSxqyBS3SSguxY1b4sYqZqiOdRUCRQMoP47eQgLCT1gqKS6j7yfr97x2IxqySVEEkafY28otbOclHEFEM7gi2j6EUP5tD0O5SkhNHAOtBZulYAUBqlmFdCa3/AARwQD7KyWGo+FPnAMFKxCnzZRRnYlqWN/2EaLgY71J/lVqWBCAScr5QbKqksG9r1zYxJSxyjY3qOv2jRcK7QS5Us93LCphCQBlZ1Amr1BZ/0iFk2loeFX8RLMwM1Cg6gUV0IO3Nmsp9PG+sgTA2H4rPnrJyqScpzZQ7ZWJUlFTsOVyxOwjVSeGBaAtS1AkOxCX6VAAPoLijxlm4/MN5PP5DP5YXLBq5ABIeI8kXU7IOFA7RzQRlENKYNitEYEKBD8kL3cGwUxZfi0SpxCgCl3H5aI8kKEwKTGTaEAhQIUCFaCKIBDwIUCHgRjUdLRBMtI1hJE5qEAiHmeNEgQkmykUhuQaRJKl6UHjDUqMSIEC2akOEo6pfw/aHmWRZxBOHQrSLSWpwygG1o5icstFI4rKbDtqPvBaZaTqPOGTkHNZolRK3aC3ewJVoXKjQsfhBuHnIYAgDqHYxXjWHKlqGlIDhemzKbW0jRSFoSl2BHqamA53E0uCEAjTcRXycPMIZLtDpuEUkAkfsdoSOGCe3ZSWadaQk6c6swoYapZJcmphAmJEpjoSSOVybGhMPCYclMPCYIDznGY6dOlqlq5FIILg0UBfl/GMGz8H30nKskqYOT7RALsesBy5gPN0Y/u0PM0ZkKKqJDi97Dz8Y4+NdHocr7M7xjhSZQcKIrlZTZgTupNGo9bRWYNE0nOgOz1FTRgal94tuJ4kB05paisq5nIILsxtR2qaUgUIORBTkSp6KSpYWQan2WDXpW8Wic7q9EeOwh7vOWBKqAXtqQaalvShiuNKOTX6fnpBs6UgEHMVCucg2IUapLF3a8MSGIYZ7uSCxD2YAEKsXeGFojLsxKhWxs9WfW5N4WWvKwzOl/ZcuCKOxHXY6wiyWzFICS4DNuDWvhD0zgEcvtPU6hi4+lurvANROjEKSoLQspJNwWIOtvpvGlwHaheVptUij+8zMAfS/WMpKxoDctHBJuXDVAsP3g7DYoGZmUaKVW4e3tNtfyhJRTGjJx6NMMahStUlVRmYPVqF2MEmXFHLwDHKpSQrJ/LqKlyQepdvSGcN4pMS3fEBIJD9RcUq/0igPuaASTEgw5h0pQh+aBbDxiMTI6QRLkDaECjoTDjNUzQHbGSQUESmYwIqWEm/KflDJcpRP3gbD4kmdNllSFJRlbIrMXIq5HWkBadWGW/QJxMhIqguD+ViDJE6wR4GGBMVi9dkZLYwJiQJhGh6RDNiUKlMSJliEQjeJgBp6xKUisYj0SoIlJG30jkzLQfKRmFPlWIObXZdQT6JMOsNygDxieYsWArAiJZU+UF0/lofLw5UARff6QnFXbG5OqQsxOatAdoZ/BKNYsJGFVchzBEvBl623jeco+pvKcu0U8nDUIUK6Rb4Dh4IZidiYtcLgZZTmUwbWn1iY4tITykpO9HiM/FSnqKDHEosAmzUyrprsNbRV4zGlYaod3DUbTqYZilhVSoqVqTELR14cKW32c+XK3pdDQmHpTDkph4THRZz0NSIeEw5KYkCY1mPHmKFlMxTbH9Q90k+sHFSgMpZRPuu1PHV4rMRj1pYJ5aVBY3erWGvrCYXEzFqUVEIZBIIIAJsDVxtb0jnjNM6egHi3D5hmAMA5OUJqEjXN5jaJMZhF5SCllMhiklioOC4NElgavVqQNie8VMCpalk7uSRauw/eLrhSF5ck5aBnPvMCWqzgbl6vdoommKkU2DBUcq+UZdQMtjlJy2NHBOvjE+PEkIQkOkpFQzlT5SSDYG9jFpxLBJkoUlBzDK1DVLMA6tXzKHio3ipxmFzIM1JCQA4Q6qVZ+a929I1roLTBJ0zKgS9wlzQ/6qHQE9N4fJwyix5TylVCGoNXseh69YkxkrKlCFBIWxfQuqz6eAENw0haU5kMK1cvUNQg0NR8dRGYKB8ThhdBcEVuDWzi1X0hJQJHKa0udgdYuZeCmzCTMSGIJ/TW4cCrPBsngyR7ZKv7WG1KkQoeJSypK1hLKZizklx+zxNL4POdgWBLkk/IXf0jR4eSlIZKWHSChIgppB4A3D8MtAYzFK9AANOvxi0lIeGSsMYspGHo5hrMokKEQs4hKSpRCUi5MZnhvaLuZPdlJmTQpdbIZzXNdVXoB6RScTxuIxCgVE0sAGSPAfW8LKaj2Oot9B3Hu0zuiTQfqND/AOPz8IzeDxK5a86TXcRNP7xPtAHxSII4YBMcFKQegIf4/jxvMjVoDxu6Zp+EceTNZK+VX9p+x/OkXCh1eKCZ2WV3RnJTyi7E/IwNwztB3au7mZinqzjw/UOn/EJjyxn8rNPG4/MapCHgyQhIvXygfC4gLAUkhQNjeDpWzQMkw44DO4N2+cSJw5/TSLHC4YgOD8oNwkoksCKat9o5peJUTpWCytwslOo8YtsIhAs/SkP/AIVY/SeuVz8oNkIsMo8h9o5smZS6KwhxBpROdwgh73D/ALxOjDnMdIPCB7zDofsKwNipqAAznqPpWEhkcnSRrSOmLSlw/wAIRXdJS61rY6Bn+UD4viQCRkSymZyE+tzFPNnLV7SiY68Xh3Jb0c2XOlouk8RlCgClbW+J/aK/HYnOxS4DWMCIRBUrCk7DxjqjihB2c8skp6B0piVKYNRhpafaW/RI+sNWAfZFPjFVOyThRCgQ/LDgiHhMMKMCYkCYcEw8JgWaj5/OKC5gW9Ca+Z/Nodi5LpVMSS1GcFnJUCkElmFPX1BBGpDsGKQHPqIIHEEd2pCu8dkhAzUBTQ5q7hLednji4uNcTpVPstOHcX7pCAlKCSnmUQ2po4NR9+kTI41LnKImqKWfK3KnLVwS716xnxJJTnYtQBh7wZwRpcesESOETZpBly2SdSaDxNvIRZNg2FcRLlKROOUqV7a0EUBKXdVLAElqnUws6WtYEtJzJVkCmAUwJFXDkUc38YtuHdlkis1Wc/pS4SOhNz8ItZkuVKTUolp6skRpb7Kxhorf8LBKVlKRlq1D7oA9Kn0iZEtIUUpACmBbo5A+LwJi+0mFRZec7IBPxLD4xnsb2hK1mZKBQcoQ5qSHKnawP2isIzm6QknFGxymFIAqogDclh6mMPN47OUjL3qgwajAnzAf4xUzJhUXUSo7kk/OO7L/AE7LjjybX6ElmTdI9Dmcbw6P81KuiOf4ikDYjtSE+xJUdiogD0D/ADjES412HwRyCj8op0baPKz5PKqzswYvMsi/6tnPUAJ2Tf8Auf1ixwnG5c2hmHNso/Qn5RnsVw0uopa5pZvCKqfJUk8wI/N4lKEM67/PsUTlhd0bThuDSTMe/eLD+b/WNRwjhMq6mjy7BcXmyQMhBFXCqgnd7ikanhXbCWrlmPKVu7p9fu3jHD4zwue7jtHTg8RhceL0y67X8OlZRkAf81jAYaZ3cwn9KmPhrGyxc0rDpIWOnzEY2YOab/WYfwLag4yN4uCuLRu8HxMmXkCuW7bxScU4amZWx3H1iv4FjmZJ90/2mNPMlOHhq8qeiarJHZlMFxGdhVsSw9Uq/qH1uI9S7M46TiZSVZgF2WKsD06HQxh8XhAoMoOIpeHTZ2GWuZIJKUrKVINQQADUed7x1us0fZnNTxPXR7fJxGHQWzuegPztEv8AjEkKdEtT70DxjuAcfkYkUDL1Sbg79R1i/OGULRzPw0E/ib/Vh5yey0m8ZUosDlHT7wwYhSveUa2c1gKVhCzkwbhpRSNTB44oL4QpS9iUzCnVqawPMOYgZiRS3SJJOAzEkg+sSzgiXQAnzp8IrFxTpbYklJrekAzJYelPHpDcoEOKtkiEyx1qzjkyQTTpCpJ3jkyzEqJfUCDpA2xqUxKkRwTEiRBsU6HAQoEPAgWYQCHgQqRD4Fho+aZWJBTkTLBOhCTmJpbQ+DPFtguyOImEZsstLa1LU90fUgxHhO1vdpIlSZaVADmU5UotUs4NTo+sV/Fu0WKmUM0pH6Ucg+FT5mNGFMs2jT8cw2HwsmkwHEJy5KJcMpJPKkbA1U/iYpl9uFBOWVKCf61qmN4WowFLRmVEkj4xCUm8deTFHHLinZPnJm+4DPnYtKzNxHdigSEqTKBfQFnPrFL2twPczgglzkCnJBNSoe05e0GcNUZeHBBZ5reiEmKzigC5jn9IqzANufPaPKg8kvENt6OySSxL3KqbKILENCBBY+I+sFTZR5XFOhBo7A+sGYaQigUU+1U6FLEV2UM35eO55Hj+I49PRUZDEiExbzcEkEPbKkDegOa3XKH8YAnBIJYuNH2a9Ib/ANcp6GikhECPb+FdmpUyVLmKSHSkMX2D2cOKvHiAcUIaLmRjZpIPeKYCgJJAtatI8j+oYJ5uNSqrPQ8NmUU0izxiWWv+tf8AuMD5QbxErEEmtdfMwoW24hFFpHY5psfwjhiJs7uiGClUIA5aXA1hONdlVS1EAON06/8Ab9of2d4iiVikzJjCWglSjVwMjBgA5q2msbjE8WlzUCahayhQdORGWjkf5ofQwcuXLjmmuqRy8Mc1T73/ALPKpSJ0kvLURuBbzSYejGUUZgrMUok7F2Ii+4pxySVKT/DTZikkh1La39LwJwzhveIUVDIQtYy+0xzDlf8A7hWOvn8LlkjRz7UlGDsppczKoKFtfCNdgO0kpKEhbkgNpp4xmeJcP7tbCxD/ABI+kafsjhMLMl88pJmJJCncg6gsaWiPiZY+Ck7f2K4FPlS0DY7tWg+zLbxL/JIilk8VVz5U+0sqoNwkfSN7xSbh5IyolICjYBADDegrGPw0zmmk6zFH+1MDw84uLqIc8ZJq2VizMUrOElKtxynxekbPsh2gx2Yyson5E5shWEzFCzJWxBIux2vpFGtYgns5xQSMSmYfZeWFHZCitKleQLx1Nqcao5vld2ercDx8qfLTNCSkn2kGqkKBYpUNDTVosp2KQKOfAGMyrKueJ0mXkLZVzV5kFadu6FVNYFYS2jiJsZxaTKDzXS5AzMShyWFRau7RzrCm72UeVpUqLUY5TMmg+MMCzuYiQXrEqY6VGK6RyuUn2xyYeBCJESAQ1iUclMSJEckQ9IjcjUKkQ8CEEK8Dkah4hwip43xX+Hl973a5iQefIzpT+og3GnnAGA7a4OYB/NyE6LBDHYm3pGtmo04Mc8UR7V4MJK++DJLUCiSbuA1R1jO43/1AWVkYeQCgarCiT1ZJYD1gN12Mo2eJpVzV3gyYgR2F4VMWpkpcirPdqlvKDhJmSyFZSPy0VeSN6YYdbK6bJI0a8KMMVJcCjs/W/wAoIxpYlQaoIZWjjTYh4scNMSZQd0lQFmY9TWj1jTyN/ExXIJw+BAlJWXJVMZ3ZIGWgc0F7xWccw/dzSFEOAlgnVwDdusE4XHzzLElQIlBTjMK8xAa4cUJvveggfik+USpKE5mSeerOGdg5LaP8IhFNTHnNOCSK9ZYvmGlLjTKBvaJJMhN12S9LudgBW7D7QOUKCgW0BAB3oDBWEn5SnOl9weoJLDeo9I6G9aIoim4wOMoUnLcvzGzlTejQiQCXBGwc1Hwv1hBiTlIUCbttTQ7s49fCOkoDsBzEOArXcAj4QKoISmQps2SgJGZLqctYm3/EWWHQ9GIJ0ILxWYPDzVqBQXCSkstTMaPcsbF9xFgrHEkS0gU96jAG4De0PwRzZU3pf8OvBrZNlrDxSGLlqSQ5BfUEH5W9BCqym8c7O9AolNMUkspwokGg/wAsgFn0MehcDH/tpaVAVQNf9Szt+NHnPcZiQksTmAJrpLPyBjUpnp/gxJ7wiYmTlBGcc4chlDR29YfxEk4JfU58cJcm/oUeOSUzl3ZSswO+YA/WC+AS55lLMpCVJE2ZmBJSXdJoWbah2jOHFnM/MQAMrlRrTrF5w7tUmQljLKxNVMWRSmeYR1qyLNrePQ8S45IJQj7L9iCkuVhisIqbOyzZcyWyUkkIVMCRmVzKMsFkkk1MBYLHHDnMGNWJFQQ5Y02//RgTjXaBM4vLKpRIAUA6Ulio6E0rqdIFwprmLEFBehdxao16j4xwrC3F8lr2/P5KSz9cd/UvcYubiZgWkFggKLkChJSNa1SoU2gLBTEs6yUoMxlEByAp6t0b0eK3CY5QYFVS6SfZIRXZquVHziaTi5YlpQHRzKUCeYFJdJSWq2oodd4pHDxTiiUstvkzSY/hsuWSBMJOXMl2ZQ6N+MRFViJdVB7oB/3D5kQFOmKKcpIU3sl2UlLMU5CAra9mgvH8SRMnqMtGVHdBAcV5VZszPQlm8IOOEoLbsWeSMukb/szjZy5KVTAVCozMAp0HKaD2nIJtTrF2gJWnRST5g6EGMPwzj/KUFaZKM6lEoS6iFKdkJLhCampc7C8bDB8UlTC0tRUQASACb9baGNLIlt6EUW+g3DSkoSEpACRQDQDaCkzBSt7ej/IQJIUVoC0pOVQcGgceDvGY7W4pSgmXLcKCgrM5RlIC8pBAqXBpE1mg/wC5D+VL2NykxIIyPZjtAtcp8QySlWUrHsnlSoFX6HzeDjSgjTyZwIBBBBsRUHzh2xKChDniBUxgTsIbOxACM+jBmDkk2AAuSdIFhoKCoG4hxCXJlmbMLJF2qX2A3jG8R7coEpSTLmBdiA6WrUFRqHAVUAs+8ee4riZOZIJQhV0hS1JJBcHnUS9tdIooP1FNl2q4lPn5iJndySEFMpShnLpd8rAgHxOlYyckKQeVQSWul3rcOYDGJUqpVmIpUkltBXSEXNJhnfRqLCXnFzylnD0LWcWMWGDIAuB5ViilYjT5ROMXsYjONlIuhVJyKBQXO4NiLVZoLUlcwBeRLC5zJBHiCX+MVkvHBBK1OUhmlglIUq3OfayipI1LQFiJs2YQEnlaiUhgANkjSE8psk2qLPFATKAOouKNZjYguT0LwFiAUMlwVJABA0ApVtekdw3iZkBVlPQ1KVMLoCvd8RWBRVRUkBILkJuzijm6h1i0YO2n0Jrst8FMXNCUAsGcpeimOW/u/WJFgEkZZYKbkqKT5sHP9PN84rMNOy0B5qEAaHML6D1iPF4kZ1BZUtySoBWUMwPg5JqW0hpxTlUOq/cyfuGrw6WIT7Fw4/U7tYgOKU3ivmzE94hV612Ym4+NIOCVVmACWQlNCrPytlS6Wy+FPCIsYjMQFAA5ktVy5qXJuDQeY2icHT2ZgYkHISLAM99yWGpiJU3OUEtSmoNPeLeDwVxAJ9kN0KTUEPmChs5IBp5xGMOMhJbMHcEsoixKd/CLKWrZkh0gJBKUEkKPIojKS1GLlq26vVoNkgfm408i48oDl4CYpIypVlDEcpFFkF67FO8XMvhykioF7uCKm4r1iOWUV6nVgavegaYs3d/GHJVEyeHqzMWYM5cW1samERw9RAIUmxN9ns16B/OI2jq82K9SvQtsp/8AsI9UmLFM2E/wsBIddQtyQzWdg52evUUgs8PSRRSn0dtns76GNOUWDHnjH1MzOQylAOwOgJYGqbflIjkzOWqHAd6UAf1ufjF7i+FrDlBCrAjUn9QejhzrYxRypUxjlSrKS5YajR46sc1JHPKuWvqL/FvVQJCcu+lEh2Og+EOnYgKSRXmYUY6v0e0RrkzAHILGts3r+8F8O4ZOUpKhLcZSoFgKJex/VQsOkO+K2T5SqiFcopBeaXDBiCBUHd9BEQLsGSq9mBufZAb5RaJ4YpSVLWhbJGiVAuAA3janWKqfhwC2XyCiW8SUsfKNCaeiUkyQkEMUkAaH5WhJPt0t+4hqZBdkh7609S0Sd1lUcwII0obux+EZtALWViaMwBfqxAarvQvGgwfEJy6ImUyBJykJAQknLmX7QAKjZn3jOImBUgPdC2G7LFfJ0vHfxSUJNSPFJFdwWIjknj5aodOn2b/hWJWmUBhwliBmJUhyRQn2nCXdn6x2BwcyasnEJLuhsuqVS5iqEZq/cWvHnv8AiaL0Uo5syynmqMtC12rBOD42ykMVcr1GZ7MHGtIWHhYRblx2dEszqrPSeBcNloC2GdKhLocpvLD1b8aDcJj5SZqsOlRCksQDSig4ANiaGl4xuE7RyEoGYTTRAIQtQDhOVRfM+gMTYbiuFKZ0zKshaQ+dYKnSkECq8wIJLEbRen6iaZ6AuYMpcsGqTtGQ4vxNsPyzv/jDDIpObvEqZOYG6RQ/jxl+OcaWRkkz1KlUdJJcOHIz3WA7OdfBznO/Jppfr6+kNCGrEkybGYxS1ElRJJcn6wIFh7N+awi5gFABDMzxRIQImzfwQpVT82ECq+kPTMIMagkkiZd4lz9IDT1hVU1gNBTHKQLCvqb67bRLJlqZno7EeNYMMkXKA51KhtrF3hOz8+ZUrlpBsl1DwJCU9BEvM9iUYt9GXVw+YXLgeJdocrBqIH8xIFXv02FY16OxcwlxMlG7DMdbn2N20ieZ2LxBzOqWAr3QZmW70BFIzyybGWGfsYfD4UJZaTnIoWIbo4uatSF7lIKyVFyzggVILkUP40bP/oecAwWgOQaBV0uQ7DqYrp/CRLUAqYiatQoEpDDme9WDBoDy+pnimu0UqeET1AoOqwSHDkke0XNm+LxZ4fAjOFLmIJDBgwsAErKia8rlt7bwddRchJZtVHMBlcCuWmYuD1rA09YQoMACSzAKABAJYCjVd61pEJZZS0aqHS8DISR/J6XUXq4q9XI+0KrGpQORDAO5CQKrep3Pi7sYE/in5gSokEE1FHpSxo++sOmSwUuQlxYMyRlDJYOSCzj0bSFr/INkv8YvM2ZyCw5Qo/pd30c12O8MmYgvmKswVYsKOcoyjSvnSK1fKcpASlzlqGJZzevlD5OLSQQArwqxLklhYC70inl+qBYcieQ6SA9ixAPtByG0v6w6StyAwFK0JqSWAZywDB+rwBLIdxy6AMBo9X0p/wAGHSl/pWDblIoCb2ND423gOJi0krIBJ5jSw1yuaae0IYopJylnIYsS9G83LC7axXTJ3Mz+BoQ6SLK8NCNYek0zEJKiKqr7I9h9AonQftA4Vs1h0jEhspSVEVO4ejUq4YV+8RcWwiiM0s5VhLqDAZ6gEqDXvDJU9w5tlo1qEVCg7aiJZWLRnIzZieamhIqQ3k9ut4FNO0FMzCsQskBJ0D6Dzg7hfFjLWP5jAPXmZyGIcPE+L4WjPmStISpyxaldiDT7XhF8PQpBSlSXuWcJJZgW0u3mY6nkg0ZOS9Szk8VKpKxnCs4aY9VJIIyrqN29Lm8VPeMkpUnM1KJDuTeuwfY/OI5XDFJLlxStLuGIDHY7GLeTNoGCVDKAbZqMnMFM6T9rRJtR62Hk32VJUuWQ6MoIoVJSxHQlNR4NeDcVgZapXehZEzNlUn3VBqENY0Pi7wYZKdLfpNCCAAHalgKjpaHJldaevW21oHm+qD9CilSCpnDMKNqxsRv6RbSZKig7pvZ7sDTT5a3ghSH0vEawfF9bO2j6GFlNyForpmCznmRrcZQrwJ+4pBUns+kJBBOf9Ki6WcgnMgfhiVS936VqD5WP284nTi6EHlUnKAz8yQAAlnvYt47Rnlmuho16orcZhik8wKFO2Yg5FeB8vOAiFCh128/tF1iMVloTUEctCDy+HVj5wEMPLUXSShg5ABUSWV7z8rX2i2PLrZqQMop0o4HjQM/1aBp0ova14LKEA2W29Heh9mvWj6japnDMCJszKCphVywU1BQVGrwVKjKLboqcoOmn4Y4YYiNPjOFIw8pgM7rBKlBLgANlBFWLl/LaL+fgsGcGiZ3S0LKpYUsEKRUcxOqfCrWvCyzU9FVi9zzlEmHnDl/w/ERrO1fDcPKmIThpmdJQkqLEMprVr1exekaCT2ESrApxCVVKkuTUnPlAGWzAkVfU+WeUKxnmPcXfe8SK4co1SM4OwqOhGkbvtJ2QOHlS5gRRabLDlZu6cpOUsbFrRnpOGAFXl7Aqd/BgT6wHlaFcKGJ7IYomipLG4Mwl/wC2ka/BSJyEATEOoCuTmHlrBWC4iaBQruKfeLiTjpZo5f5eJFBDSdlYY1Doz8mcyUpJKTlFC4LsNDEmHxKgCrN7x9Aw8ov8YtAQVLHKB7xDerx5/wAZ4vKWCJcsIGY2LOz8xAt/xE3oM8ij2E8Z44tfIGzJJIHm1XofDeKNeIUpRSUgAsHIuTS9ekQrmKolaXN3yu3iE+JvA+J4iEewMrguKCoaqhqafGEjBs45SctsNxeJALpUS75STVSjoEi3kw8YYmYlA5zWhrlKiCxYgUp11FBA0qXLCirIygl3JdKQHB6qUog7mEmTkMTmBS7H29Q4zJ/TpUQVFdKwHTZqiQsKFBZdKukk3ytpvfxhO7IDuKu5c5TcFKQ5AJHwItoQhIy3CjSiXCgGLqVcszNp8xX4rFrC2ahFHcOdFuqoI+Fbw8blpAod/Akqz5mBuq4NbMLfV4K7wS0mgyh3zUBd6AA8tfOh2aOkYlIdSksdNVEbJHvBwDpXpEUzFzCygFAAgBwdSoEqpagPgqM+UtMwkiUiYoq5ilLgJUzAKHuNYD7RHLnMQhAUwPNygKU1HoTWjP4eciVHKqaQWUQCp81eXmtQFhUEPSHT56chYFSaG5q6mYPVnY9YNuzDMVjstrl3Idm9mr0LPptesE4WckqDLdq0IDUDFjQitHsYGzkhISkZdEsASRrW1TeGT8PTNkUlXMzVJej9AKjT7DjGqMGAELQC6FapSCBYPlUdS43sNzCT5LnNmToAC+YlJfLmZhrcgtpA+ElWC1F/bNWGpoHuw09IfiZqglPK5UVAndiBWnp9I1bpBTLPDSwuWAsVTUBrPu+1KQhkJTmLmwJ3qaANbb1gbCTs2a4JYkE2Jc7a31tB0iewIY3Ygij1p+XApEp2mMMwrLDVJGo9aB7szQk7APzIOVbsc1no9R0dn1icS0OVA9Qklq6M1q0/KTFRUlJdqJ2u7F6M58onzaejACCqrvnBAINqXqNKfGCEBJq9yAw9WbY9If8AxPPkPugEdd3qQIrsTODmoIYM93Gg+ENtujaCFoKSFJ9lV6nlLUYaA/OHpUCwIBPR6ED4bPA8yXTMlyWepoWd/vDVT3I3sDUXbR6212g1YaHm6nJZ2qzUsX2OsB8Rl8uZ2UixDEsOt6O/rBs2cak81SClvX7+sAzHLipTR2/OsUgvUPCwY4tamBc7k2YkklRFcztXYQ4zEsQTVqUZy1jU9a7DrB2Fl8tAE9C22sNTLIJdAFb08QfzaDzV6Q3Ar5SVKIcgAXrc+O0Wkm7/AB/eIkp2o/WJ8JhlLUEoDk9G+NoWcuQ0Im/7NzzOlHOEkg5bXYD4wvGOz6Vp/l5UqDECuQ1fmTa+2sM4ZhDJlpSAaefMTvFometmMKoaOxbVMwfHMHiVkKmIOdAbMEuFAWcpH48aVWAaQiVIntNSoKdRDE6ggVAD0obRcd8/QiAJ/DpYX3stLTSFBxUF2NR5X6QV38QvCvlZV9ueIYoIlyysrk6EtRdeXcUH40Yo4h7qLi7Fh8Yu+0MrEZHxJQUu4ANiAQ4BA0JjOfwqTUEj0MM1GyErNUniqUozmxoL1YHpS0KjijZlBwDlbex2jo6FlJk3kkV3E+NKmZUgkkEumjHZyQ5uNYpjjiU51l+YBI3UlgAzM3mLm8dHRWMU3sjNtuwbHYorJDEEAggEAOANb3dxrE8nBFhOWkUAq9moGSNbVP7x0dGm+Cil6ioGWgqdIOimFABYkEj8d94fgsYtCCAxK2BdyC240YBr7QkdD6apmRNIxazkUQGTVk0B9lg2lfSBZyT7JSlwXJa1QeWt/nHR0ZUpUvz8sBJMwbuoEhRLCtWIdldGh4ZSMgWwfKMoIBokHR2Id3uY6OhU219jWOPEXeWl7M6mUCHFwf8AToNfWCp0piF5RVxTYB7amh+dY6OgZIqLVB9Bq8Gc2YqAJyrs7XygU2SQ1qPtEYwRSykg5VEXUCoe8SUtlL/SEjoj5jpBLEUSxDsgg2FQeZI6G7/OBlrUEuByuMrUooihGnlHR0CBiDD4r+dlS7K3JcUoHL+8D8NhB5KjlQtLqUxcMxJNSxs4f9o6OiuVJNfYKJZc9KaFRISAC9SCTfYvQ9GiKXilAnKfZbOFVodaXevWgeOjoTgt/nt/JhcQtKuZ6319PM/OKadOINWCXoL3V+0dHRXEt0CXQ+XxAO3Sn0NPSvSD5spQIY8wSCR0I+JJMdHQ2SKi9DY9sZMQXFKKq76gkb0Y7QxKyk0DZlFya83rHR0TfsdkYrg5D5qlBILA1AbZyz/KHqDbeQMdHRNbROCT/Pv/AAIOa17UAD/hjc9m+HCWh1e2b1+AbSEjoZLdFca+GyxVNBXlf2dOptpt84mUI6OhygNLNCeqv9xhs6cweoavpfXZ46OgAslVMJFzGD43wlctbyxmSpzUgEHXxvHR0NFISWz/2Q==')",
          }}
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
          className={`flex transition-transform duration-500 ease-in-out ${
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
