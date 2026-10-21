import { Circle, Star, Sparkle, Dot, PlusIcon } from "../components/Decor";
import SkillTags from "../components/SkillTags";
import SoftwareGrid from "../components/SoftwareGrid";
import { NAME, EDUCATION, EXPERIENCE, INTERESTS, LANGUAGES, SKILLS } from "../data/content";
import portraitPhoto from "../assets/reina-chibi.png";
import "./About.css";
import usePageTitle from "../hooks/usePageTitle";

const STICKERS = [
  { label: "GAME", posClass: "pos-1", tone: "cyan" },
  { label: "UX/UI", posClass: "pos-2", tone: "pink" },
  { label: "ART", posClass: "pos-3", tone: "lavender" },
  { label: "PROJECT LEAD", posClass: "pos-4", tone: "powder" },
];

export default function About() {
  usePageTitle("About");
  return (
    <>
      <section className="section about">
        <div className="decor-field">
          <Circle size={70} color="var(--cyan)" style={{ top: "8%", right: "6%" }} filled={false} anim="a" />
          <Star size={18} style={{ bottom: "10%", left: "6%" }} />
          <Sparkle size={16} style={{ top: "50%", left: "2%" }} />
        </div>

        <div className="container about__grid">
          <div className="about__portrait-col">
            <div className="about__portrait">
              <div className="about__portrait-frame">
                <img className="about__portrait-img" src={portraitPhoto} alt={NAME} />
              </div>
              {STICKERS.map((s) => (
                <span
                  key={s.label}
                  className={`about__sticker about__sticker--${s.tone} about__sticker--${s.posClass}`}
                >
                  {s.label}
                </span>
              ))}
            </div>

            <div className="about__heading">
              <span className="eyebrow">About</span>
              <h1 className="section-heading">ABOUT ME</h1>
              <p className="about__intro">
                I'm a game designer and illustrator who's usually the one holding the whole pipeline
                together. At university I lead as project manager while also owning the design —
                systems, UX/UI, characters, and art — and picking up basic code when a prototype needs
                it. Alongside that, I take on freelance illustration and character design work.
              </p>
            </div>
          </div>

          <div className="about__content">
            <div className="about__blocks">
              <div className="about__block">
                <span className="about__block-label">Education</span>
                <ul className="about__timeline">
                  {EDUCATION.map((e) => (
                    <li key={e.title}>
                      <span className="about__timeline-period">{e.period}</span>
                      <span className="about__timeline-title">{e.title}</span>
                      <span className="about__timeline-place">{e.place}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about__block">
                <span className="about__block-label">Experience</span>
                <ul className="about__timeline">
                  {EXPERIENCE.map((e) => (
                    <li key={e.title}>
                      <span className="about__timeline-period">{e.period}</span>
                      <span className="about__timeline-title">{e.title}</span>
                      <span className="about__timeline-place">{e.place}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about__block">
                <span className="about__block-label">Interests</span>
                <ul className="about__interests">
                  {INTERESTS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>

              <div className="about__block">
                <span className="about__block-label">Languages</span>
                <ul className="about__timeline about__timeline--languages">
                  {LANGUAGES.map((l) => (
                    <li key={l.name}>
                      <span className="about__timeline-title">{l.name}</span>
                      <span className="about__timeline-place">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="decor-field">
          <PlusIcon size={18} style={{ top: "10%", right: "8%" }} />
          <Dot size={10} color="var(--pink)" style={{ bottom: "16%", left: "10%" }} />
        </div>
        <div className="container">
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading">WHAT I WORK WITH</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            A typography-first look at the crafts I bring to a project.
          </p>
          <SkillTags skills={SKILLS} />
        </div>
      </section>

      <section className="section software-section">
        <div className="container">
          <span className="eyebrow">Software</span>
          <h2 className="section-heading">TOOLBOX</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            The programs I reach for daily, across 2D, 3D, and interface design.
          </p>
          <SoftwareGrid />
        </div>
      </section>
    </>
  );
}
