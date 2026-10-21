import { Link } from "react-router-dom";
import HeroArt from "../components/HeroArt";
import ProjectCard from "../components/ProjectCard";
import { Sparkle, PlusIcon, CurvedLine, Arrow } from "../components/Decor";
import { NAME, TITLES, TAGLINE, PROJECTS } from "../data/content";
import "./Home.css";
import usePageTitle from "../hooks/usePageTitle";

const FEATURED_LAYOUT = [
  { slug: "kools-kid-dpu", size: "medium" },
  { slug: "fumi-bakery-trouble", size: "medium" },
  { slug: "doctor-jack-stauber-animation", size: "medium" },
];

const FEATURED = FEATURED_LAYOUT.map(({ slug, size }) => ({
  ...PROJECTS.find((p) => p.slug === slug),
  size,
}));

export default function Home() {
  usePageTitle();
  return (
    <>
      <section className="hero section">
        <div className="container hero__grid">
          <div className="hero__left">
            <span className="eyebrow">
              <Sparkle size={14} style={{ position: "static" }} /> PORTFOLIO / CV
            </span>
            <h1 className="hero__name">{NAME}</h1>
            <ul className="hero__titles">
              {TITLES.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="hero__tagline">{TAGLINE}</p>
            <div className="hero__actions">
              <Link to="/showcase" className="btn btn-primary">
                VIEW MY WORK →
              </Link>
              <Link to="/about" className="btn btn-secondary">
                ABOUT ME →
              </Link>
            </div>
          </div>

          <div className="hero__center">
            <HeroArt />
          </div>

          <aside className="hero__right">
            <div className="hero__window" aria-hidden="true">
              <span className="hero__window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="hero__window-line" />
              <span className="hero__window-line hero__window-line--short" />
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">{PROJECTS.length}+</span>
              <p className="hero__stat-text">Projects across game design, UX/UI &amp; illustration</p>
            </div>
            <div className="hero__stat hero__stat--current">
              <span className="hero__stat-label">Currently</span>
              <p className="hero__stat-text">
                Project-leading a university game while taking on freelance illustration work.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section works">
        <div className="decor-field">
          <PlusIcon size={18} style={{ top: "6%", left: "4%" }} />
          <CurvedLine style={{ top: "2%", right: "6%" }} />
        </div>
        <div className="container">
          <div className="works__head">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="section-heading">SELECTED WORKS</h2>
              <p className="section-sub">A few projects across game design, illustration, and animation.</p>
            </div>
            <Link to="/showcase" className="btn btn-ghost works__all">
              VIEW ALL WORK <Arrow size={16} style={{ position: "static" }} />
            </Link>
          </div>

          <div className="work-grid">
            {FEATURED.map((p) => (
              <ProjectCard key={p.slug} project={p} className={`pcard--${p.size}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-strip">
        <div className="container cta-strip__inner">
          <div>
            <span className="eyebrow">Say hello</span>
            <h2 className="cta-strip__heading">Got a project in mind?</h2>
          </div>
          <Link to="/contact" className="btn btn-primary">
            GET IN TOUCH →
          </Link>
        </div>
      </section>
    </>
  );
}
