import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PROJECTS, CATEGORY_SECTIONS } from "../data/content";
import { getSectionCopy } from "../data/sectionCopy";
import { Sparkle, Star, Dot, Arrow } from "../components/Decor";
import Lightbox from "../components/Lightbox";
import usePageTitle from "../hooks/usePageTitle";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);
  usePageTitle(project?.title);

  if (!project) return <Navigate to="/showcase" replace />;

  const sections = project.sections || (CATEGORY_SECTIONS[project.category] || []).map((label) => ({ label }));
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const heroImg = project.heroImage === false ? null : project.heroImage || project.image;

  return (
    <article className="pdetail">
      <header
        className={`section pdetail__hero ${heroImg ? "pdetail__hero--photo" : ""}`}
        style={
          heroImg
            ? { backgroundImage: `url(${heroImg})` }
            : { background: project.gradient }
        }
      >
        {heroImg && <div className="pdetail__hero-scrim" />}
        <div className="decor-field">
          <Sparkle size={20} style={{ top: "14%", left: "8%" }} />
          <Star size={16} style={{ bottom: "18%", right: "10%" }} />
          <Dot size={10} color="var(--white)" style={{ top: "30%", right: "20%" }} />
        </div>
        <div className="container">
          <Link to="/showcase" className="pdetail__back">
            ← BACK TO SHOWCASE
          </Link>
          <p className="eyebrow pdetail__eyebrow">
            {project.category} · {project.year}
          </p>
          <h1 className="pdetail__title">{project.title}</h1>
        </div>
      </header>

      <div className="container">
        <div className="pdetail__meta">
          <div>
            <span className="pdetail__meta-label">Overview</span>
            <p className="pdetail__meta-text">{project.overview}</p>
          </div>
          <div>
            <span className="pdetail__meta-label">My Role</span>
            <p className="pdetail__meta-text">{project.role}</p>
          </div>
          <div>
            <span className="pdetail__meta-label">Tools</span>
            <div className="pdetail__tools">
              {project.tools.map((t) => (
                <span key={t} className="pdetail__tool-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="pdetail__meta-label">Duration</span>
            <p className="pdetail__meta-text">{project.duration}</p>
          </div>
        </div>

        <div className="pdetail__sections">
          {sections.map((section, i) => (
            <section className="pdetail__section" key={section.label}>
              <div className="pdetail__section-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="pdetail__section-body">
                <h2 className="pdetail__section-title">{section.label}</h2>
                <p className="pdetail__section-text">{section.text || getSectionCopy(section.label, project)}</p>
                {section.link && (
                  <a className="pdetail__section-link" href={section.link.href} target="_blank" rel="noreferrer">
                    {section.link.label}
                  </a>
                )}
                {section.video && (
                  <div className="pdetail__section-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${section.video}`}
                      title={section.label}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {section.embed && (
                  <div className="pdetail__section-embed">
                    <iframe src={section.embed} title={`${project.title} — ${section.label}`} loading="lazy" />
                  </div>
                )}
                {section.localVideo && (
                  <video className="pdetail__section-local-video" src={section.localVideo} controls playsInline preload="metadata" />
                )}
                {section.images ? (
                  <div className="pdetail__section-gallery">
                    {section.images.map((img) => (
                      <button
                        type="button"
                        className="pdetail__section-img-btn"
                        onClick={() => setLightbox({ src: img, alt: section.label })}
                        key={img}
                      >
                        <img className="pdetail__section-img" src={img} alt={section.label} loading="lazy" />
                      </button>
                    ))}
                  </div>
                ) : section.image ? (
                  <button
                    type="button"
                    className="pdetail__section-img-btn"
                    onClick={() => setLightbox({ src: section.image, alt: section.label })}
                  >
                    <img className="pdetail__section-img" src={section.image} alt={section.label} />
                  </button>
                ) : !section.video && !section.localVideo && !section.embed ? (
                  <div
                    className="pdetail__section-art"
                    style={{
                      background: `linear-gradient(${135 + i * 20}deg, var(--cool-white), ${
                        ["var(--cyan)", "var(--lavender)", "var(--pink)", "var(--powder-blue)"][i % 4]
                      })`,
                    }}
                  />
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="pdetail__next">
          <span className="eyebrow">Next Project</span>
          <Link to={`/showcase/${next.slug}`} className="pdetail__next-link">
            {next.title} <Arrow size={20} style={{ position: "static" }} />
          </Link>
        </div>
      </div>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </article>
  );
}
