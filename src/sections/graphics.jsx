import React, { useState, useEffect, useRef } from "react";

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
    <div
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
      <div
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
      </div>
    </div>
  );
}

/* ── Grid data ───────────────────────────────────────────── */
const items = [
  { src: "/graphic1.png",  alt: "Graphic 1"  },
  { src: "/graphic3.jpg",  alt: "Graphic 3"  },
  { src: "/graphic2.png",  alt: "Graphic 2"  },
  { src: "/graphic7.png",  alt: "Graphic 7"  },
  { src: "/graphic4.jpg",  alt: "Graphic 4"  },
  { src: "/graphic5.jpg",  alt: "Graphic 5"  },
  { src: "/graphic8.png",  alt: "Graphic 8"  },
  { src: "/graphic9.jpg",  alt: "Graphic 9"  },
  { src: "/graphic12.jpg", alt: "Graphic 12" },
  { src: "/graphic10.jpg", alt: "Graphic 10" },
  { src: "/graphic11.jpg", alt: "Graphic 11" },
];

/* ── Nav Button ──────────────────────────────────────────── */
function NavBtn({ onClick, disabled, dir }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        border: "1px solid #e5e7eb",
        background: disabled ? "#f3f4f6" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        color: disabled ? "#d1d5db" : "#111",
        transition: "background 0.15s, border-color 0.15s, color 0.15s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = "#f3f4f6";
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = "#fff";
      }}
    >
      {dir === "left" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

/* ── Component ───────────────────────────────────────────── */
const CARD_WIDTH = 340; // px — width of each card
const GAP = 8;          // px — gap between cards
const SCROLL_BY = CARD_WIDTH + GAP;

const Graphics = () => {
  const [active, setActive] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const scrollRef = useRef(null);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    return () => el.removeEventListener("scroll", updateButtons);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -SCROLL_BY : SCROLL_BY, behavior: "smooth" });
  };

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

      {/* Header */}
      <div className="mb-8 pb-4 border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-base" id="graphics">
          Graphic Works{" "}
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="text-sm text-gray">(I enjoy these too)</span>
          <NavBtn onClick={() => scroll("left")}  disabled={!canLeft}  dir="left"  />
          <NavBtn onClick={() => scroll("right")} disabled={!canRight} dir="right" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",      /* Firefox */
          msOverflowStyle: "none",     /* IE */
          paddingBottom: "4px",
        }}
      >
        {/* Hide webkit scrollbar */}
        <style>{`
          .graphics-scroll::-webkit-scrollbar { display: none; }
        `}</style>

        {items.map((item) => (
          <button
            key={item.src}
            onClick={() => setActive(item)}
            style={{
              flexShrink: 0,
              width: `${CARD_WIDTH}px`,
              height: "420px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#f3f4f6",
              border: "none",
              padding: 0,
              cursor: "pointer",
              scrollSnapAlign: "start",
            }}
            className="group"
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
