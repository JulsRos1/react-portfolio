import React from 'react';
import css from '../assets/css.png';
import react from '../assets/react.svg';
import php from '../assets/php.png';
import tailwind from '../assets/tailwind.png';
import html from '../assets/HTML.png';
import git from '../assets/git.png';
import sql from '../assets/sql.png';
import node from '../assets/nodejs.png';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'ReactJs', img: react },
    { name: 'Tailwind', img: tailwind },
    { name: 'PHP', img: php },
    { name: 'CSS', img: css },
    { name: 'HTML', img: html },
    { name: 'Git', img: git },
    { name: 'MySQL', img: sql },
    { name: 'NodeJS', img: node },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <section className="max-w-6xl h-full mx-auto px-5 mt-30" id="skills">
      <div className="flex items-center justify-center mb-10 border-b-3 border-[#66B933] max-w-59 mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Tech Stack
        </motion.h1>
        <Code className="w-8 h-8 ml-1 text-white" />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-200 font-bold text-black p-5 rounded-xl flex flex-col space-y-2 justify-center items-center border border-transparent hover:bg-black hover:border-neutral-300 hover:shadow-xl hover:text-white transition-all duration-300"
          >
            <motion.img
              src={skill.img}
              alt={skill.name}
              className="h-20"
              whileHover={{ rotate: -2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <h1>{skill.name}</h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
