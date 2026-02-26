import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import bondsaddaImg from "../assets/images/bondsadda.png";
import dppcccvrImg from "../assets/images/dppcccvr.png";
import employeemImg from "../assets/images/employeem.png";
import hospitalImg from "../assets/images/hospital.png";
import hotelImg from "../assets/images/hotel.png";
import tradelicenceImg from "../assets/images/tradelicence.png";

const projects = [
  {
    title: "BondsAdda Financial Platform",
    desc: "A secure financial platform for managing bond portfolios.",
    tech: "React, .NET Core, SQL Server",
    image: bondsaddaImg,
  },
  {
    title: "Delhi Police PCC Portal",
    desc: "Government portal for police clearance certificate workflows.",
    tech: "React, ASP.NET MVC, MySQL",
    image: dppcccvrImg,
  },
  {
    title: "Hospital Management System",
    desc: "System for patient records, scheduling, and billing.",
    tech: "Angular, Web API, SQL Server",
    image: hospitalImg,
  },
  {
    title: "Employee Management System",
    desc: "HR system for onboarding, payroll, and performance tracking.",
    tech: ".NET Core, React, SQL Server",
    image: employeemImg,
  },
  {
    title: "Hotel Management System",
    desc: "Suite for reservations, housekeeping, and billing operations.",
    tech: "React, .NET Core, SQL Server",
    image: hotelImg,
  },
  {
    title: "Trade Licence Portal",
    desc: "Municipal portal for licence applications and approvals.",
    tech: "React, Node.js, PostgreSQL",
    image: tradelicenceImg,
  },
];

const wrapIndex = (value, len) => ((value % len) + len) % len;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = useMemo(
    () =>
      [-1, 0, 1].map((offset) => {
        const index = wrapIndex(activeIndex + offset, projects.length);
        return { offset, index, project: projects[index] };
      }),
    [activeIndex]
  );

  const nextSlide = () => setActiveIndex((prev) => wrapIndex(prev + 1, projects.length));
  const prevSlide = () => setActiveIndex((prev) => wrapIndex(prev - 1, projects.length));
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="project-hero-grid">
          <div className="project-hero-copy">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title mt-3">Selected case studies and builds</h2>
            <p className="text-muted mt-2 project-intro">
              Production-grade systems focused on scalable APIs, secure architecture, and clean UX.
            </p>
          </div>
          <div className="project-slider-controls">
            <button type="button" onClick={prevSlide} className="project-nav-btn" aria-label="Previous project">
              Prev
            </button>
            <button type="button" onClick={nextSlide} className="project-nav-btn" aria-label="Next project">
              Next
            </button>
          </div>
        </div>

        <div className="stack-carousel">
          {cards.map(({ offset, index, project }) => (
            <motion.button
              key={project.title}
              type="button"
              initial={false}
              animate={{
                x: offset * 220,
                scale: offset === 0 ? 1 : 0.9,
                opacity: offset === 0 ? 1 : 0.56,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`stack-card stack-card-${offset === 0 ? "center" : offset < 0 ? "left" : "right"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${project.title}`}
            >
              <img src={project.image} alt={project.title} className="stack-card-image" loading="lazy" />
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeProject.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-card project-meta-card"
        >
          <h3 className="text-xl font-semibold">{activeProject.title}</h3>
          <p className="text-muted mt-1">{activeProject.desc}</p>
          <p className="text-accent text-sm mt-2">{activeProject.tech}</p>
          <div className="mt-3 flex gap-3">
            <button className="px-4 py-2 rounded-full btn-accent text-sm magnetic">GitHub</button>
            <button className="px-4 py-2 rounded-full border border-soft text-muted text-sm magnetic">Live Demo</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
