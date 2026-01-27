import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import '../App.css'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="A selection of work that highlights my experience with real-world UI and functionality."
    >
      <div className="row justify-content-center g-4 mt-4">
        <motion.div
          className="col-lg-8 col-xl-7"
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="card h-100 project-card border-0" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
            transition: 'border-color 0.3s ease'
          }}>
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="project-icon-wrapper">
                  <i className="bi bi-building text-primary" />
                </div>
                <h5 className="card-title mb-0">
                  FindArchi
                </h5>
              </div>
              <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                FindArchi is a revolutionary app that simplifies hiring architects for any construction project.
                Connect with talented professionals for renovations or large-scale developments. Browse profiles,
                view portfolios, read reviews, and hire seamlessly. Customize your team with contractors and
                engineers for expert project management.
              </p>
              <div className="project-tech mb-4">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
              </div>
              <div className="d-flex gap-3">
                <motion.a
                  href="https://findarchi.infinityfree.me/?i=1"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-box-arrow-up-right me-2" />
                  View Live Site
                </motion.a>
                <motion.a
                  href="https://github.com/DanDebugger/FindArchi"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-github me-2" />
                  View Code
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
