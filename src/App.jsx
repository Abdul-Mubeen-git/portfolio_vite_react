import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import GetInTouch from "./pages/GetInTouch";

import logo from "./assets/fevicon.png";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const PAGES = ["home", "experience", "projects", "education", "get in touch"];

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  // page navigation with fade-out/in
  function navigate(to) {
    if (to === active) {
      setMenuOpen(false);
      return;
    }
    setNextPage(to);
    setTransitioning(true);
    setMenuOpen(false);
  }

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
    <div className="app-root">
      {/* only one gets loads based on the screen size */}
      {sideNav()}
      {topNav()}
      {menuIcon()}

      {/* main content */}
      {mainContent()}

      {/* footer content */}
      {footer()}
    </div>
  );

  function topNav() {
    return <header className="top-nav">
      <Logo />
      <nav className="nav-menu">
        {PAGES.map((p) => (
          <button
            key={p}
            className={`nav-btn ${active === p ? "active" : ""}`}
            onClick={() => navigate(p)}
            aria-current={active === p ? "page" : undefined}
          >
            <span>{p[0].toUpperCase() + p.slice(1)}</span>
          </button>
        ))}
      </nav>
    </header>;
  }

  function sideNav() {
    return <aside className={`sidebar ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen && window.innerWidth <= 320}>
      <Logo />
      <nav className="nav-menu">
        {PAGES.map((p) => (
          <button
            key={p}
            className={`nav-btn ${active === p ? "active" : ""}`}
            onClick={() => navigate(p)}
            aria-current={active === p ? "page" : undefined}
          >
            <span>{p[0].toUpperCase() + p.slice(1)}</span>
          </button>
        ))}
      </nav>
    </aside>;
  }

  function menuIcon() {
    return <button
      className="hamburger"
      aria-label="Toggle menu"
      onClick={() => setMenuOpen((p) => !p)}
    >
      ☰
    </button>;
  }

  function mainContent() {
    return <main className={`page-container ${transitioning ? "fade-out" : "fade-in"}`}>
      {active === "home" && <Home />}
      {active === "experience" && <Experience />}
      {active === "projects" && <Projects />}
      {active === "education" && <Education />}
      {active === "get in touch" && <GetInTouch />}
    </main>;
  }

  function footer() {
    return (
      <footer className="footer">
        <div> &#9400; {new Date().getFullYear()} - Mubeen Abdul</div>
        <div className="socials">
          <a href="mailto:mubeenabdul1999@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a
            href="https://github.com/Abdul-Mubeen-git"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dev-mubeen-abdul/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
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