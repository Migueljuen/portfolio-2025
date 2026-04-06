import React from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <header class="flex justify-between z-10 sticky top-0 bg-white py-4">
      <motion.p
        id="about"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.8, delay: 0.1 }}
        className="text-lg "
      >
        <a href="#" class="">
          Miguel Juen
        </a>
      </motion.p>
      <div>
        <nav>
          <ul class="space-x-8 hidden md:flex">
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <a href="#featured" class="">
                Featured Work
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <a href="#mockups" class="">
                Mockups
              </a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0.4,
              }}
            >
              <a href="#footer" class="">
                Reach Out
              </a>
            </motion.li>
          </ul>
          <button onclick="toggleMenu()" class="block md:hidden text-sm">
            See more
          </button>
        </nav>
      </div>
    </header>
  );
}
