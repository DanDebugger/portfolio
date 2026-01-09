import '../App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just open mail client with prefilled content
    const mailto = `mailto:dangreyconcepcion312@gmail.com?subject=${encodeURIComponent(
      form.subject || 'New message from portfolio',
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )}`
    window.location.href = mailto
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  }

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <section className="py-5 contact-section">
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
            Contact
          </motion.h2>
          <motion.div 
            className="section-title-underline"
            variants={itemVariants}
          />
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <motion.p 
                className="text-center mb-4"
                variants={itemVariants}
              >
                Feel free to reach out for collaborations, freelance work, or just to say hi.
              </motion.p>
              <motion.div 
                className="contact-card p-4 p-md-5 mt-3"
                variants={cardVariants}
              >
                <form onSubmit={handleSubmit} className="row g-3">
                  <motion.div 
                    className="col-md-6"
                    variants={formItemVariants}
                  >
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="col-md-6"
                    variants={formItemVariants}
                  >
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="col-12"
                    variants={formItemVariants}
                  >
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="What would you like to talk about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div 
                    className="col-12"
                    variants={formItemVariants}
                  >
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-control"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="col-12 d-flex justify-content-end"
                    variants={formItemVariants}
                  >
                    <motion.button 
                      type="submit" 
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-send me-1" />
                      Send Message
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

