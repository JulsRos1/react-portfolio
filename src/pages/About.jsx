import React from "react";
import bgself from "../assets/bgself.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white bg-black mx-2 mt-20" id="about">
      <motion.h1
        className="text-4xl text-center mb-5 text-white font-bold border-b-3 border-[#66B933] max-w-43 mx-auto"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto rounded-2xl shadow-lg p-10 sm:p-15 hover:border-neutral-500 hover:border-1 hover:scale-105 transition-all  duration-300 ease-in-out">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="lg:w-[54%] w-full space-y-6 max-w-prose mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }} >
            
          <h2 className="font-bold text-xl lg:text-3xl text-center lg:text-left">
            Hello, I'm Jenn Julian Ros
          </h2>
          <p className="md:text-lg leading-relaxed text-center lg:text-left">
            A Bachelor of Science in Information Technology graduate with a
            strong foundation in software development and web technologies-I
            enjoy turning ideas into functional, user-focused applications.
          </p>
          <p className="md:text-lg leading-relaxed text-center lg:text-left">
            My academic journey has equipped me with skills in programming,
            database management, and problem-solving, while my passion for
            learning drives me to keep up with the latest in tech trends. I
            believe technology should make life simpler and more meaningful, and I aim to contribute by building smart, reliable, and
            user-friendly solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="lg:px-6 lg:py-3 px-4 py-2 rounded-xl shadow-md border-2 border-[#66B933] bg-black text-secondary font-semibold transition-all duration-300 ease-out hover:bg-[#66B933] hover:text-black hover:shadow-[0_0_20px_#66B933]"
            >
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="lg:px-6 lg:py-3 px-4 py-2 rounded-xl shadow-md border-2 border-[#66B933] bg-black text-secondary font-semibold transition-all duration-300 ease-out hover:bg-[#66B933] hover:text-black hover:shadow-[0_0_20px_#66B933]"
            >
              Visit LinkedIn
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }} >
          <motion.img
            src={bgself}
            className="w-full max-w-sm md:max-w-sm lg:max-w-[23rem] rounded-2xl shadow-xl object-cover"
            alt="Jenn Julian Ros"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
