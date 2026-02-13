import './App.css'
import profileImage from './assets/Profile.JPG'
import Header from './components/Header/Header'
import About from './components/About/About'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const projects = [
  {
    title: 'Focus Flow Timer',
    description:
      'A clean focus timer concept with session tracking and calming visuals.',
    technologies: ['React', 'CSS', 'Vite'],
    isAmazing: true,
  },
  {
    title: 'Campus Event Hub',
    description:
      'A card-based layout for browsing student events and saving favorites.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    isAmazing: false,
  },
  {
    title: 'Simple To-Do List',
    description:
      'A simple to-do list app for adding, completing, and removing tasks.',
    technologies: ['C#'],
    isAmazing: true,
  },
]

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Vite']

function App() {
  return (
    <div className="app">
      <Header
        name="Bara"
        tagline="Front-end developer in training, crafting bold and simple web experiences."
        navItems={['Home', 'About', 'Projects', 'Contact']}
      />
      <main>
        <About
          profileImage={profileImage}
          bio="I am a creative front-end learner focused on building portfolio-ready UI with clean structure and intentional typography. I enjoy turning ideas into responsive pages that feel calm, modern, and easy to navigate."
          skills={skills}
        />
        <ProjectShowcase projects={projects} />
        <Contact
          email="chebbibara50@gmail.com"
          github="https://github.com/si-chebbi-bara"
          linkedin="https://www.linkedin.com/in/bara-chebbi/"
        />
      </main>
      <Footer name="Bara" />
    </div>
  )
}

export default App
