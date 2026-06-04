import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const max = 600;
        const value = Math.min(window.scrollY / max, 1);
        document.documentElement.style.setProperty("--scroll-glow", value.toFixed(2));
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-grid-strong" />
      <div className="absolute inset-0 bg-circuit-strong" />
      <div className="absolute inset-0 bg-scanlines-strong pointer-events-none" />
      <div className="absolute inset-0 pattern-orbital opacity-70 orbits-animate" />
      <div className="absolute inset-0 pattern-circuit opacity-45 pointer-events-none pattern-animate" />
      <div className="absolute inset-0 bg-scanlines-strong pointer-events-none" />
      <svg className="absolute inset-0 circuit-svg opacity-40 hidden md:block" viewBox="0 0 1200 600" aria-hidden="true">
        <path d="M40 120 H260 V220 H520 V140 H760 V260 H1120" />
        <path d="M80 420 H300 V360 H540 V460 H840 V380 H1160" />
        <path d="M120 60 H420 V120 H680 V80 H980" />
      </svg>
      <div className="absolute -left-12 bottom-24 h-48 w-48 rounded-full heartbeat-pulse blur-2xl opacity-60 hidden sm:block" />
      <div className="absolute right-20 top-24 h-36 w-36 rounded-full heartbeat-pulse blur-2xl opacity-50 hidden sm:block" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center relative z-10">
        <div className="text-left relative">
          <svg className="hud-frame hidden md:block" viewBox="0 0 340 200" aria-hidden="true">
            <path d="M10 20 H120 M160 20 H330 M10 60 H220 M260 60 H330 M10 120 H90 M130 120 H330 M10 170 H200 M240 170 H330" />
            <path d="M20 10 V40 M320 10 V40 M20 160 V190 M320 160 V190" />
          </svg>
          <span className="accent-pill">Open to full-time roles</span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight neon-text"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text glitch" data-text="Shlok Shah">
              Shlok Shah
            </span>
          </motion.h1>
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl mt-4 text-muted"
        >
          Dot Net Developer building scalable enterprise products
        </motion.h2>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted">
          <span className="status-dot" />
          <span>Live status: Available for new projects</span>
        </div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-muted max-w-xl"
          >
            Performance-driven .NET developer with 4+ years of full-stack experience
            in ASP.NET MVC/Core, Web API, SQL, and modern JavaScript frameworks.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="btn-accent hover:scale-[1.02] magnetic">
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-soft text-muted hover:text-primary transition magnetic"
          >
            Contact Me
          </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            <span className="tech-pill">C# / .NET Core</span>
            <span className="tech-pill">ASP.NET MVC + Web API</span>
            <span className="tech-pill">SQL + React</span>
            <span className="tech-pill">AWS / Azure / CI/CD</span>
          </div>
          <div className="mt-6 terminal">
            <div className="terminal-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="text-xs text-muted ml-2">shlok@terminal:~</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span> fullstack --build secure-api --ui react
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> deploy --cloud azure --pipeline cicd
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> status: green <span className="cursor" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-6 lg:mt-0"
        >
          <div className="id-hanger id-swing">
            <div className="vector-gray" style={{ top: "-60px", right: "-40px", width: "140px", height: "140px" }} />
            <div className="vector-gray" style={{ bottom: "-40px", left: "-30px", width: "120px", height: "120px" }} />
            <div className="lanyard" />
            <div className="id-card tilt-card">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Shlok Shah"
                  className="h-56 sm:h-[260px] w-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="id-name text-lg">SHLOK SHAH</div>
                <div className="badge mt-2">Available for work</div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden lg:grid gap-4">
          <div className="hud-card">
            <div className="hud-stat">API Latency</div>
            <div className="hud-value">98%</div>
            <div className="meter mt-3">
              <div className="meter-fill" />
            </div>
          </div>
          <div className="hud-card">
            <div className="hud-stat">System Uptime</div>
            <div className="hud-value">99.9%</div>
            <div className="meter mt-3">
              <div className="meter-fill" style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
        </div>

        <div className="absolute right-10 top-32 space-y-3 hidden xl:block">
          <div className="hud-widget">CPU Load - 23%</div>
          <div className="hud-widget">Memory - 68%</div>
          <div className="hud-widget">Builds - Passing</div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 hidden sm:flex justify-center ecg-wrapper">
        <svg width="520" height="60" viewBox="0 0 520 60" aria-hidden="true">
          <path
            className="ecg-line"
            d="M0 30 H90 L110 10 L130 50 L150 20 L170 30 H220 L240 15 L260 45 L280 30 H520"
          />
        </svg>
      </div>
      <div className="ticker hidden md:block">
        <div className="ticker-track">
          <span>FULL-STACK</span>
          <span>SECURITY</span>
          <span>API DESIGN</span>
          <span>DEVOPS</span>
          <span>CLOUD</span>
          <span>FULL-STACK</span>
          <span>SECURITY</span>
          <span>API DESIGN</span>
          <span>DEVOPS</span>
          <span>CLOUD</span>
        </div>
      </div>
    </section>
  );
}

