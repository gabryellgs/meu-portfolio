import './App.css'
import BgCanvas from './components/BgCanvas.jsx'
import Loader from './components/Loader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <div className="aurora-bg" />
      <div className="grid-bg" />
      <BgCanvas />
      <div className="noise" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
