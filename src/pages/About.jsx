import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'

function ViewportCard({ item, onImageClick }) {
  const [imgError, setImgError] = useState(false)
  const isPdf = item.image && item.image.endsWith('.pdf')

  return (
    <div className="dashboard-viewport h-100">
      <div
        className="viewport-img-container"
        onClick={() => !isPdf && item.image && !imgError && onImageClick(item.image)}
      >
        {isPdf ? (
          <div className="fallback-cert" style={{ background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)' }}>
            <div className="fallback-cert-grid" />
            <div className="fallback-cert-shield" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444' }}>
              <i className="bi bi-file-pdf fs-2"></i>
            </div>
            <div className="fallback-cert-title">{item.title}</div>
            <span className="fallback-cert-badge mb-3" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.3)' }}>PDF Document</span>
            <a
              href={item.image}
              target="_blank"
              rel="noreferrer"
              className="btn mt-2"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.4rem 1.2rem',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              <i className="bi bi-file-earmark-pdf me-2"></i>Open PDF
            </a>
          </div>
        ) : imgError || !item.image ? (
          <div className="fallback-cert">
            <div className="fallback-cert-grid" />
            <div className="fallback-cert-shield">{item.initials}</div>
            <div className="fallback-cert-title">{item.title}</div>
            <span className="fallback-cert-badge">Asset Pending</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="viewport-img"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="viewport-info">
        <div>
          <div className="viewport-title-row">
            <div>
              <h3 className="h4 fw-bold m-0" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              {item.role && (
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                  {item.role}
                </div>
              )}
            </div>
            {item.badge && <span className="viewport-badge">{item.badge}</span>}
            {item.duration && <span className="viewport-badge">{item.duration}</span>}
          </div>
          <p className="viewport-desc mt-2">{item.desc}</p>
        </div>
        <div>
          <div className="viewport-tags">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="viewport-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ojtExperiences = [
  {
    id: 'serial-disruptor',
    num: 'OJT - Month 1',
    title: 'Serial Disruptor',
    role: 'Startup Incubation Intern',
    duration: '1 Month',
    desc: 'Focused on business startup incubation for my project FindArchi. Participated in intense mentorship sessions, market validation exercises, and pitching drills to transition a product concept into a viable startup strategy.',
    image: '/images/sd.png',
    initials: 'SD',
    tags: ['Startup Incubation', 'Business Pitching', 'FindArchi', 'Market Research']
  },
  {
    id: 'reverion-tech',
    num: 'OJT - Months 2-3',
    title: 'Reverion Tech',
    role: 'Web3 & Rust Developer Intern',
    duration: '2 Months',
    desc: 'Immersed in Web3 technology and systems programming. Responsible for learning Rust development practices, researching decentralized network integrations, and writing secure, performant smart contract code.',
    image: '/images/reverion.png',
    initials: 'RT',
    tags: ['Rust', 'Web3', 'Smart Contracts', 'Systems Architecture']
  }
]

const achievements = [
  {
    id: 'ideas-davao',
    num: 'Achievement 01',
    title: 'Ideas Davao 2024',
    badge: 'Top 10 Finalist',
    desc: 'Recognized as one of the top 10 startup ideas in the Davao region. Developed and pitched a technology-driven startup concept to a panel of venture capitalists, business incubators, and industry experts.',
    image: '/images/Bayanihan.jpeg',
    initials: 'ID',
    tags: ['Startup Pitching', 'Product Design', 'Davao Tech Ecosystem']
  },
  {
    id: 'sig-kilo100',
    num: 'Achievement 02',
    title: 'Smart Innovation Generation',
    badge: 'KILO 100 Awardee',
    desc: 'Selected as one of the elite KILO 100 innovators. Honored for demonstrating exceptional engineering and creative excellence in building forward-looking technological solutions.',
    image: '/images/Giga.jpg',
    initials: 'KG',
    tags: ['Innovation', 'System Prototyping', 'Engineering Award']
  },
  {
    id: 'sui-builders',
    num: 'Achievement 03',
    title: 'Sui Builders Program Davao Hackathon',
    badge: 'Top 8 Finalist',
    desc: 'Achieved a top 8 finish in the highly competitive Sui blockchain hackathon in Davao. Built a fully functional decentralized application (dApp) utilizing Sui Move smart contracts in 48 hours.',
    image: '/images/sui.png',
    initials: 'SUI',
    tags: ['Web3 Development', 'Sui Blockchain', 'Sui Move', 'Hackathon']
  },
  {
    id: 'iceti-2026',
    num: 'Achievement 04',
    title: 'ICETI 2026',
    badge: 'Conference Presenter',
    desc: 'Invited to present innovative technological solutions at the International Conference on Educational Technology and Innovation. Shared research and applications impacting digital education formats.',
    image: '/images/icete.png',
    initials: 'IC',
    tags: ['Educational Tech', 'Academic Research', 'Keynote Presentation']
  },
  {
    id: 'fit-academy',
    num: 'Achievement 05',
    title: 'FIT Academy’s 60-Second Challenge',
    badge: 'Top 3 Finalist',
    desc: 'Secured a top 3 finish in a fast-paced, high-pressure mobile and AI innovation pitch challenge. Effectively communicated product value, technology stack, and business model in a strict 60-second window.',
    image: '/images/fit.png',
    initials: 'FA',
    tags: ['AI & Mobile', 'Elevator Pitch', 'Rapid Concept Design']
  }
]

export default function About() {
  const slideshowImages = [
    '/images/Giga.jpg',
    '/images/Bayanihan.jpeg',
    '/images/profile 1.png'
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeOjt, setActiveOjt] = useState(ojtExperiences[0])
  const [activeAchievement, setActiveAchievement] = useState(achievements[0])
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideshowImages.length])

  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5 section-full about-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="about-content-wrapper">
                <div className="about-header mb-4">
                  <h2 className="section-title reveal text-gradient-gold">Professional Profile</h2>
                  <div className="section-title-underline mb-4 reveal reveal-delay-1" />
                  <p className="section-subtitle mb-4 reveal reveal-delay-1">
                    Building innovative systems under pressure and engineering full-stack software solutions.
                  </p>
                </div>

                <div className="hud-card reveal reveal-delay-2">
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
                  <div className="row g-3 mt-2">
                    <div className="col-12 col-md-6">
                      <div className="p-4 h-100" style={{
                        background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.08) 0%, rgba(30, 41, 59, 0.4) 100%)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        borderRadius: '4px',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(59, 130, 246, 0.15)', color: 'var(--primary)' }}>
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
                      <div className="p-4 h-100" style={{
                        background: 'linear-gradient(145deg, rgba(250, 204, 21, 0.05) 0%, rgba(30, 41, 59, 0.4) 100%)',
                        border: '1px solid rgba(250, 204, 21, 0.2)',
                        borderRadius: '4px',
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="p-2 rounded-circle me-3" style={{ background: 'rgba(250, 204, 21, 0.1)', color: 'var(--text-primary)' }}>
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

                <div className="about-skills-section mt-5 mb-4 reveal reveal-delay-3">
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
                        <div className="tech-card-hud h-100">
                          <div className="tech-card-hud-status">[SYS_OK]</div>
                          <div className="tech-card-hud-icon-wrapper">
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
                          <h5 className="font-heading" style={{
                            margin: 0,
                            color: 'var(--text-primary)',
                            fontWeight: 700,
                            fontSize: '0.9rem'
                          }}>
                            {tech.name}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="about-links-section mt-5 mb-4 reveal reveal-delay-3">
                  <div className="terminal-dock">
                    <a href="mailto:dangreyconcepcion312@gmail.com" className="terminal-dock-item">
                      dangreyconcepcion312@gmail.com
                      <i className="bi bi-envelope" />
                    </a>
                    <a
                      href="https://github.com/DanDebugger"
                      target="_blank"
                      rel="noreferrer"
                      className="terminal-dock-item"
                    >
                      github.com/DanDebugger
                      <i className="bi bi-github" />
                    </a>
                    <a
                      href="https://www.instagram.com/dangrey_dc/"
                      target="_blank"
                      rel="noreferrer"
                      className="terminal-dock-item"
                    >
                      @dangrey_dc
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="hud-avatar-wrapper reveal">
                <div className="hud-bracket hud-bracket-tl" />
                <div className="hud-bracket hud-bracket-tr" />
                <div className="hud-bracket hud-bracket-bl" />
                <div className="hud-bracket hud-bracket-br" />
                <div className="hud-scanner-line" />
                <div className="hud-coordinate-ticks">SYS.CAM_01_FEED // 48.09.26</div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    background: '#020617'
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

      {/* OJT Experiences Section */}
      <section className="py-5 border-top" style={{ borderColor: 'var(--border-subtle) !important', background: 'rgba(15, 23, 42, 0.3)' }}>
        <div className="container py-4">
          <div className="mb-4 text-center">
            <h2 className="section-title text-gradient-gold">OJT Journey</h2>
            <div className="section-title-underline" />
            <p className="section-subtitle">
              On-the-Job Training experiences building startup products and exploring blockchain technologies.
            </p>
          </div>

          <div className="dashboard-container">
            <div className="dashboard-list">
              {ojtExperiences.map((ojt) => (
                <div
                  key={ojt.id}
                  className={`dashboard-item ${activeOjt.id === ojt.id ? 'active' : ''}`}
                  onClick={() => setActiveOjt(ojt)}
                >
                  <div className="dashboard-item-num">{ojt.num}</div>
                  <div className="dashboard-item-title">{ojt.title}</div>
                  <div className="dashboard-item-subtitle">{ojt.duration}</div>
                </div>
              ))}
            </div>
            <div className="position-relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOjt.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ViewportCard item={activeOjt} onImageClick={setLightboxImage} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section className="py-5 border-top" style={{ borderColor: 'var(--border-subtle) !important' }}>
        <div className="container py-4">
          <div className="mb-4 text-center">
            <h2 className="section-title text-gradient-gold">Achievements & Recognition</h2>
            <div className="section-title-underline" />
            <p className="section-subtitle">
              Hackathons, academic competitions, and innovation challenges accepted and conquered.
            </p>
          </div>

          <div className="dashboard-container">
            <div className="dashboard-list">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`dashboard-item ${activeAchievement.id === ach.id ? 'active' : ''}`}
                  onClick={() => setActiveAchievement(ach)}
                >
                  <div className="dashboard-item-num">{ach.num}</div>
                  <div className="dashboard-item-title">{ach.title}</div>
                  <div className="dashboard-item-subtitle">{ach.badge}</div>
                </div>
              ))}
            </div>
            <div className="position-relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAchievement.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ViewportCard item={activeAchievement} onImageClick={setLightboxImage} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>&times;</button>
            <img src={lightboxImage} alt="Certificate Zoom" className="lightbox-img" />
          </div>
        </div>
      )}
    </main>
  )
}
