
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'

export default function About() {
  const slideshowImages = [
    '/images/Giga.jpg',
    '/images/Bayanihan.jpeg',
    '/images/profile 1.png'
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5 section-full about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="about-content-wrapper">
                <div className="about-header mb-4">
                  <h2 className="section-title reveal">Hackathons</h2>
                  <div className="section-title-underline mb-4 reveal reveal-delay-1" />
                  <p className="section-subtitle mb-4 reveal reveal-delay-1">
                    Building innovative solutions under pressure and solving real-world problems.
                  </p>
                </div>

                <div className="about-text-content reveal reveal-delay-2">
                  <p className="mb-3 text-light" style={{ lineHeight: '1.8', fontSize: '1.05rem', opacity: 0.9 }}>
                    I actively participate in startup competitions and hackathons. These high-energy environments
                    allow me to collaborate with talented individuals, tackle complex challenges, and bring
                    creative ideas to life rapidly.
                  </p>
                  <p className="mb-4 text-light" style={{ lineHeight: '1.8', fontSize: '1.05rem', opacity: 0.9 }}>
                    These experiences have significantly sharpened my skills in rapid prototyping and full-stack development
                    using technologies like React, Next.js, and Node.js. The thrill of turning a concept into a
                    functional application within a limited timeframe drives my passion for continuous learning and innovation.
                  </p>
                  
                  {/* Enhanced Startup & Hackathon Grid */}
                  <div className="row g-3 mb-5 mt-2">
                    <div className="col-12 col-md-6">
                      <div className="p-4 rounded-4 h-100" style={{
                        background: 'linear-gradient(145deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--bg-card-rgb), 1) 100%)',
                        border: '1px solid rgba(var(--primary-rgb), 0.2)',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(var(--primary-rgb), 0.2)', color: 'var(--primary)' }}>
                            <i className="bi bi-rocket-takeoff fs-4"></i>
                          </div>
                          <h4 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Startups</h4>
                        </div>
                        <p className="text-secondary mb-0 small">
                          Collaborating with early-stage founders and participating in intense startup incubators to rapidly iterate on MVPs.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="p-4 rounded-4 h-100" style={{
                        background: 'linear-gradient(145deg, rgba(var(--secondary-rgb, 108, 117, 125), 0.1) 0%, rgba(var(--bg-card-rgb), 1) 100%)',
                        border: '1px solid rgba(var(--secondary-rgb, 108, 117, 125), 0.2)',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(var(--secondary-rgb, 108, 117, 125), 0.2)', color: 'var(--text-primary)' }}>
                            <i className="bi bi-people fs-4"></i>
                          </div>
                          <h4 className="mb-0 fw-bold" style={{ color: 'var(--text-primary)' }}>Participants & Teams</h4>
                        </div>
                        <p className="text-secondary mb-0 small">
                          Working alongside brilliant designers, engineers, and strategists. A diverse team is the secret weapon in any hackathon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-skills-section mb-4 reveal reveal-delay-3">
                  <h3 className="mb-4" style={{
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '1.5rem'
                  }}>
                    <i className="bi bi-tools me-2" style={{ color: 'var(--primary)' }} />
                    Technologies I Work With
                  </h3>
                  <div className="row g-3">
                    {[
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', name: 'Next.js' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', name: 'Rust' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
                      { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' }
                    ].map((tech, idx) => (
                      <div key={idx} className="col-6 col-md-3">
                        <div
                          className="tech-skill-card h-100"
                          style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '1rem',
                            padding: '1.5rem 1rem',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 1rem'
                            }}
                          >
                            <img
                              src={tech.img}
                              alt={tech.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: ['Next.js', 'Rust'].includes(tech.name) ? 'invert(1)' : 'none'
                              }}
                            />
                          </div>
                          <h5 style={{
                            margin: 0,
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                          }}>
                            {tech.name}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="about-links-section mt-4 mb-4">
                  <h3 className="about-links-title mb-3">
                    <i className="bi bi-link-45deg me-2" />
                    Get In Touch
                  </h3>
                  <div className="about-links d-flex flex-wrap gap-3">
                    <a href="mailto:dangreyconcepcion312@gmail.com" className="about-link-item reveal reveal-delay-1">
                      <i className="bi bi-envelope" />
                      <span>dangreyconcepcion312@gmail.com</span>
                    </a>
                    <a
                      href="https://github.com/DanDebugger"
                      target="_blank"
                      rel="noreferrer"
                      className="about-link-item reveal reveal-delay-2"
                    >
                      <i className="bi bi-github" />
                      <span>github.com/DanDebugger</span>
                    </a>
                    <a
                      href="https://www.instagram.com/dangrey_dc/"
                      target="_blank"
                      rel="noreferrer"
                      className="about-link-item reveal reveal-delay-3"
                    >
                      <i className="bi bi-instagram" />
                      <span>@dangrey_dc</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="about-avatar-wrapper reveal">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}

                  style={{
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    border: '4px solid var(--bg-card)',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    background: 'var(--bg-card)',
                    width: '100%',
                    aspectRatio: '4/5'
                  }}
                >
                  {slideshowImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Gallery image ${idx + 1}`}
                      className="about-avatar"
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: currentImageIndex === idx ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        transform: currentImageIndex === idx ? 'scale(1)' : 'scale(1.05)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://ui-avatars.com/api/?name=Hackathon&background=3b82f6&color=fff&size=500';
                      }}
                    />
                  ))}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '2rem',
                    pointerEvents: 'none'
                  }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
