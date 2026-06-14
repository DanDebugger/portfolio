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
          className="col-12 col-md-6 col-xl-4"
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
            <div className="card-body p-4">
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

        {/* Stellarni Project */}
        <motion.div
          className="col-12 col-md-6 col-xl-4"
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
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="project-icon-wrapper">
                  <i className="bi bi-link-45deg text-primary" />
                </div>
                <h5 className="card-title mb-0">
                  Stellarni
                </h5>
              </div>
              <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                On-chain Credential Verification + PDF Document Signing + Payments (Soroban / Stellar)

                Stellaroid Earn is a Soroban smart contract system that allows students to register academic credentials, upload and verify document hashes (PDF certificates/contracts), and enable secure signing and payments between students and employers on the Stellar network.
              </p>
              <div className="project-tech mb-4">
                <span>Blockchain</span>
                <span>Web3</span>
                <span>React</span>
                <span>Typescript</span>
                <span>WASM</span>
                <span>Rust</span>
                <span>Stellar</span>
                <span>Soroban</span>
              </div>
              <div className="d-flex gap-3">
                <motion.a
                  href="https://stellarni.vercel.app/"
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
                  href="https://github.com/DanDebugger/stellarni"
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

        {/* ProofX Project */}
        <motion.div
          className="col-12 col-md-6 col-xl-4"
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
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="project-icon-wrapper">
                  <i className="bi bi-shield-check text-primary" />
                </div>
                <h5 className="card-title mb-0">
                  ProofX
                </h5>
              </div>
              <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                ProofX is a blockchain-powered verification platform that helps people prove real work through trusted multi-party consensus. Instead of relying on self-claimed credentials, ProofX creates secure, verifiable records of contributions on the Sui blockchain. With privacy-first, link-gated access, users stay in control of who sees their verified achievements.
              </p>
              <div className="project-tech mb-4">
                <span>Blockchain</span>
                <span>Web3</span>
                <span>React</span>
                <span>Typescript</span>
                <span>Rust</span>
                <span>Sui</span>
                <span>Move</span>
              </div>
              <div className="d-flex gap-3">
                <motion.a
                  href="https://proofx.web.id/"
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
                  href="https://github.com/DanDebugger/Proofx"
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

        {/* Finchain Project */}
        <motion.div
          className="col-12 col-md-6 col-xl-4"
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
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="project-icon-wrapper">
                  <i className="bi bi-shield-check text-primary" />
                </div>
                <h5 className="card-title mb-0">
                  Finchain
                </h5>
              </div>
              <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                Finchain is a next-generation personal finance management platform that leverages the power of blockchain to provide secure, transparent, and user-controlled financial tracking. Built with a robust combination of web and blockchain technologies, Finchain eliminates the need for traditional financial intermediaries by enabling users to manage their finances directly on the blockchain.
              </p>
              <div className="project-tech mb-4">
                <span>Blockchain</span>
                <span>Web3</span>
                <span>React</span>
                <span>Typescript</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Motoko</span>
              </div>
              <div className="d-flex gap-3">
                <motion.a
                  href="https://github.com/DanDebugger/finchain"
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
                  href="https://github.com/DanDebugger/finchain"
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

        {/* UsapPdf Project */}
        <motion.div
          className="col-12 col-md-6 col-xl-4"
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
            <div className="card-body p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="project-icon-wrapper">
                  <i className="bi bi-file-earmark-pdf text-primary" />
                </div>
                <h5 className="card-title mb-0">
                  UsapPdf
                </h5>
              </div>
              <p className="card-text mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                An intelligent document assistant powered by Retrieval-Augmented Generation (RAG) that enables conversational interaction with PDF files. 
                Users can upload documents to ask questions, extract key details, summarize sections, 
                and retrieve structured data instantly through natural language chat.
              </p>
              <div className="project-tech mb-4">
                <span>React</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>FastAPI</span>
                <span>AI / LLM</span>
                <span>RAG</span>
                <span>LangChain</span>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <motion.div
                  className="badge px-3 py-2 d-flex align-items-center gap-2"
                  style={{ 
                    borderRadius: '2rem', 
                    fontSize: '0.9rem', 
                    background: 'rgba(255, 193, 7, 0.1)',
                    border: '1px solid rgba(255, 193, 7, 0.3)',
                    color: '#ffc107'
                  }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <i className="bi bi-cone-striped" />
                  In Development
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
