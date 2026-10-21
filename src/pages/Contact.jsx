import { Circle, Star, Sparkle, Dot, Blob, PlusIcon } from "../components/Decor";
import { SOCIALS } from "../data/content";
import "./Contact.css";
import usePageTitle from "../hooks/usePageTitle";

const emailLink = SOCIALS.find((s) => s.label === "WORK EMAIL");

export default function Contact() {
  usePageTitle("Contact");
  return (
    <section className="section contact">
      <div className="container contact__panel">
        <div className="decor-field">
          <Blob size={220} color="var(--white)" style={{ top: "-10%", left: "-8%" }} opacity={0.5} />
          <Blob size={180} color="var(--pink)" style={{ bottom: "-8%", right: "-6%" }} opacity={0.4} anim="a" />
          <Circle size={16} color="var(--purple)" style={{ top: "18%", right: "14%" }} />
          <Star size={22} style={{ bottom: "22%", left: "10%" }} />
          <Sparkle size={16} style={{ top: "12%", left: "16%" }} />
          <Dot size={10} color="var(--white)" style={{ bottom: "14%", right: "26%" }} />
          <PlusIcon size={18} style={{ top: "40%", right: "6%" }} />
        </div>

        <div className="contact__inner">
          <span className="eyebrow">Let's talk</span>
          <h1 className="contact__heading">
            LET'S CREATE
            <br />
            SOMETHING TOGETHER.
          </h1>
          <p className="contact__sub">
            Open to internships and collaborations in game design, UX/UI, and illustration.
          </p>

          <a href={emailLink.href} className="btn btn-primary contact__cta">
            GET IN TOUCH →
          </a>

          <ul className="contact__links">
            {SOCIALS.map((s) => {
              const external = s.href.startsWith("http");
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="contact__link"
                  >
                    <span className="contact__link-label">{s.label}</span>
                    <span className="contact__link-value">{s.value}</span>
                    {s.note && <span className="contact__link-note">{s.note}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
