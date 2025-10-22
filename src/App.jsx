import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import GetInTouch from "./pages/GetInTouch";

import logo from "./assets/fevicon.png";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const PAGES = ["home", "experience", "projects", "education", "get in touch"];

const normalizePageKey = (page) => page.toLowerCase().trim();

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.03; // subtle stripe opacity
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default function App() {
  const getInitialPage = () => {
    const hash = decodeURIComponent(window.location.hash.slice(1) || "home");
    return normalizePageKey(hash);
  };

  const [active, setActive] = useState(getInitialPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [stripeColor, setStripeColor] = useState(randomColor());

  const navigate = (to) => {
    const pageKey = normalizePageKey(to);
    if (pageKey === active) return;
    window.location.hash = to;
    setNextPage(pageKey);
    setTransitioning(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1) || "home");
      setActive(normalizePageKey(hash));
      setStripeColor(randomColor());
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (transitioning && nextPage) {
      const t = setTimeout(() => {
        setActive(nextPage);
        setNextPage(null);
        setTransitioning(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [transitioning, nextPage]);

  return (
    <div
      className="app-root"
      style={{
        background: `
          repeating-linear-gradient(
            135deg,
            ${stripeColor} 0px,
            ${stripeColor} 2px,
            transparent 0px,
            transparent 18px
          ),
          linear-gradient(180deg, var(--bg), ${stripeColor})
        `,
        transition: "background 0.5s ease"
      }}
    >
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
      {sideNav()}
      {topNav()}
      {menuIcon()}

      <main className={`page-container ${transitioning ? "fade-out" : "fade-in"}`}>
        {active === "home" && <Home />}
        {active === "experience" && <Experience />}
        {active === "projects" && <Projects />}
        {active === "education" && <Education />}
        {active === "get in touch" && <GetInTouch />}
      </main>

      {footer()}
    </div>
  );

  function topNav() {
    return (
      <header className="top-nav">
        <Logo />
        <nav className="nav-menu">
          {PAGES.map((p) => (
            <button
              key={p}
              className={`nav-btn ${active === normalizePageKey(p) ? "active" : ""}`}
              onClick={() => navigate(p)}
              aria-current={active === normalizePageKey(p) ? "page" : undefined}
            >
              <span>{p[0].toUpperCase() + p.slice(1)}</span>
            </button>
          ))}
        </nav>
      </header>
    );
  }

  function sideNav() {
    return (
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <Logo />
        <nav className="nav-menu">
          {PAGES.map((p) => (
            <button
              key={p}
              className={`nav-btn ${active === normalizePageKey(p) ? "active" : ""}`}
              onClick={() => navigate(p)}
              aria-current={active === normalizePageKey(p) ? "page" : undefined}
            >
              <span>{p[0].toUpperCase() + p.slice(1)}</span>
            </button>
          ))}
        </nav>
      </aside>
    );
  }

  function menuIcon() {
    return (
      <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen((p) => !p)}>
        ☰
      </button>
    );
  }

  function footer() {
    return (
      <footer className="footer">
        <div> &#9400; {new Date().getFullYear()} - Mubeen Abdul</div>
        <div className="socials">
          <a href="mailto:mubeenabdul1999@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://github.com/Abdul-Mubeen-git" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/dev-mubeen-abdul/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </footer>
    );
  }
}

function Logo() {
  return (
    <div className="brand">
      <img className="logo" src={logo} alt="Logo image." />
      <div>Mubeen Abdul</div>
    </div>
  );
}
