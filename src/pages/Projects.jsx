import { motion } from 'framer-motion'
import '../App.css'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5 projects-section">
        <motion.div 
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="section-title text-center"
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="section-title-underline"
            variants={itemVariants}
          />
          <motion.p 
            className="section-subtitle text-center"
            variants={itemVariants}
          >
            A selection of work that highlights my experience with real-world UI and functionality.
          </motion.p>
          <div className="row justify-content-center g-4 mt-4">
            <motion.div 
              className="col-lg-8 col-xl-7"
              variants={cardVariants}
            >
              <div className="card h-100 project-card">
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="project-icon-wrapper">
                      <i className="bi bi-building text-primary" />
                    </div>
                    <h5 className="card-title mb-0">
                      FindArchi
                    </h5>
                  </div>
                  <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
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
                    <a 
                      href="https://findarchi.infinityfree.me/?i=1" 
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <i className="bi bi-box-arrow-up-right me-2" />
                      View Live Site
                    </a>
                    <a 
                      href="https://github.com/DanDebugger/FindArchi" 
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-github me-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}


