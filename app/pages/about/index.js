"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Social from "@/app/components/Social";

export default function About() {
  return (
    <section
      className="flex flex-col-reverse items-center md:flex-row md:items-start py-10 px-6 md:px-20 mt-20 gap-10"
      id="about"
    >
      <motion.div className="text-center md:text-left md:w-2/3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-3 text-3xl md:text-4xl font-medium tracking-tighter"
        >
          Hey, I'm Airon Jim{" "}
          <span>
            <motion.div
              animate={{
                rotate: [0, -15, 0],
                transition: { duration: 1, repeat: Infinity },
              }}
              className="inline-block"
            >
              👋
            </motion.div>
          </span>
        </motion.h1>

        <div className="flex justify-center md:justify-start">
          <Social />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-4"
        >
          <p className="text-white/70 text-xl">
            I'm a{" "}
            <span className="text-[#F0DB4F] font-semibold">
              Full-stack Developer
            </span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-white/70 mt-4 max-w-2xl"
        >
          I'm a passionate Full-Stack Web Developer with 3 years of experience,
          passionate about building high-quality, user-friendly web
          applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="text-white/70 mt-2 max-w-2xl"
        >
          From backend to frontend, I thrive on building seamless digital
          experiences that not only look good but also work flawlessly.
        </motion.p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ y: `-5vw`, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
        className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80"
      >
        <Image
          alt="Airon Pingad"
          fill
          className="rounded-lg object-cover"
          src="/images/about/aironss.png"
        />
      </motion.div>
    </section>
  );
}
