import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    if (!src) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt || "Image preview"}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close preview">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>
      <img className="lightbox__img" src={src} alt={alt || ""} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
