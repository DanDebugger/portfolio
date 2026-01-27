import '../App.css'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GalaxyBackground from '../components/GalaxyBackground'

export default function Home() {
  const roles = ['Frontend', 'Backend', 'Fullstack', 'Game']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const roleVariants = {
    enter: {
      y: 20,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <GalaxyBackground />
      <section className="py-5 hero-section">
        <motion.div
          className="container position-relative"
          style={{ zIndex: 1 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="row align-items-center">
            <div className="col-md-7">
              <motion.div
                className="hero-pill mb-3"
                variants={itemVariants}
              >
                <span style={{ color: 'var(--primary)' }}>Available for work</span>
              </motion.div>
              <motion.p
                className="text-uppercase mb-2"
                style={{ color: 'var(--text-muted)' }}
                variants={itemVariants}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="hero-title fw-bold mb-2"
                variants={itemVariants}
              >
                <span className="hero-highlight">Dangrey D. Concepcion</span>
              </motion.h1>
              <motion.h2
                className="hero-subtitle mb-3"
                variants={itemVariants}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
              >
                <span className="animated-role-wrapper">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[currentRoleIndex]}
                      className="animated-role"
                      variants={roleVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {roles[currentRoleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span>Developer</span>
              </motion.h2>
              <motion.p
                className="lead mb-4"
                style={{ color: 'var(--text-secondary)' }}
                variants={itemVariants}
              >
                I build clean, responsive web applications with modern JavaScript, React, and great UX.
              </motion.p>
              <motion.div
                className="d-flex flex-wrap gap-2 mb-4"
                variants={itemVariants}
              >
                <motion.a
                  href="/projects"
                  className="btn shadow-sm"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    border: 'none'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  className="btn"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    border: '2px solid var(--border-strong)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
              <motion.div
                className="hero-social"
                variants={itemVariants}
              >
                <a
                  href="https://github.com/DanDebugger"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github" />
                </a>
                <a
                  href="https://instagram.com/your-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a
                  href="https://www.facebook.com/akatz.dansoy"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook" />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://twitter.com/your-twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter" />
                </a>
                <a
                  href="mailto:dangreyconcepcion312@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope" />
                </a>
              </motion.div>
            </div>
            <motion.div
              className="col-md-5 mt-4 mt-md-0 text-center text-md-end"
              variants={itemVariants}
            >
              <motion.div
                className="hero-image-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/Profile.jpg"
                  alt="Dangrey D. Concepcion"
                  className="hero-image"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}


