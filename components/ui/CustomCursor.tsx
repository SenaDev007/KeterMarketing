"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering a link, button, or any element with cursor: pointer
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setIsHovering(true);
        // If element has data-cursor attribute, show that text
        const cursorText = target.getAttribute('data-cursor') || target.closest('[data-cursor]')?.getAttribute('data-cursor');
        if (cursorText) {
          setHoverText(cursorText);
        } else {
          setHoverText("");
        }
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          body, a, button, [role="button"] {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - (isHovering && hoverText ? 40 : (isHovering ? 20 : 8)),
          y: mousePosition.y - (isHovering && hoverText ? 40 : (isHovering ? 20 : 8)),
          width: isHovering && hoverText ? 80 : (isHovering ? 40 : 16),
          height: isHovering && hoverText ? 80 : (isHovering ? 40 : 16),
          backgroundColor: isHovering && hoverText ? "#D4AF37" : (isHovering ? "rgba(212,175,55,0.2)" : "#F6F3EA"),
          mixBlendMode: isHovering && !hoverText ? "normal" : "difference",
          border: isHovering && !hoverText ? "1px solid #D4AF37" : "none"
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
          mass: 0.5
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0B0B0B",
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em"
        }}
      >
        {isHovering && hoverText && hoverText}
      </motion.div>
    </>
  );
}
