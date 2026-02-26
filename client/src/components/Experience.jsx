import { motion } from "framer-motion";

const experiences = [
  {
    role: "Dot Net Developer",
    company: "Dimension Groups",
    time: "2025 - Present",
    tags: ["Kaushambhi, Delhi", "BSE API", "Shriram API", "Frontend"],
    points: [
      "Working as a Dot Net Developer on enterprise web applications.",
      "Integrated BSE and Shriram finance APIs for bonds workflows.",
      "Improved usability, performance, and day-to-day platform reliability.",
    ],
  },
  {
    role: "Dot Net Developer",
    company: "NEGD (NIC)",
    time: "2025 - 2025",
    tags: ["Remote", "React", ".NET MVC", "MySQL", "Swagger"],
    points: [
      "Delivered portal features in coordination with NIC teams.",
      "Built and integrated modules using React, .NET MVC, and MySQL.",
      "Documented and validated API flows using Swagger and Postman.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Kding Blocks",
    time: "2025 - 2025",
    tags: ["Delhi", "Full Stack", "Web API", "SQL"],
    points: [
      "Built full-stack web modules with backend APIs and responsive frontend.",
      "Implemented secure data flow and optimized query handling.",
      "Collaborated with product and engineering teams for fast delivery.",
    ],
  },
  {
    role: "Dot Net Developer",
    company: "IREDA",
    time: "2022 - 2025",
    tags: ["Delhi", ".NET Core", "REST APIs", "SQL/NoSQL", "CI/CD"],
    points: [
      "Developed and maintained .NET services for business-critical workflows.",
      "Designed REST APIs and optimized SQL/NoSQL database operations.",
      "Supported testing, debugging, and cloud-based CI/CD releases.",
    ],
  },
  {
    role: "Dot Net Developer",
    company: "Vocman",
    time: "2021 - 2022",
    tags: ["Delhi", "ASP.NET", "SQL", "Support"],
    points: [
      "Contributed to .NET application features and bug-fix cycles.",
      "Supported issue resolution and production stability improvements.",
      "Worked with cross-functional teams on timely feature delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto exp-head">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mt-4">Career Timeline</h2>
        <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
          <path d="M2 9 H138" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto exp-timeline">
        <div className="exp-line" aria-hidden="true" />
        {experiences.map((e, i) => {
          const right = i % 2 === 1;
          return (
            <motion.article
              key={`${e.company}-${e.time}`}
              className={`exp-row ${right ? "right" : "left"}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="exp-time">{e.time}</div>
              <div className="exp-node" aria-hidden="true">
                <span />
              </div>
              <div className="exp-card glass-card">
                <h3>{e.role}</h3>
                <p className="exp-company">{e.company}</p>
                <div className="exp-tags">
                  {e.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="exp-link">Website Link</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
