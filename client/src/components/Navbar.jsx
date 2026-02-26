import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="hud-panel rounded-2xl px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <a href="#home" className="text-base sm:text-lg font-semibold tracking-wide">
            Shlok Shah<span className="gradient-text">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-primary transition">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted hover:text-primary transition magnetic"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
            <a
              href="/src/assets/resume.pdf"
              download="Shlok_Shah_Resume.pdf"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={`md:hidden mt-3 hud-panel rounded-2xl px-4 py-3 ${open ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-3 text-sm text-muted">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
