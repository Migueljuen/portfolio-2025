import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Image Modal ─────────────────────────────────────────── */
function ImageModal({ src, alt, onClose }) {
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
        transition={{ duration: 0.15 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
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
            maxWidth: "95vw",
            maxHeight: "95vh",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close image"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "#fff",
              lineHeight: 1,
              padding: "6px 10px",
              borderRadius: "8px",
              transition: "background 0.15s",
              zIndex: 10,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(0,0,0,0.75)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(0,0,0,0.5)")
            }
          >
            ✕
          </button>

          <img
            src={src}
            alt={alt}
            style={{
              display: "block",
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Grid data ───────────────────────────────────────────── */
const items = [
  { src: "/graphic1.png", alt: "Graphic 1", span: "" },
  { src: "/graphic3.jpg", alt: "Graphic 3", span: "row-span-2" },
  { src: "/graphic2.png", alt: "Graphic 2", span: "" },
  { src: "/graphic7.png", alt: "Graphic 7", span: "row-span-2" },
  { src: "/graphic4.jpg", alt: "Graphic 4", span: "" },
  { src: "/graphic5.jpg", alt: "Graphic 5", span: "" },
  { src: "/graphic8.png", alt: "Graphic 8", span: "row-span-2" },
  { src: "/graphic9.jpg", alt: "Graphic 9", span: "" },
  { src: "/graphic12.jpg", alt: "Graphic 12", span: "row-span-2" },
  { src: "/graphic10.jpg", alt: "Graphic 10", span: "" },
  { src: "/graphic11.jpg", alt: "Graphic 11", span: "" },
];

/* ── Component ───────────────────────────────────────────── */
const Graphics = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="mt-24 lg:mt-48">
      {/* Modal */}
      {active && (
        <ImageModal
          src={active.src}
          alt={active.alt}
          onClose={() => setActive(null)}
        />
      )}

      <div className="mb-8 pb-4 border-b border-gray-200 flex justify-between">
        <h1 className="text-base " id="graphics">
          Graphic Works{" "}
        </h1>
        <span className="text-sm text-gray"> (I enjoy these too) </span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2"
        style={{ gridAutoRows: "420px" }}
      >
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            onClick={() => setActive(item)}
            className={`${item.span} rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer border-none p-0`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
