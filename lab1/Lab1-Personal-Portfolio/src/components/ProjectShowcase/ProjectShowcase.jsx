import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectShowcase.css'

function ProjectShowcase({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Snapshots of recent builds and experiments.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectShowcase
