import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Cog, Package, Building } from "lucide-react";

// Client logos
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";
import client7 from "../assets/clients/client7.png";
import client8 from "../assets/clients/client8.png";

const clientLogos = [
  client1, client2, client3, client4,
  client5, client6, client7, client8,
];

// Text data
const tabContent = {
  "AI & GenAI": [
    "AI Agent",
    "AI Chatbot",
    "AI-as-a-Service",
    "Enterprise AI",
    "Generative AI",
  ],
  Services: [
    "UI/UX Design",
    "Frontend Development",
    "Backend APIs",
    "Cloud Deployment",
    "QA & Automation",
  ],
  Products: [
    "CRM Platform",
    "AI Dashboard",
    "Automation Suite",
    "Analytics Platform",
  ],
  Industries: ["Healthcare", "Finance", "Retail", "Manufacturing", "Automotive"],
};

// Icon map
const tabIcons = {
  "AI & GenAI": <Bot size={20} className="text-red-600" />,
  Services: <Cog size={20} className="text-red-600" />,
  Products: <Package size={20} className="text-red-600" />,
  Industries: <Building size={20} className="text-red-600" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("AI & GenAI");

  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========== TRUSTED BY CLIENTS ========== */}
        <motion.h3
          className="text-4xl text-center font-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Trusted by 1100+ Clients Globally
        </motion.h3>

        {/* Marquee */}
        <div className="mt-14 overflow-hidden">
          <div className="relative">
            <div
              className="flex items-center gap-8 whitespace-nowrap marquee"
              aria-hidden="true"
              style={{ "--marquee-duration": "20s" }}
            >
              {clientLogos.concat(clientLogos).map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-32 h-16 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`client-${i}`}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== MAIN SECTION ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mt-16">

          {/* LEFT SIDE */}
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4">What we do?</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              At Softude, we believe every business challenge is an opportunity
              for innovation — and with Generative AI, there is no limit to
              what we can build together.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                         text-white px-5 py-3 rounded-full font-medium shadow transition"
            >
              Talk to Our Experts <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* RIGHT SIDE — Pill Bar + Animated List */}
          <motion.div
            className="flex flex-col items-center w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Pill Navigation */}
            <div className="inline-flex bg-black rounded-full p-1 shadow-lg w-full">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-full font-medium transition
                    ${
                      activeTab === tab
                        ? "bg-red-600 text-white"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SMOOTH HEIGHT WRAPPER */}
            <motion.div
              layout
              className="mt-6 w-full min-h-[180px]"
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 text-lg font-medium text-black"
                >
                  {tabContent[activeTab].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      {tabIcons[activeTab]}
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .marquee {
          display: inline-flex;
          animation: marquee var(--marquee-duration) linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
