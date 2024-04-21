import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <hr />

      <div className="text-center mt-6">
        <h2 className="font-bold">Connect with</h2>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl">
              <IoLogoFacebook />
            </a>
          </li>
          <li className="text-xl md:text-3xl">
            <a href="https://www.linkedin.com/in/rachna-ab7b53275/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="text-xl md:text-3xl">
            <a href="https://github.com/Rachna-Rathor" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="text-xl md:text-3xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center bg-slate-700 py-2 text-white rounded-md my-14">
        <span className=''>Made By </span>
        <FaHeart className="mx-1" />
        <span>Rachna</span>
      </div>
    </div>
  );
}

export default Footer;
