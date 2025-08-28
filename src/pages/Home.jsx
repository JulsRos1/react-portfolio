import React from "react";
import { SquareCode } from "lucide-react";
import { motion } from "framer-motion";
import Orb from "../animations/Orb";


// Wrap the Lucide icon in motion()
const MotionSquareCode = motion(SquareCode);


const Home = () => {
  return (
  <div className="h-screen bg-black text-white flex justify-center items-center" id="home"> 
    <div className="relative w-full h-[600px] flex justify-center items-center">
      {/* Orb */}
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />

      {/* Overlayed content */}
      <div className="absolute flex flex-col font-bold justify-center items-center gap-2">
        <MotionSquareCode
          size={45}
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-1"
        >
          Jenn Julian Ros
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-md md:text-lg"
        >
          Ideas | Design | Code
        </motion.h2>
      </div>
    </div>
  </div>
  );
};

export default Home;
