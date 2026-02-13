import './ProjectCard.css'

function ProjectCard({ title, description, technologies, isAmazing }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        {isAmazing && <span className="project-badge">🌟 Amazing</span>}
      </div>
      <p className="project-description">{description}</p>
      <ul className="project-tech">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
