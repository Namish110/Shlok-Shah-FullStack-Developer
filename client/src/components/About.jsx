import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import serverComponents from "../assets/server-components.jpg";

export default function About() {
  const statRefs = useRef([]);

  useEffect(() => {
    const nodes = statRefs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.getAttribute("data-target")) || 0;
          const duration = 900;
          const startTime = performance.now();
          const tick = (now) => {
            const p = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(target * p);
            el.textContent = String(value).padStart(2, "0") + (target >= 10 ? "+" : "");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto about-layout relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card hover-card about-main"
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-4">A performance-driven .NET developer</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
          <p className="text-muted mt-4 leading-relaxed">
            Performance-driven .NET developer with 4+ years of experience in
            full-stack web application design and development. Expertise in .NET,
            ASP.NET MVC/Core, Web API, SQL, and modern JavaScript frameworks.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Proven track record in API integrations and database optimization,
            delivering enterprise solutions aligned with business objectives.
            Strong focus on clean code, DevOps, and agile execution.
          </p>
        </motion.div>

        <svg className="section-svg about-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 10 H70 M90 10 H130 M10 30 H50 M80 30 H130" />
          <circle cx="10" cy="10" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
        <div className="about-side">
          <div className="media-frame media-glow">
            <img src={serverComponents} alt="Server infrastructure" className="tilt-media" loading="lazy" decoding="async" />
            <div className="media-caption">Infrastructure backbone - Secure systems</div>
          </div>
          <div className="glass-card hover-card">
            <p className="section-kicker">Highlights</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="soft-border rounded-2xl px-4 py-4">
                <div
                  className="text-2xl font-semibold gradient-text"
                  data-target="4"
                  ref={(el) => (statRefs.current[0] = el)}
                >
                  04+
                </div>
                <div className="text-xs text-muted mt-2">Years</div>
              </div>
              <div className="soft-border rounded-2xl px-4 py-4">
                <div
                  className="text-2xl font-semibold gradient-text"
                  data-target="5"
                  ref={(el) => (statRefs.current[1] = el)}
                >
                  05+
                </div>
                <div className="text-xs text-muted mt-2">Roles</div>
              </div>
              <div className="soft-border rounded-2xl px-4 py-4">
                <div
                  className="text-2xl font-semibold gradient-text"
                  data-target="2"
                  ref={(el) => (statRefs.current[2] = el)}
                >
                  02
                </div>
                <div className="text-xs text-muted mt-2">Degrees</div>
              </div>
            </div>
          </div>
          <div className="glass-card hover-card">
            <p className="section-kicker">Focus</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
              <span className="soft-border rounded-full px-4 py-2">API Integration</span>
              <span className="soft-border rounded-full px-4 py-2">SQL/NoSQL</span>
              <span className="soft-border rounded-full px-4 py-2">DevOps</span>
              <span className="soft-border rounded-full px-4 py-2">Agile/Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

