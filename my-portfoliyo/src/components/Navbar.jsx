import React, { useState } from "react";
import rachna from "../../public/rachna.jpg";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {Link} from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    // { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16 relative z-50">
        <div className="flex space-x-2">
          <img src={rachna} className="h-12 w-12 rounded-full" alt="Rachna" />
          <div>
            <h2 className="text-xl font-semibold cursor-pointer">
              Rach<span className="text-orange-500 text-xl">na</span>
            </h2>
            <p className="text-sm">web developer</p>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer hover:underline"
              >
               <Link to={text}
               smooth={true}
               duration={500}
               offset={-70}
               activeClass="active"
               > {text}</Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer"
          >
            {menu ? <MdClose size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col items-center h-screen justify-center space-y-3 text-2xl bg-white relative z-40">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer "
            >
              <Link
               onClick={() => setMenu(!menu)}
               to={text}
               smooth={true}
               duration={500}
               offset={-70}
               activeClass="active"
               > {text}</Link>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
