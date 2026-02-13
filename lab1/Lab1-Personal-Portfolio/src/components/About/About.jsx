import './About.css'

function About({ profileImage, bio, skills }) {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <h2>About</h2>
        <p>Focused on thoughtful interfaces and clean front-end builds.</p>
      </div>
      <div className="about-content">
        <img className="about-image" src={profileImage} alt="Profile" />
        <div>
          <p className="about-bio">{bio}</p>
          <h3 className="about-subtitle">Skills</h3>
          <ul className="about-skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
