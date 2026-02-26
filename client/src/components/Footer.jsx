export default function Footer() {
  return (
    <footer className="editorial-section section-alt">
      <div className="max-w-6xl mx-auto footer-shell px-6">
        <div className="glass-card footer-card">
          <div className="footer-grid">
            <div>
              <p className="section-kicker">Let's connect</p>
              <h3 className="footer-title">Shlok Shah</h3>
              <p className="text-muted mt-2">
                Dot Net Developer focused on scalable enterprise products and reliable delivery.
              </p>
              <div className="footer-tags">
                <span className="footer-tag">Open to work</span>
                <span className="footer-tag">Delhi, India</span>
                <span className="footer-tag">Remote friendly</span>
              </div>
            </div>

            <div className="footer-actions">
              <div className="footer-links">
                <a
                  href="https://github.com/Namish110"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-pill"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.16.6.67.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shlokshahdeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-pill"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.35 4.22 5.4v6.34zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:guptanamish11@gamail.com" className="footer-pill">
                  Email
                </a>
              </div>
              <div className="footer-nav">
                <a href="#about" className="footer-nav-link">About</a>
                <a href="#projects" className="footer-nav-link">Projects</a>
                <a href="#contact" className="footer-nav-link">Contact</a>
              </div>
            </div>
          </div>

          <div className="footer-divider" />
          <div className="footer-bottom">
            <p className="footer-note">Building with clarity, consistency, and performance.</p>
            <p className="text-muted text-xs">(c) 2026 Shlok Shah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
