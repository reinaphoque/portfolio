import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project, className = "" }) {
  return (
    <Link to={`/showcase/${project.slug}`} className={`pcard ${className}`}>
      <div className="pcard__art" style={project.image ? undefined : { background: project.gradient }}>
        {project.image && <img className="pcard__img" src={project.image} alt={project.title} loading="lazy" />}
        <span className="pcard__art-ring" />
        <span className="pcard__art-dot" />
        <div className="pcard__overlay">
          <span className="pcard__view">VIEW PROJECT →</span>
        </div>
      </div>
      <div className="pcard__body">
        <div className="pcard__meta">
          <span className="pcard__number">{project.number}</span>
          <span className="pcard__category">{project.category}</span>
          <span className="pcard__year">{project.year}</span>
        </div>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <ul className="pcard__tags">
            {project.tags.map((tag) => (
              <li key={tag} className="pcard__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
