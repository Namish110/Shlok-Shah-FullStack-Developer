import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "C#", level: "Advanced", meter: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET Core", level: "Advanced", meter: 91, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "ASP.NET MVC", level: "Advanced", meter: 89, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Web API", level: "Advanced", meter: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
  { name: "SQL Server", level: "Advanced", meter: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "JavaScript", level: "Advanced", meter: 86, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", level: "Advanced", meter: 84, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", level: "Intermediate", meter: 74, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Node.js", level: "Intermediate", meter: 73, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", level: "Advanced", meter: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", level: "Advanced", meter: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "AWS", level: "Intermediate", meter: 72, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", level: "Intermediate", meter: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

export default function Skills() {
  const [active, setActive] = useState(skills[0]);

  return (
    <section id="skills" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto stack-shell">
        <div className="stack-header">
          <p className="stack-title">Skills</p>
          <p className="stack-hint">Hover them</p>
        </div>

        <div className="stack-panel">
          <div className="stack-grid">
            {skills.map((skill, i) => (
              <motion.button
                key={skill.name}
                type="button"
                className="stack-tile"
                onMouseEnter={() => setActive(skill)}
                onFocus={() => setActive(skill)}
                onClick={() => setActive(skill)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="stack-icon">
                  <img src={skill.icon} alt={skill.name} loading="lazy" decoding="async" />
                </div>
                <span className="stack-label">{skill.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="stack-meter-wrap">
            <span className="stack-meter-key">Experience:</span>
            <div className="stack-meter-bar">
              <div className="stack-meter-fill" style={{ width: `${active.meter}%` }} />
            </div>
            <span className="stack-meter-level">{active.level}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
