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
                  <h3 className="about-skills-title mb-3">
                    <i className="bi bi-tools me-2" />
                    Technologies I Work With
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                <span className="badge-skill">
                  <i className="bi bi-code-slash" /> React
                </span>
                <span className="badge-skill">
                  <i className="bi bi-filetype-js" /> JavaScript
                </span>
                <span className="badge-skill">
                  <i className="bi bi-filetype-jsx" /> Next.js
                </span>
                <span className="badge-skill">
                  <i className="bi bi-filetype-php" /> PHP
                </span>
                <span className="badge-skill">
                  <i className="bi bi-database" /> MySQL
                </span>
                <span className="badge-skill">
                  <i className="bi bi-filetype-html" /> HTML & CSS
                </span>
                <span className="badge-skill">
                  <i className="bi bi-braces" /> Other programming
                </span>
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
                  href="https://instagram.com/your-instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="about-link-item reveal reveal-delay-3"
                >
                  <i className="bi bi-instagram" />
                  <span>@your-instagram</span>
                </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="about-avatar-wrapper reveal">
                <img
                  src="/images/profile.jpg"
                  alt="Dangrey D. Concepcion"
                  className="about-avatar"
                  onError={(e) => {
                    e.target.src = '/images/Profile.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


