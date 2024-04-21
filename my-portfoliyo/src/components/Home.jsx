import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import rachna2 from "../../public/rachna2.jpg";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-2xl">welcome to my Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>hello,I a</h1>
              {/* <span className="text-red-600 font-bold">developer</span> */}
              <ReactTyped
                // typedRef={setTyped}
                className="text-red-600 font-bold"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, maxime. Quod mollitia, eius quis ut, qui cupiditate id
              exercitationem iste laborum repudiandae asperiores assumenda
              voluptate tempora officia nisi officiis! Explicabo. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Error blanditiis
              corrupti, et, beatae nemo, sapiente facilis itaque modi natus sunt
              enim animi. Saepe doloremque tempore ipsa dicta sequi facere
              molestiae!
            </p>
            <br />

            <div className="flex md:justify-between items-center flex-col md:flex-row space-y-6 md:space-y-0 ">
              {/* Social media icon */}
              <div className="space-y-2">
                <h2 className="font-bold text-center">Available on</h2>
                <ul className="flex space-x-4">
                  <li>
                  <a href="https://www.facebook.com/"
                  target="_blank"
                  className=" text-xl md:text-3xl cursor-pointer">
                    <IoLogoFacebook />
                    </a>
                  </li>

                  <li className="text-xl md:text-3xl cursor-pointer">
                    <a href="https://www.linkedin.com/in/rachna-ab7b53275/" target="_blank">
                    <FaLinkedin />
                    </a>
                  </li>
                  <li className="text-xl md:text-3xl cursor-pointer">
                    <a href="https://github.com/Rachna-Rathor" target="_blank">
                    <FaGithub />
                    </a>
                  </li>
                  <li className="text-xl md:text-3xl cursor-pointer">
                    <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              {/* MERN images */}
              <div className="space-y-2 ">
                <h2 className="font-bold">Currently working on</h2>
                <ul className="flex space-x-4 ">
                  <li className=" text-xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full">
                    <SiMongodb />
                  </li>
                  <li className=" text-xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full">
                    <SiExpress />
                  </li>
                  <li className=" text-xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full">
                    <FaReact />
                  </li>
                  <li className=" text-xl md:text-3xl hover:scale-110 duration-200 border-[2px] rounded-full">
                    <FaNodeJs />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48  mt-8 md:mt-24 space-y-2 order-1">
            <div>
              <img
                className="rounded-full md:w-[450px] md:h-[450px]  object-fill"
                src={rachna2}
                alt=""
              />
            </div>
          </div>
        </div>
        <br/>
        <hr/>
      </div>
    </>
  );
}

export default Home;
