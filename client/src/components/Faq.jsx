import { motion } from "framer-motion";
import { faqs } from "../content/faq";

export default function Faq() {
  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-strong opacity-30" />
      <div className="absolute inset-0 bg-scanlines-strong pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <span className="accent-pill">FAQ</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold neon-text">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted max-w-3xl mx-auto">
            Quick answers about my portfolio, project experience, and the kind of work I enjoy building.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="hud-panel rounded-2xl p-5 sm:p-6 group"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between gap-4 text-left">
                <span className="text-base sm:text-lg font-semibold text-primary">{item.question}</span>
                <span className="text-accent text-xl leading-none transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted leading-7">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
