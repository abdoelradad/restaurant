"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="pt-16 text-white bg-no-repeat bg-cover bg-footer">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href={"/"}>
              <Image src={"/assets/logo.svg"} width={90} height={36} alt="" />
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            <div>
              <h4 className="mb-5 font-semibold ">Blog</h4>
              <ul className="flex flex-col text-sm gap-y-6">
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 font-semibold ">New Item</h4>
              <ul className="flex flex-col text-sm gap-y-6">
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    Sit asdasd asdasdasd asdasdasdasda dasdasda
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-semibold ">Socials</h4>
              <ul className="flex flex-col text-sm gap-y-6">
                <li>
                  <Link href={"/"}>Facebook</Link>
                </li>
                <li>
                  <Link href={"/"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"/"}>Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full py-4 border-t border-white/10">
          <a className="mx-auto text-sm text-center w-fit text-white/60">
            Copyright &copy; W'Food 2024
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
