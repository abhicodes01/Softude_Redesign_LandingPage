import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import video1 from "../assets/expertise/video1.mp4"
import video2 from "../assets/expertise/video2.mp4"
import video3 from "../assets/expertise/video3.mp4"

export default function ExpertiseSection() {
  const data = [
    {
      number: "1",
    title: "We Develop",
    text: "We Develop Our development process is thoughtfully designed with a client-centric and agile approach. We combine rigorous testing and quality assurance with industry expertise and best practices to ensure both reliability and security. Throughout the project lifecycle, we emphasize transparent communication reflecting our commitment to excellence.",
    video: video1
    },
    {
      number: "2",
      title: "We Innovate",
      text: "Softude transforms the ordinary into the extraordinary through relentless innovation. We seamlessly merge state-of-the-art technology with human-centric principles, enhancing our operations, enriching our team, and client deliveries.",
      video: video2
    },
    {
      number: "3",
      title: "We Care",
      text: "Care is more than a value at Softude —it's our promise to both our clients and our team. Our commitment goes beyond just delivering solutions; we provide ongoing support to ensure people associated with us feel valued every step of the way. This is driven by our genuine desire to make a positive impact",
      video: video3
    },
  ];

  return (
    <section className="w-full bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">
            How We Help You
          </h2>
          <p className="text-xl text-gray-300 mt-2">
            We Go Beyond the Expected!
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative border-l-2 border-red-600 ml-[18px] md:ml-1 md:border-l-0 md:border-none">

          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            // Create a ref for each block
            const blockRef = useRef(null);

            // Track scroll inside each block
            const { scrollYProgress } = useScroll({
              target: blockRef,
              offset: ["start end", "end start"],
            });

            // The number follows the block scroll
            const moveY = useTransform(scrollYProgress, [0, 1], [0, 250]);

            return (
              <div key={index} ref={blockRef} className="relative mb-28 md:mb-40">

                {/* Number Circle with Scroll Animation */}
                <motion.div
                  style={{ y: moveY }}
                  className="absolute left-[-18px] md:left-1/2 md:-translate-x-1/2 top-0 z-20"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-red-500/40"
                  >
                    {item.number}
                  </motion.div>
                </motion.div>

                {/* Connector Line (desktop only) */}
                <div className="hidden md:block absolute left-1/2 top-14 w-0.5 bg-red-600 h-full"></div>

                <div
                  className={`md:flex md:items-center md:gap-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* TEXT BLOCK */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 mt-12 md:mt-0"
                  >
                    <h3 className="text-3xl font-bold text-red-600 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-md leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>

                  {/* IMAGE BLOCK WITH HOVER EFFECT */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
                  >
                    <div className="w-60 h-60 rounded-xl overflow-hidden bg-white/10 border border-white/20 shadow-xl flex items-center justify-center hover:shadow-red-600/40 transition-all">
                      {item.video && (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
