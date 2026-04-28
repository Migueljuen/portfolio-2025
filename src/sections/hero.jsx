import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const FIGMA_URLS = {
  tutr: "https://embed.figma.com/proto/GnoV5RNwLywmXjry1EdA7A/Tutr?node-id=1-6&p=f&t=mQYQ1vf07ow4yhfB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6&show-proto-sidebar=1&embed-host=share",
  hiro: "https://embed.figma.com/proto/aIPo93jiFbZJhBEaA1fAwt/Hiro?node-id=5-3&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A3&embed-host=share",
};

function FigmaModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "95vw",
            height: "95vh",
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
          }}
        >
          {/* Header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: "1px solid #e5e7eb",
              background: "#fafafa",
            }}
          >
            <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500 }}>
              {project === "tutr" ? "Tutr — Prototype" : "Hiro — Design"}
            </span>
            <button
              onClick={onClose}
              aria-label="Close prototype"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#6b7280",
                lineHeight: 1,
                padding: "4px 8px",
                borderRadius: "6px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f4f6")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              ✕
            </button>
          </div>

          {/* Figma iframe */}
          <iframe
            title={project === "tutr" ? "Tutr Prototype" : "Hiro Design"}
            src={FIGMA_URLS[project]}
            allowFullScreen
            style={{
              width: "100%",
              height: "calc(100% - 49px)",
              border: "none",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // "tutr" | "hiro" | null

  return (
    <>
      {/* Figma Modal */}
      {activeModal && (
        <FigmaModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}

      {/* <!-- Mobile Menu Overlay --> */}
      <div
        id="mobileMenu"
        class="fixed inset-0 bg-white z-50 hidden flex-col px-6 py-8"
      >
        <div class="flex justify-between items-center mb-12">
          <p class="font-medium">Menu</p>
          <button onclick="toggleMenu()" aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul class="space-y-8 text-2xl">
          <li>
            <a href="projects.html">Featured Works</a>
          </li>
          <li>
            <a href="services.html">Solutions</a>
          </li>
          <li>
            <a href="about.html">Story</a>
          </li>
          <li>
            <a href="contact.html">Reach Out</a>
          </li>
        </ul>
      </div>
      {/* <!-- Hero Section --> */}
      <section class="flex mt-24 lg:mt-48 justify-start">
        <div class="">
          <motion.h1
            id="about"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0 }}
            className="text-base mb-4 text-black/60 "
          >
            Hey there,
          </motion.h1>

          <motion.p
            id="about"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-lg md:text-2xl leading-relaxed max-w-4xl "
          >
            Nice to meet you, I'm Miguel. I enjoy UI design, coding, and
            building user-centered digital experiences. Feel free to explore my
            portfolio and get in touch!
          </motion.p>
        </div>
      </section>
      {/* <!-- Main Section --> */}
      <main class="mt-24 lg:mt-48">
        <div class="">
          <h1
            class="text-base mb-8 pb-4 border-b border-gray-200"
            id="projects"
          >
            Featured Works
          </h1>

          <Link to="/project/2" className="w-full flex flex-col group mb-12">
            <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <video
                src="/vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg md:text-xl">Hakban</h1>
                <p className="text-sm md:text-lg text-gray">
                  Job application tracking made easy
                </p>
              </div>

              <p id="others" className="text-base md:text-xl text-gray">
                2026
              </p>
            </div>
          </Link>

          <Link to="/project/1" className="w-full flex flex-col group mb-12">
            <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden cursor-pointer">
              <img
                src="/img2.png"
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg md:text-xl">Itinera</h1>
                <p className="text-sm md:text-lg text-gray">
                  Itinerary planning made easy
                </p>
              </div>

              <p className="text-base md:text-xl text-gray">2025</p>
            </div>
          </Link>
        </div>

        {/* <!-- LANDING Section --> */}
        <div className="mt-24 lg:mt-48">
          <h1
            class="text-base mb-8 pb-4 border-b border-gray-200"
            id="projects"
          >
            Landing Pages
          </h1>

          {/* Tutr — opens Figma modal */}
          <button
            onClick={() => setActiveModal("tutr")}
            className="w-full flex flex-col group mb-12 text-left bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden">
              <img
                src="/Landing-2.webp"
                alt="Tutr landing page"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg md:text-xl">Tutr</h1>
                <p className="text-sm md:text-lg text-gray">
                  New age of learning work-ready skills
                </p>
              </div>

              <p id="others" className="text-base md:text-xl text-gray">
                2026
              </p>
            </div>
          </button>

          {/* Hiro — opens Figma modal */}
          <button
            onClick={() => setActiveModal("hiro")}
            className="w-full flex flex-col group mb-12 text-left bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden">
              <img
                src="/Landing-1.webp"
                alt="Hiro landing page"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div>
                <h1 className="text-lg md:text-xl">Hiro</h1>
                <p className="text-sm md:text-lg text-gray">
                  A next-gen talent marketplace
                </p>
              </div>

              <p className="text-base md:text-xl text-gray">2026</p>
            </div>
          </button>
        </div>
      </main>

      {/* for link */}
      {/* <div id="testimonials hidden"></div> */}
    </>
  );
}
