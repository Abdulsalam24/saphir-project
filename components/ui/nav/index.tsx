"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "svgs/icons/logo.svg";
import { FaAlignRight } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const Nav = () => {
  const navList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },
    {
      text: "Contact",
      link: "#contact",
    },
    {
      text: "Join waitlist",
      link: "#joinWaitlist",
    },
  ];

  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToogle = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menuToggle]);

  return (
    <nav className="py-5 md:p-10 relative">
      <ul className="navList md:flex hidden justify-between items-center max-w-[712px] mx-auto gap-5 text-white">
        <Link href="#about">
          <li className="font-bold">About</li>
        </Link>
        <Link href="#contact">
          <li className="font-bold">Contact</li>
        </Link>
        <div>
          <Image width={68.71} height={97} src={logo} alt="Logo" />
        </div>
        <Link href="#home">
          <li className="font-bold">Home</li>
        </Link>

        <Link href="#joinWaitlist">
          <li className="font-bold">Join waitlist</li>
        </Link>
      </ul>

      <div
        className={`bg-[#182925] md:hidden transition-all flex items-start justify-between px-5 pt-10 fixed top-0 w-full min-h-screen left-0  ${
          menuToggle ? "opacity-1" : "opacity-0 hidden"
        }`}
      >
        <ul className="pt-14 flex-1 flex flex-col gap-10 text-white">
          {navList.map((item, index) => (
            <Link href={item.link} key={index} onClick={handleMenuToogle}>
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
        <MdOutlineClose
          fill="#fff"
          className="w-[30px] h-[30px]"
          onClick={handleMenuToogle}
        />
      </div>
      <div className="flex justify-between px-5 items-center md:hidden">
        <div>
          <Image width={50} height={57} src={logo} alt="Logo" />
        </div>
        <div onClick={handleMenuToogle}>
          <FaAlignRight fill="#fff" className="w-[30px] h-[30px]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
