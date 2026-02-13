import './Contact.css'

function Contact({ email, github, linkedin }) {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Say hello or connect for future collaborations.</p>
      </div>
      <div className="contact-grid">
        <div>
          <h3>Email</h3>
          <p>{email}</p>
        </div>
        <div>
          <h3>GitHub</h3>
          <p>{github}</p>
        </div>
        <div>
          <h3>LinkedIn</h3>
          <p>{linkedin}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
