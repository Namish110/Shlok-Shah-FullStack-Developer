import { motion } from "framer-motion";
import clientReviewImg from "../assets/images/clientreview.jpeg";

export default function ClientReview() {
  return (
    <section id="client-review" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto client-review-layout relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-card client-review-card"
        >
          <p className="section-kicker">Client Review</p>
          <h2 className="section-title mt-3">What Clients Say</h2>
          <p className="text-muted mt-3">
            "Reliable delivery, clear communication, and production-ready code quality across the project lifecycle."
          </p>
          <p className="text-accent text-sm mt-3">Enterprise Client Feedback</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="media-frame media-glow client-review-media"
        >
          <img src={clientReviewImg} alt="Client review screenshot" className="tilt-media" loading="lazy" decoding="async" />
        </motion.div>
      </div>
    </section>
  );
}
