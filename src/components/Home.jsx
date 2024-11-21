// eslint-disable-next-line no-unused-vars
import React from "react";
import { Images } from "../assets/data";
import Slider from "react-slick";
// eslint-disable-next-line react/prop-types
function Home({ handleOrderpopup }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div
      className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px]  bg-gray-100
     flex justify-center items-center
      dark:bg-gray-950 dark:text-white
       duration-200"
    >
      <div
        className="h-[700px] w-[700px] bg-primary/40
           absolute -top-1/2 right-0 rounded-3xl
           rotate-45 -z-9"
      ></div>
      <div className="container pb-8 sm:pb-8">
        <Slider {...settings}>
          {Images.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <div
                className="grid grid-cols-1
                       sm:grid-cols-2"
              >
                <div
                  className="flex flex-col justify-center
            gap-4 pt-12 sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7px 
              font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                    <br />
                    adipiscing elit, sed ad?
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => handleOrderpopup()}
                      className="bg-gradient-to-r from-primary
                  to-secondary hover:scale-105 duration-200
                  text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="500"
                      src={data.img}
                      alt=""
                      className="w-[500px] h-[300px] sm:h-[450px]
                sm:w-[570px] sm:scale-125 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home;
