import reinaHero from "../assets/reina-hero.webp";
import "./HeroArt.css";

export default function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg className="hero-art__orbit" viewBox="0 0 420 420" fill="none">
        <circle cx="210" cy="210" r="188" stroke="var(--powder-blue)" strokeWidth="2" strokeDasharray="2 14" strokeLinecap="round" />
      </svg>

      <span className="hero-art__backdrop" />
      <img className="hero-art__figure" src={reinaHero} alt="" />

      <div className="hero-art__tag hero-art__tag--level">
        <span className="hero-art__tag-num">LVL</span>
        <span>01</span>
      </div>
      <div className="hero-art__tag hero-art__tag--status">
        <span className="hero-art__dot" />
        Available for work
      </div>
    </div>
  );
}
