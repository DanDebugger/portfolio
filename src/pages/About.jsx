import { motion } from 'framer-motion'
import '../App.css'

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5 section-full about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="about-content-wrapper">
                <div className="about-header mb-4">
                  <h2 className="section-title reveal">About Me</h2>
                  <div className="section-title-underline mb-4 reveal reveal-delay-1" />
                  <p className="section-subtitle mb-4 reveal reveal-delay-1">
                    An IT professional passionate about continuous learning and innovation.
                  </p>
                </div>

                <div className="about-text-content reveal reveal-delay-2">
                  <p className="mb-3 text-secondary" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                    I'm an IT professional with a strong passion for technology and a commitment to continuous learning.
                    I believe in staying updated with the latest industry trends and technologies to deliver
                    innovative solutions.
                  </p>
                  <p className="mb-4 text-secondary" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                    Beyond my professional work, I actively participate in startup competitions, where I get to
                    collaborate with talented individuals, solve real-world problems, and bring creative ideas to life.
                    This experience has sharpened my skills in React, JavaScript, Next.js, PHP, and MySQL,
                    allowing me to build full-stack applications that make a difference.
                  </p>
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
                                filter: tech.name === 'Next.js' ? 'invert(1)' : 'none'
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
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    border: '4px solid var(--bg-card)',
                    boxShadow: 'var(--shadow-lg)',
                    position: 'relative',
                    background: 'var(--bg-card)'
                  }}
                >
                  <img
                    src="/images/profile.png"
                    alt="Dangrey D. Concepcion"
                    className="about-avatar"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://ui-avatars.com/api/?name=Dangrey+Concepcion&background=3b82f6&color=fff&size=500&font-size=0.33';
                    }}
                  />
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


