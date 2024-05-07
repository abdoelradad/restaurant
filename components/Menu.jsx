"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIoArrowRoundForward, IoIosArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const menu = [
  {
    img: "/assets/menu/item-5.webp",
    title: "Stilton and pancetta penne",
    price: "$10.00",
  },
  {
    img: "/assets/menu/item-6.webp",
    title: "Plodie and Fernch Brast",
    price: "$16.00",
  },
  {
    img: "/assets/menu/item-7.webp",
    title: "Bepronie and Clozop",
    price: "$12.00",
  },
  {
    img: "/assets/menu/item-4.png",
    title: "Stilton and pancetta penne",
    price: "$5.00",
  },
];

const Menu = () => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite Menu</h2>
          <Link
            href={"/"}
            className="flex items-center justify-center text-green xl:justify-end mb-[16px]"
          >
            View All
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>

        {/* menu */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[15px] xl:grid-cols-4"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-xl mx-auto xl:mx-0 group"
              >
                <div className="overflow-hidden w-[270px] h-[270px]">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt="image"
                    className="object-center transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                {/* title */}
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href={"/"}>
                    <h3 className=" font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-semibold font-poppins text-orange">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
