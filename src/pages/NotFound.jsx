import { Link } from "react-router-dom";
import { Sparkle, Star } from "../components/Decor";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page Not Found");
  return (
    <section className="section" style={{ textAlign: "center", position: "relative" }}>
      <div className="decor-field">
        <Sparkle size={20} style={{ top: "20%", left: "30%" }} />
        <Star size={18} style={{ bottom: "20%", right: "28%" }} />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow">404</span>
        <h1 className="section-heading">Lost in the sky islands.</h1>
        <p className="section-sub" style={{ margin: "16px auto 32px" }}>
          That page drifted off. Let's get you back on track.
        </p>
        <Link to="/" className="btn btn-primary">
          BACK HOME →
        </Link>
      </div>
    </section>
  );
}
