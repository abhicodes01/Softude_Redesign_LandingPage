import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";

import story1 from "../assets/work/story1.png";
import story2 from "../assets/work/story2.png";
import story3 from "../assets/work/story3.png";

import t1 from "../assets/work/t1.png"
import t2 from "../assets/work/t2.png"
import t3 from "../assets/work/t3.png"
import t4 from "../assets/work/t4.png"

// -------------------- Success Stories Data --------------------
const stories = [
  {
    title: "AI-Powered Customer Support",
    description: "Automated support reducing workload by 60% for a global brand.",
    image: story1,
  },
  {
    title: "E-Commerce Modernization",
    description: "Built scalable storefront with 2x performance improvements.",
    image: story2,
  },
  {
    title: "Enterprise Automation Suite",
    description: "Improved productivity and workflow automation by 40%.",
    image: story3,
  },
];

// -------------------- Testimonials Data --------------------
const testimonials = [
  {
    id: 1,
    name: "Rashesh Amin",
    role: "CEO, Jash",
    image: t1,
    message:
      "I would like to say a big Thank you for your immense effort and support. Our future events are going to be great!",
  },
  {
    id: 2,
    name: "Fredric Persic",
    role: "Principal IT Consultant, Pointmatix",
    image: t2,
    message:
      "Exceptional delivery! Their team understood our needs and provided outstanding results.",
  },
  {
    id: 3,
    name: "JR Pierman",
    role: "President and CEO",
    image: t3,
    message:
      "We have been working together for years. Their commitment and quality never fail.",
  },
  {
    id: 4,
    name: "Joseph Publicover",
    role: "Director, Surgvision",
    image: t4,
    message:
      "Professional, creative, and highly reliable. Looking forward to more collaborations.",
  },
];

// ---------------------------------------------------------------

export default function Work() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative w-full bg-white text-black py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------------------------------------------------
            HEADING - FADE UP
        ---------------------------------------------------------- */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-10"
        >
          Client <span className="text-red-600">Success Stories</span>
        </motion.h2>

        {/* ---------------------------------------------------------
            SUCCESS STORY CARDS - STAGGER
        ---------------------------------------------------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {stories.map((story, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={story.image}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{story.title}</h3>
                <p className="text-gray-200 text-sm mb-3">{story.description}</p>
                <button className="text-red-500 font-medium flex items-center gap-2">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <button className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-medium hover:bg-red-600 hover:text-white transition">
            Explore All
          </button>
        </motion.div>

        {/* ---------------------------------------------------------
            OUR VALUES + VIDEO
        ---------------------------------------------------------- */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold">Our Values</h2>
          <p className="text-xl text-gray-700 mt-1">
            Relationship <span className="text-red-600">Beyond Contracts</span>
          </p>

          <div className="mt-8 rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-[540px] rounded-xl"
              src="https://www.youtube.com/embed/as9FB26o5lg?si=08ojJYGhQDCzg6Rq"
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* ---------------------------------------------------------
            TESTIMONIALS - SCROLL ANIMATION + SLIDER + STAGGER
        ---------------------------------------------------------- */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-10">
            What They <span className="text-red-600">Say About Us</span>
          </h2>

          <div className="flex gap-10 items-center">

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
            >
              <ArrowLeft />
            </button>

            {/* Main Testimonial */}
            <motion.div
              className="flex-1 bg-gray-50 p-8 rounded-xl shadow relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-8 items-center"
                >
                  {/* Image with slight delay */}
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    src={testimonials[index].image}
                    className="w-40 h-40 rounded-xl object-cover shadow"
                  />

                  {/* Text stagger */}
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.08 },
                      },
                    }}
                  >
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="text-lg text-gray-700 leading-relaxed mb-4"
                    >
                      “{testimonials[index].message}”
                    </motion.p>

                    <motion.h4
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="font-bold text-xl"
                    >
                      {testimonials[index].name}
                    </motion.h4>

                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="text-gray-500 text-sm"
                    >
                      {testimonials[index].role}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
            >
              <ArrowRight />
            </button>

          </div>

          {/* Thumbnails */}
          <motion.div
            className="flex justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <button key={i} onClick={() => setIndex(i)}>
                <img
                  src={t.image}
                  className={`w-20 h-20 rounded-xl object-cover border-2 transition ${
                    index === i
                      ? "border-red-600 scale-110 shadow-xl"
                      : "border-gray-300 opacity-70 hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
