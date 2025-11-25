import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"
import blog5 from "../assets/blogs/blog5.png"

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.2, staggerChildren: 0.15 },
  },
};

export default function BlogSection() {
  const latestPosts = [
    {
      title: "7 Emerging Generative AI Solutions Powering...",
      date: "18 Nov, 2025",
      image: blog2,
    },
    {
      title: "7 Cloud Consulting Trends Redefining Enterprise...",
      date: "18 Nov, 2025",
      image: blog3,
    },
    {
      title: "Data Governance in the Generative AI Era...",
      date: "14 Nov, 2025",
      image: blog4,
    },
    {
      title: "How Machine Maintenance Software Improves Uptime...",
      date: "5 Nov, 2025",
      image: blog5,
    },
  ];

  return (
    <section className="w-full bg-white text-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADING */}
        <motion.h2
          className="text-4xl font-extrabold mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Blog
        </motion.h2>

        {/* FEATURED BLOG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Calendar size={18} />
              <span>24 Nov, 2025</span>
            </div>

            <h3 className="text-3xl font-bold mb-4">
             How to Choose the Right IoT Platform for Your Business in 2026
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              For business and technology leaders today, the discussion about the
              Internet of Things (IoT) is no longer about adoption; it is about how IoT has...
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-black rounded-full hover:bg-red-600 hover:text-white transition flex items-center gap-2 font-medium"
            >
              Read More <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <motion.img
              src={blog1}
              alt="featured"
              className="w-full h-[340px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        {/* LATEST POSTS SECTION */}
        <motion.div
          className="mt-16 bg-gray-50 p-8 rounded-xl shadow"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Latest Posts</h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {latestPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl cursor-pointer"
              >
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="p-4">
                  <h4 className="font-semibold text-lg leading-tight hover:text-red-600 transition">
                    {post.title}
                  </h4>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
