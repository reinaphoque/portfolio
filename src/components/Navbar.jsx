import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS, SHORT_NAME, INITIALS } from "../data/content";
import "./Navbar.css";

const HIDE_THRESHOLD = 96;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (y <= HIDE_THRESHOLD) {
        setHidden(false);
      } else if (y > lastY.current) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""}`}>
      <nav className="navbar container">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-badge">{INITIALS}</span>
          <span className="navbar__logo-text">{SHORT_NAME}</span>
        </Link>

        <ul className="navbar__links navbar__links--desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
              >
                {link.label}
                <span className="navbar__indicator" />
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
