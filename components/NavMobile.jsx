"use client";
import React, { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: 0,
  },
  {
    icon: <RiHomeFill />,
    path: "contact",
    name: "contact",
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconsStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${containerStyles}`}>
      {/* av trigger btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="outline-none cursor-pointer "
      >
        <RiMenu2Line className="text-3xl text-black transition-all duration-200 font-extralight " />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full ">
          {/* nav close */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute flex items-center justify-center w-10 h-10 text-4xl text-white cursor-pointer bg-green left-8 top-8"
          >
            {/* <IoCloseOutLine /> */}
            <IoClose />
          </div>

          {/* logo */}
          <Link href={"/"}>
            <Image src={"/assets/logo.svg"} width={120} height={36} alt="" />
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={true}
                  className="flex items-center gap-x-3"
                >
                  <div className={`${iconsStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* btn */}
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button variant="orange">Book a table</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
