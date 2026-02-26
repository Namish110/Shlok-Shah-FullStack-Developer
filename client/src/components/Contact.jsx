import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto contact-layout relative">
        <div className="glass-card hover-card contact-info-card">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">Let&apos;s build something reliable</h2>
          <svg className="divider-line" viewBox="0 0 140 18" aria-hidden="true">
            <path d="M2 9 H138" />
          </svg>
          <p className="text-muted mt-4">
            Open to Dot Net Developer and full-stack opportunities.
            Available for full-time and project-based collaboration.
          </p>
          <svg className="section-svg contact-svg" viewBox="0 0 140 44" aria-hidden="true">
            <path d="M10 10 H70 M90 10 H130 M10 30 H50 M80 30 H130" />
            <circle cx="10" cy="30" r="3" />
            <circle cx="130" cy="10" r="3" />
          </svg>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <div className="soft-border rounded-2xl px-4 py-3">Email: guptanamish11@gamail.com</div>
            <div className="soft-border rounded-2xl px-4 py-3">Phone: +91 7651856149</div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:guptanamish11@gamail.com"
              className="rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted magnetic"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/917651856149"
              target="_blank"
              rel="noreferrer"
              className="btn-accent text-xs uppercase tracking-[0.2em] magnetic"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-card flex flex-col gap-4 contact-form-card"
        >
          <p className="section-kicker">Send Message</p>
          <h3 className="text-xl font-semibold">Tell me about your project</h3>
          <input type="hidden" name="access_key" value="af472538-71d0-4a5f-a037-9a7278daa8ee" />
          <input type="hidden" name="subject" value="New message from portfolio" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-2.5 text-primary"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-2.5 text-primary"
          />
          <textarea
            rows="4"
            placeholder="Message"
            name="message"
            required
            className="bg-surface border border-soft rounded-lg px-4 py-2.5 text-primary"
          />
          <button
            className="btn-accent hover:scale-105 transition magnetic"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary">
              Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary">
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
