import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { Circle, Sparkle, Dot } from "../components/Decor";
import { PROJECTS, CATEGORIES, MORE_WORK_URL } from "../data/content";
import "./Showcase.css";
import usePageTitle from "../hooks/usePageTitle";

const FILTERS = ["ALL", ...CATEGORIES];

export default function Showcase() {
  usePageTitle("Showcase");
  const [active, setActive] = useState("ALL");

  const filtered = useMemo(
    () => (active === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active))),
    [active]
  );

  return (
    <section className="section showcase">
      <div className="decor-field">
        <Circle size={90} color="var(--lavender)" style={{ top: "4%", right: "-4%" }} anim="b" />
        <Sparkle size={16} style={{ top: "16%", left: "4%" }} />
        <Dot size={10} color="var(--pink)" style={{ bottom: "10%", right: "8%" }} />
      </div>

      <div className="container">
        <div className="showcase__head">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h1 className="section-heading">SHOWCASE</h1>
            <p className="section-sub">Selected projects, experiments, and university work.</p>
          </div>
          <div className="showcase__head-actions">
            <a href={MORE_WORK_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              SEE MORE ON FORIIO ↗
            </a>
            <Link to="/services" className="btn btn-primary">
              HIRE ME →
            </Link>
          </div>
        </div>

        <div className="showcase__filters" role="tablist" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter-btn ${active === f ? "is-active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="work-grid showcase__grid">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} className={`pcard--${p.size}`} />
          ))}
        </div>

        {filtered.length === 0 && <p className="showcase__empty">No projects in this category yet.</p>}
      </div>
    </section>
  );
}
