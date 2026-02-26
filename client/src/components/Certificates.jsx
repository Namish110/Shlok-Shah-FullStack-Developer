import { motion } from "framer-motion";
import abstractSwirl from "../assets/abstract-swirl.jpg";

const certs = [
  { title: "Cyber Security", issuer: "StationX" },
  { title: "RESTful APIs", issuer: "Professional Certification" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto certs-hero relative">
        <div>
          <p className="section-kicker">Certificates</p>
          <h2 className="section-title mt-4">Verified expertise</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
        </div>
        <svg className="section-svg certs-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 10 H90 M110 10 H130 M10 30 H60 M90 30 H130" />
          <circle cx="10" cy="10" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
        <div className="media-frame media-glow certs-media">
          <img src={abstractSwirl} alt="Security dashboard animation" className="tilt-media" />
          <div className="media-caption">Security focus - Verified skills</div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto certs-grid">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card hover-card cert-card"
          >
            <p className="section-kicker">Certification</p>
            <h3 className="text-lg font-semibold mt-3">{c.title}</h3>
            <p className="text-muted mt-2">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
