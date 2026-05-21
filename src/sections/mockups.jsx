import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
    />
  );
}

const FIGMA_URLS = {
  tutr: "https://embed.figma.com/proto/GnoV5RNwLywmXjry1EdA7A/Tutr?node-id=1-6&p=f&t=mQYQ1vf07ow4yhfB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A6&show-proto-sidebar=1&embed-host=share",
  hiro: "https://embed.figma.com/proto/aIPo93jiFbZJhBEaA1fAwt/Hiro?node-id=5-3&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A3&embed-host=share",
  tabi: "https://embed.figma.com/proto/bAlksnzSYZ0PTVVquVXW68/Untitled?node-id=28-576&p=f&viewport=-2524%2C-360%2C0.38&t=gV7QEHPbegoYUB57-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A576&page-id=0%3A1&embed-host=share",
};

function FigmaModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
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
            <span
              style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500 }}
            >
              {project === "tutr"
                ? "Tutr — Prototype"
                : project === "hiro"
                  ? "Hiro — Design"
                  : "Tabi — Prototype"}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f3f4f6")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              ✕
            </button>
          </div>

          {/* Figma iframe */}
          <iframe
            title={
              project === "tutr"
                ? "Tutr Prototype"
                : project === "hiro"
                  ? "Hiro Design"
                  : "Tabi Prototype"
            }
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
export default function Mockups() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* Figma Modal */}
      {activeModal && (
        <FigmaModal
          project={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
      {/* <!-- LANDING Section --> */}
      <div className="mt-24 lg:mt-48">
        <h1 class="text-base mb-8 pb-4 border-b border-gray-200" id="mockups">
          Landing Pages
        </h1>

        {/* Tabi — opens Figma modal */}
        <button
          onClick={() => setActiveModal("tabi")}
          className="w-full flex flex-col group mb-12 text-left bg-transparent border-none p-0 cursor-pointer"
        >
          <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden">
            <LazyImage
              src="/Landing-3.webp"
              alt="Tabi landing page"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
            <div>
              <h1 className="text-lg md:text-xl">Tabi</h1>
              <p className="text-sm md:text-lg text-gray">
                A curated tablet marketplace for modern living
              </p>
            </div>

            <p className="text-base md:text-xl text-gray">2026</p>
          </div>
        </button>

        {/* Tutr — opens Figma modal */}
        <button
          onClick={() => setActiveModal("tutr")}
          className="w-full flex flex-col group mb-12 text-left bg-transparent border-none p-0 cursor-pointer"
        >
          <div className="relative rounded-xl w-full aspect-[16/9] bg-white/5 overflow-hidden">
            <LazyImage
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
            <LazyImage
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
    </>
  );
}
