import "./SkillTags.css";

const PALETTE = ["cyan", "lavender", "pink", "powder"];

export default function SkillTags({ skills }) {
  return (
    <ul className="skill-tags">
      {skills.map((skill, i) => (
        <li key={skill} className={`skill-tag skill-tag--${PALETTE[i % PALETTE.length]}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
