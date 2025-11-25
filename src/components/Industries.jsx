import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { motion, AnimatePresence } from "framer-motion";

export default function Industries() {
  const [active, setActive] = useState("HealthCare");

  const industries = {
    Banking: {
      color: "#b91c1c",
      description:
        "AI-powered diagnostics, medical automation, predictive analytics, patient engagement systems, and enterprise-grade hospital platforms.",
    },
    Education: {
      color: "#7f1d1d",
      description:
        "Fraud detection, AI trading models, risk scoring, financial automation, and next-gen digital banking solutions.",
    },
    HealthCare: {
      color: "#dc2626",
      description:
        "Smart vehicle systems, AI maintenance prediction, telematics dashboards, and automated service booking platforms.",
    },
    Automotive: {
      color: "#ef4444",
      description:
        "Customer behavior analytics, inventory prediction, AI chatbots, recommendation engines, and automated order pipelines.",
    },
  };

  const pieData = Object.keys(industries).map((key) => ({
    title: key,
    value: 25,
    color: industries[key].color,
  }));

  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">Industries We Serve</h2>
          <p className="text-lg text-gray-300 mt-2">
            Real-World Applications of Our Innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Interactive Pie Chart */}
          <div className="relative flex justify-center items-center">
            {/* PIE CHART */}
            <PieChart
              data={pieData}
              lineWidth={40}
              radius={42}
              animate
              segmentsStyle={{ cursor: "pointer", transition: "all 0.3s" }}
              segmentsShift={(index) =>
                pieData[index].title === active ? 5 : 0
              }
              onClick={(e, index) => setActive(pieData[index].title)}
            />

            <div className="absolute -right-15 bottom-20 flex items-center gap-2">
              {/* line */}
              <svg width="80" height="20">
                <line
                  x1="0"
                  y1="10"
                  x2="80"
                  y2="10"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
              {/* dot */}
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              {/* label */}
              <p className="text-white text-md">Banking & <br /> Financial services</p>
            </div>

            <div className="absolute -right-12 top-[110px] flex items-center gap-2">
              <svg width="80" height="20">
                <line
                  x1="0"
                  y1="10"
                  x2="80"
                  y2="10"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              <p className="text-white text-md">Automotive</p>
            </div>

            <div className="absolute -bottom-2  left-1/4 -translate-x-1/2 flex flex-col items-center">
              <svg width="2" height="80">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="80"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
              <span className="w-4 h-4 bg-red-600 rounded-full mt-1"></span>
              <p className="text-white text-md mt-1">Education</p>
            </div>

            <div className="absolute -left-12 top-[110px] flex items-center gap-2">
              <p className="text-white text-md">HealthCare</p>
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>
              <svg width="80" height="20">
                <line
                  x1="80"
                  y1="10"
                  x2="0"
                  y2="10"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT: Dynamic Content */}
          <div className="text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-red-600">{active}</h3>
                <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                  {industries[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
