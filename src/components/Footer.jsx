import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const footerLinks = {
  About: ["About Us", "Careers", "Leadership Team", "Events"],
  Products: [
    "B2B Online Ordering App",
    "Costing Automation",
    "Insights",
    "AI Products",
  ],
  Services: [
    "AI Development",
    "Chatbot Development",
    "Digital Engineering",
    "Mobile App Development",
    "Cloud Transformation",
  ],
  Industries: [
    "Automotive",
    "Finance",
    "Healthcare",
    "Logistics",
    "Retail",
    "EdTech",
  ],
  Resources: ["Blogs", "Case Studies", "Press Release"],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-10 lg:px-20">
      {/* MAIN GRID */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
      >
        {/* LEFT LINK GROUPS */}
        {Object.entries(footerLinks).map(([title, items], index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
            <ul className="space-y-2 text-gray-300">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-red-600 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ADDRESS BLOCK */}
        <div className="space-y-6 mt-6 md:mt-0 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Address</h3>

          {/* Office 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#111111] p-5 rounded-xl border border-white/10 shadow-lg space-y-3"
          >
            <div className="flex items-start gap-3">
              <Phone className="text-red-600" />
              <div>
                <p className="text-gray-300">+91 731 4972583</p>
                <p className="text-gray-300">+91 9303800613</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-red-600" />
              <p className="text-gray-300">info@company.com</p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-red-600" />
              <p className="text-gray-300 leading-relaxed">
                14th Floor, Skye Corporate Park, Indore,<br />
                Madhya Pradesh 452010
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 my-8"></div>

      {/* BOTTOM SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15 }}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-red-600 hover:border-red-600 transition"
            >
              <Icon className="text-white" size={20} />
            </motion.div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </p>

        {/* POLICY LINKS */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="hover:text-red-600 cursor-pointer">Privacy Policy</span>
          <span>|</span>
          <span className="hover:text-red-600 cursor-pointer">Sitemap</span>
          <span>|</span>
          <span className="hover:text-red-600 cursor-pointer">Disclaimer</span>
        </div>
      </motion.div>
    </footer>
  );
}
