// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FooterLink } from '../assets/data';
import { FooterLink2 } from '../assets/data';
import { FooterLink3 } from '../assets/data';
import Logo from "../assets/Logo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="md:flex md:justify-between
          md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7"
        >
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold
                  sm:text-left text-justify mb-3 flex items-center
                  gap-3"
            >
              <img src={Logo} alt="" className="max-w-[50px] rounded-full" />
              Shope Here
            </h1>
          </div>

          <div
            className="grid grid-cols-2
              sm:grid-cols-3 col-span-2 md:pl-10"
          >
            <div>
              <div className="px-8 py-4">
                <h1
                  className="sm:text-xl text-xl
                  font-bold sm:text-left text-justify
                  mb-3"
                >
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary
                          hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2
              sm:grid-cols-3 col-span-2 md:pl-10"
          >
            <div>
              <div className="px-8 py-4">
                <h1
                  className="sm:text-xl text-xl
                  font-bold sm:text-left text-justify
                  mb-3"
                >
                  Products Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink2.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary
                          hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2
              sm:grid-cols-3 col-span-2 md:pl-10"
          >
            <div>
              <div className="px-8 py-4 pr-52">
                <h1
                  className="sm:text-xl text-xl
                  font-bold sm:text-left text-justify
                  mb-3"
                >
                  Special Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink3.map((data) => (
                    <li
                      className="cursor-pointer hover:text-primary
                          hover:translate-x-1 duration-300 text-gray-200"
                      key={data.title}
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div >
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>
                    @Dani Kume
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>
                    +251 946142138
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2
                  lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400
                  text-sm"
      >
        <span>© 2024 Danibaba. All rights reserved.</span>
        <span>Terms. Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer
