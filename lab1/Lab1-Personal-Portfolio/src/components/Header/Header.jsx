import './Header.css'

function Header({ name, tagline, navItems }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-text">
          <p className="header-eyebrow">Portfolio Preview</p>
          <h1 className="header-title">{name}</h1>
          <p className="header-tagline">{tagline}</p>
        </div>
        <nav className="header-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
