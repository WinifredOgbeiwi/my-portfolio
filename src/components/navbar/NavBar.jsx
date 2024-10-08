import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/Images/logo.png'
import navLinks from "./navLinks";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialMedia from "../socialMedias/SocialMedia";

function NavBar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <nav
        data-aos="fade-down"
        className="flex justify-between items-center text-black text-lg w-full z-50 px-7 py-2 fixed border-b-[1px] border-gray-100 bg-white"
      >
        <div>
         <a href="/"> <img src={Logo} alt="" className="w-12" /> </a>
        </div>

        <ul className="hidden md:flex ">
          {navLinks.map(({ id, link }) => {
            return (
              <li
                key={id}
                className=" px-4 cursor-pointer hover:scale-105 duration-300 capitalize "
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-black md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul
            className="flex flex-col justify-center items-center absolute top-0 right-0 w-2/3 h-screen bg-white border-l-[1px] border-gray-100">
            {navLinks.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 md:hidden"
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNav(!nav)}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
            <SocialMedia />
          </ul>
          
        )}
      </nav>
    </>
  );
}

export default NavBar;
