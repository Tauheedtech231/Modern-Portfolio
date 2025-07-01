"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05 || direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-6 left-0 right-0 z-[5000] max-w-6xl mx-auto px-6 py-4 rounded-xl shadow-lg flex items-center justify-between backdrop-blur-md bg-black/60 border border-white/10",
          className
        )}
      >
        {/* Logo or Name */}
        <h1 className="text-white text-xl font-bold">Tauheed.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="text-white text-sm font-medium hover:text-purple-400 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {!mobileMenuOpen ? (
            <HiMenuAlt3 onClick={() => setMobileMenuOpen(true)} />
          ) : (
            <HiX onClick={() => setMobileMenuOpen(false)} />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full mt-2 right-6 left-6 rounded-xl bg-black/80 border border-white/10 shadow-md md:hidden overflow-hidden"
            >
              <ul className="flex flex-col text-white text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="block w-full px-4 py-3 hover:bg-purple-500/20 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
