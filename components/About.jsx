"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9">Let's Talk About W'Food</h1>
        <p className="mb-8">
          Et eos no accusam sit aliquyam sadipscing dolor. Elitr voluptua lorem
          labore elitr eos et sea, clita aliquyam lorem sanctus sea stet et.
          Amet lorem ipsum et sed accusam justo,.
        </p>
        <p className="mb-10">
          Bleu je les haleurs houle si d'oiseaux comme, les cotons moi et baigné
          courais triomphants ou glaciers et. Dans moi parfums quille teignant
          lune archipels rouleurs exaltée en, la carcasse.
        </p>
        <Button>Read more</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image
          src={"/assets/about/img.png"}
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
