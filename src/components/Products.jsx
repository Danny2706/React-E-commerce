// eslint-disable-next-line no-unused-vars
import React from "react";
import { ProductsData } from "../assets/data";
import { FaStar } from "react-icons/fa6";
function products() {
  return (
    <div className="mt-14 mb-12">
      <div className="conteainer">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sit
            asperioret modi sit asperiories modi
          </p>
        </div>
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
          md:grid-cols-4 lg:grid-cols-5 place-items-center
          gap-5"
          >
            {ProductsData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px]
                object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10
             cursor-pointer bg-primary text-white
             py-1 px-5 rounded-md">View All Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default products;
