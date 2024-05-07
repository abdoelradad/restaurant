"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${
        active ? " bg-black-heavy py-4" : "bg-none py-8"
      } fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="px-2 py-1 bg-white rounded-xl">
            <Image src={"/assets/logo.svg"} width={150} height={30} alt="" />
          </Link>
          {/* Nav */}
          {/* <Nav
            containerStyles={"hidden xl:flex gap-x-12 text-white"}
            linkStyles={"capitalize"}
          /> */}
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          {/* Mobile Nav */}
          {/* <NavMobile
            containerStyles={"xl:hidden"}
            iconsStyles={"text-2xl"}
            linkStyles={"uppercase"}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
