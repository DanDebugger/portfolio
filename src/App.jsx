import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Articles from './pages/Articles.jsx'
import Contact from './pages/Contact.jsx'
import AllTestimonials from './pages/AllTestimonials.jsx'
import Tutorials from './pages/Tutorials.jsx'
import { Sandpack } from "@codesandbox/sandpack-react";
import StarsCanvas from './components/StarsCanvas.jsx'

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<AllTestimonials />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
      <StarsCanvas />
    </Router>
  )
}

export default App

