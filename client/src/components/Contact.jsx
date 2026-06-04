export default function Contact() {
  return (
    <section id="contact" className="editorial-section px-6 section-alt">
      <div className="max-w-6xl mx-auto contact-layout relative">
        <div className="glass-card hover-card contact-info-card">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">Let&apos;s build something reliable</h2>
          <p className="text-muted mt-4 leading-relaxed">
            I&apos;m open to full-time roles, freelance opportunities, and collaborative product work focused on
            scalable web applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
            <span className="soft-border rounded-full px-4 py-2">Full-time roles</span>
            <span className="soft-border rounded-full px-4 py-2">Freelance projects</span>
            <span className="soft-border rounded-full px-4 py-2">Remote collaboration</span>
          </div>
        </div>

        <div className="glass-card hover-card contact-form-card">
          <p className="section-kicker">Reach Out</p>
          <div className="mt-5 grid gap-3">
            <a
              href="https://www.linkedin.com/in/shlokshahdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-border rounded-2xl px-4 py-4 hover:-translate-y-0.5 transition block"
            >
              <span className="block text-sm text-muted">LinkedIn</span>
              <span className="block mt-1 text-base font-semibold text-primary">Connect professionally</span>
            </a>
            <a
              href="https://github.com/Namish110"
              target="_blank"
              rel="noopener noreferrer"
              className="soft-border rounded-2xl px-4 py-4 hover:-translate-y-0.5 transition block"
            >
              <span className="block text-sm text-muted">GitHub</span>
              <span className="block mt-1 text-base font-semibold text-primary">Review code and project work</span>
            </a>
            <a
              href="/resume.pdf"
              download="Shlok_Shah_Resume.pdf"
              className="soft-border rounded-2xl px-4 py-4 hover:-translate-y-0.5 transition block"
            >
              <span className="block text-sm text-muted">Resume</span>
              <span className="block mt-1 text-base font-semibold text-primary">Download the latest profile</span>
            </a>
          </div>
        </div>

        <svg className="section-svg contact-svg" viewBox="0 0 140 44" aria-hidden="true">
          <path d="M10 12 H70 M86 12 H130 M10 30 H48 M72 30 H130" />
          <circle cx="10" cy="12" r="3" />
          <circle cx="130" cy="30" r="3" />
        </svg>
      </div>
    </section>
  );
}
