import { Link } from "react-router-dom";
import { NAME, INITIALS, SOCIALS } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="footer__brand">
          <span className="footer__badge">{INITIALS}</span>
          <div>
            <p className="footer__name">{NAME}</p>
            <p className="footer__tag">GAME DESIGN · UX/UI · ILLUSTRATION</p>
          </div>
        </Link>

        <ul className="footer__socials">
          {SOCIALS.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <li key={s.label}>
                <a href={s.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        <p className="footer__copy">© 2026 {NAME}. Designed &amp; built with care.</p>
      </div>
    </footer>
  );
}
