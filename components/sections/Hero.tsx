"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Matter from "matter-js";

const BLOCKS_DATA = [
  // ── Vrais clients ──
  {
    text: "Academia Helm",
    url: "https://academiahelm.com",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: "Foncier Facile Afrique",
    url: "https://foncierfacileafrique.fr",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: "AfriBayit",
    url: "https://afribayit.vercel.app",
    image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=600&q=80",
  },
  {
    text: "Groupe SERMA",
    url: "https://serma-hub.vercel.app",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  // ── Services ──
  { text: "Conversion",   url: "/services", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
  { text: "Copywriting",  url: "/services", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80" },
  { text: "SEO",          url: "/services", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" },
  { text: "Branding",     url: "/services", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" },
  { text: "Stratégie",    url: "/services", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" },
  { text: "Performance",  url: "/services", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" },
];

export default function Hero() {
  const sceneRef    = useRef<HTMLDivElement>(null);
  // Preview is ALWAYS in the DOM — opacity/transform via direct DOM manipulation only
  const previewRef  = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const engineRef   = useRef<Matter.Engine | null>(null);
  const router      = useRouter();

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine, Render, Runner, Bodies, Composite,
      Mouse, MouseConstraint, Events, Query,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width  = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // ── Boundaries ──────────────────────────────────────────────────────────
    // ── Boundaries ──────────────────────────────────────────────────────────
    const walls: Matter.Body[] = [];
    const createWalls = (w: number, h: number) => {
      // Remove old walls if any
      if (walls.length > 0) Composite.remove(world, walls);
      walls.length = 0;
      
      const bottom = Bodies.rectangle(w / 2, h + 20, w, 40, { isStatic: true });
      const left   = Bodies.rectangle(-20, h / 2, 40, h, { isStatic: true });
      const right  = Bodies.rectangle(w + 20, h / 2, 40, h, { isStatic: true });
      
      walls.push(bottom, left, right);
      Composite.add(world, walls);
    };

    createWalls(width, height);

    // ── Resize handler ───────────────────────────────────────────────────────
    const handleResize = () => {
      if (!sceneRef.current) return;
      const w = sceneRef.current.clientWidth;
      const h = sceneRef.current.clientHeight;

      render.options.width = w;
      render.options.height = h;
      render.canvas.width = w;
      render.canvas.height = h;

      createWalls(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ── Blocks ──────────────────────────────────────────────────────────────
    const blocks = BLOCKS_DATA.map((data) => {
      const isMobile = width < 768;
      const blockWidth  = data.text.length * (isMobile ? 7 : 8.5) + (isMobile ? 40 : 56);
      const blockHeight = isMobile ? 36 : 44;
      const body = Bodies.rectangle(
        Math.random() * (width - 100) + 50,
        -Math.random() * 600 - 50,
        blockWidth,
        blockHeight,
        {
          chamfer: { radius: blockHeight / 2 },
          restitution: 0.5,
          frictionAir: 0.02,
          render: { fillStyle: "#1a1a1a", strokeStyle: "#D4AF37", lineWidth: 1.5 },
        }
      );
      (body as any).url       = data.url;
      (body as any).label     = data.text;
      (body as any).image     = data.image;
      (body as any).isHovered = false;
      return body;
    });

    Composite.add(world, blocks);

    // ── Mouse Constraint ─────────────────────────────────────────────────────
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.12, render: { visible: false } },
    });
    // Add touch support for Matter.js mouse
    mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // ── Preview helpers (zero React state) ──────────────────────────────────
    const showPreview = (imgSrc: string, x: number, y: number) => {
      const el  = previewRef.current;
      const img = previewImgRef.current;
      if (!el || !img || window.innerWidth < 1024) return; // No preview on mobile/tablet
      if (img.src !== imgSrc) img.src = imgSrc;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.opacity   = "1";
    };

    const movePreview = (x: number, y: number) => {
      if (!previewRef.current || window.innerWidth < 1024) return;
      previewRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const hidePreview = () => {
      if (!previewRef.current) return;
      previewRef.current.style.opacity = "0";
    };

    // ── Hover ────────────────────────────────────────────────────────────────
    let currentHovered: Matter.Body | null = null;

    const resetBlocks = () => {
      blocks.forEach((b) => {
        b.render.fillStyle   = "#1a1a1a";
        b.render.strokeStyle = "#D4AF37";
        b.render.lineWidth   = 1.5;
        (b as any).isHovered = false;
      });
    };

    Events.on(mouseConstraint, "mousemove", () => {
      const pos          = mouseConstraint.mouse.position;
      const hoveredList  = Query.point(blocks, pos);

      if (hoveredList.length > 0) {
        const hovered = hoveredList[0];
        render.canvas.style.cursor = "pointer";

        if (currentHovered !== hovered) {
          resetBlocks();
          hovered.render.fillStyle   = "#D4AF37";
          hovered.render.strokeStyle = "#D4AF37";
          (hovered as any).isHovered = true;
          showPreview((hovered as any).image, pos.x, pos.y);
          currentHovered = hovered;
        } else {
          movePreview(pos.x, pos.y);
        }
      } else {
        if (currentHovered !== null) {
          render.canvas.style.cursor = "default";
          resetBlocks();
          hidePreview();
          currentHovered = null;
        }
      }
    });

    // ── Click / Redirect ─────────────────────────────────────────────────────
    // Track mousedown ourselves for reliable dist check
    let mdX = 0, mdY = 0;

    Events.on(mouseConstraint, "mousedown", () => {
      mdX = mouseConstraint.mouse.position.x;
      mdY = mouseConstraint.mouse.position.y;
    });

    Events.on(mouseConstraint, "mouseup", () => {
      const pos  = mouseConstraint.mouse.position;
      const dist = Math.hypot(pos.x - mdX, pos.y - mdY);

      // Only treat as click if mouse didn't travel more than 12px (drag guard)
      if (dist > 12) return;

      const clicked = Query.point(blocks, pos);
      if (clicked.length === 0) return;

      const url = (clicked[0] as any).url as string | undefined;
      if (!url) return;

      if (url.startsWith("http")) {
        // Use a temporary anchor so popup blockers don't interfere
        const a = document.createElement("a");
        a.href   = url;
        a.target = "_blank";
        a.rel    = "noopener noreferrer";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        router.push(url);
      }
    });

    // ── Text on canvas ───────────────────────────────────────────────────────
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.textAlign    = "center";
      ctx.textBaseline = "middle";

      const isMobile = window.innerWidth < 768;

      blocks.forEach((block) => {
        const { x, y } = block.position;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(block.angle);

        const hovered = (block as any).isHovered as boolean;
        // Slightly larger font for longer labels
        const label   = (block as any).label as string;
        let fontSize = label.length > 14 ? 13 : 14;
        if (isMobile) fontSize -= 2;
        
        ctx.font      = `600 ${fontSize}px 'Inter', sans-serif`;
        ctx.fillStyle = hovered ? "#0B0B0B" : "#FFFFFF";
        ctx.fillText(label, 0, 0);
        ctx.restore();
      });
    });

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [router]);

  return (
    <section className="relative min-h-[100dvh] pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[#0B0B0B]">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at top, rgba(212,175,55,0.06), transparent 52%)" }}
      />

      {/* Hero text — pointer-events-none so canvas receives all mouse events */}
      <div className="hero-container relative z-10 mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-6 md:mb-8"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
            ))}
          </div>
          <p className="text-[10px] md:text-sm font-medium text-[#F6F3EA]/60 tracking-wide uppercase">
            5.0 D'APRÈS 175+ AVIS
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-8 md:mb-10 text-white"
        >
          <span className="block text-[clamp(28px,7vw,64px)] font-bold mb-1 md:mb-2 leading-[1.1] tracking-tight">
            Nous créons des sites web qui
          </span>
          <span className="block text-[clamp(42px,12vw,120px)] font-black text-[#D4AF37] leading-[0.9] tracking-tighter uppercase">
            Boostent Vos Ventes
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <Link href="/contact" className="btn-primary btn-shine group">
            Réserver un appel
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="btn-secondary btn-shine"
          >
            Voir nos travaux
          </Link>
        </motion.div>
      </div>

      {/* Matter.js canvas container */}
      <div
        ref={sceneRef}
        className="absolute inset-0 z-0 pointer-events-auto"
        style={{ touchAction: "none" }}
      />

      {/*
        ── Floating Image Preview ─────────────────────────────────────────────
        Always mounted. Visibility = opacity via CSS transition.
        Position = transform via direct DOM ref (no React state = zero lag).
      */}
      <div
        ref={previewRef}
        aria-hidden="true"
        style={{
          position:       "absolute",
          left:           0,
          top:            0,
          width:          "240px",
          height:         "160px",
          marginLeft:     "-120px",
          marginTop:      "-185px",
          pointerEvents:  "none",
          zIndex:         50,
          opacity:        0,
          transition:     "opacity 0.18s ease",
          willChange:     "transform, opacity",
          borderRadius:   "16px",
          overflow:       "hidden",
          boxShadow:      "0 20px 60px rgba(0,0,0,0.5)",
          border:         "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <img
          ref={previewImgRef}
          alt="Aperçu"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <style>{`
        .hero-container { max-width: 1200px; }
      `}</style>
    </section>
  );
}
