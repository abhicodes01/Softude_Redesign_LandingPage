import React from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

export default function Hero() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: { delayChildren: 0.15, staggerChildren: 0.15 },
    },
  };

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden z-0 pt-48"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "linear-gradient(to top, #b91c1c 0%, rgba(185,28,28,0.5) 40%, transparent 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "100% 80%",
      }}
      initial="hidden"
      animate="visible"
      variants={containerStagger}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 px-6 w-full">
        <div className="relative">

          {/* Heading + Text */}
          <motion.div
            className="mb-8 text-center flex flex-col items-center justify-center max-w-xl mx-auto w-full"
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              We Care, We Develop &<br /> We Innovate
            </h1>

            <p className="text-lg text-gray-200">
              Powered by AI & available on any device, our platform makes booking 
              and management simple.
            </p>
          </motion.div>

          {/* Web Preview */}
          <div className="relative flex justify-center items-center">

            <motion.div
              className="shadow-2xl rounded-xl overflow-hidden border border-gray-900 bg-[#101010]
                         w-[600px] h-[350px] flex items-center justify-center scale-105"
              variants={fadeUp}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src={hero1}
                alt="hero1"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              variants={fadeUp}
              className="absolute left-0 top-15 -translate-x-1/2 bottom-[-60px]"
            >
              <div className="rounded-3xl border-4 border-white/20 shadow-xl bg-black 
                              w-40 h-80 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={hero2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Floating Card */}
            <motion.div
              variants={fadeUp}
              className="bg-black absolute overflow-hidden -right-35 -bottom-10 
                         border border-white/20 rounded-xl shadow-xl flex flex-col 
                         w-60 h-60 items-center"
            >
              <img
                src={hero3}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
