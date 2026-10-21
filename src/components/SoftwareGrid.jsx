import { SOFTWARE } from "../data/content";
import "./SoftwareGrid.css";

export default function SoftwareGrid() {
  return (
    <div className="software-grid">
      {SOFTWARE.map((s) => (
        <div className="software-card" key={s.name}>
          <span className="software-card__badge">{s.abbr}</span>
          <span className="software-card__name">{s.name}</span>
        </div>
      ))}
    </div>
  );
}
