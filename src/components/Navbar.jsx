import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, Briefcase, BookOpen, Menu, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      height: scrolled ? 60 : 88,
      padding: scrolled ? 40 : 24,
      borderRadius: scrolled ? "999px" : "0px",
      backgroundColor: scrolled ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
      backdropFilter: scrolled ? "blur(28px)" : "blur(0px)",
      transition: { type: "spring", stiffness: 220, damping: 25 },
    });
  }, [scrolled, controls]);

  return (
    <header className="w-full fixed top-0 z-999">

      {/* TOP BAR */}
      <div className="bg-black/80 backdrop-blur-lg text-gray-200 text-sm py-2 px-4 flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            <Phone size={16} /> +91 9876543210
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} /> contact@ansell.com
          </span>
        </div>

        <div className="flex gap-4">
          <a href="/careers" className="flex items-center gap-1 hover:text-red-500">
            <Briefcase size={16} /> Careers
          </a>
          <a href="/blogs" className="flex items-center gap-1 hover:text-red-500">
            <BookOpen size={16} /> Blogs
          </a>
        </div>
      </div>

      {/* MAIN NAV */}
      <motion.nav
        animate={controls}
        initial={false}
        className="w-full shadow-xl flex items-center justify-between px-6 transition-all duration-300"
        style={{
          marginLeft: scrolled ? "auto" : 0,
          marginRight: scrolled ? "auto" : 0,
          marginTop: scrolled ? 20 : 0,
          maxWidth: scrolled ? "1100px" : "100%",
        }}
      >
        {/* LOGO */}
        <a href="/" className="font-bold text-xl text-white flex items-center gap-2">
          <img src={logo} alt="Logo" className="" />
        </a>

        {/* CENTER NAV LINKS */}
        <div className="hidden md:flex gap-8 justify-center flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 text-md px-3 py-2 hover:text-red-500 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <a
          href="/contact"
          className="hidden rounded-full md:flex items-center gap-2 border border-white px-5 py-2 text-white 
          text-sm font-medium hover:bg-red-600 hover:border-red-600 hover:scale-105 transition"
        >
          Contact Us <ArrowRight size={18} />
        </a>

        {/* MOBILE MENU */}
        <button className="ml-4 md:hidden text-gray-200">
          <Menu size={28} />
        </button>
      </motion.nav>
    </header>
  );
}
