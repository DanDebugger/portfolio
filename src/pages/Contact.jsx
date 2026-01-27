import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import '../App.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset after showing success logic
      setTimeout(() => {
        const mailto = `mailto:dangreyconcepcion312@gmail.com?subject=${encodeURIComponent(
          form.subject || 'New message from portfolio',
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        )}`
        window.location.href = mailto
        setSubmitted(false)
        setForm({ name: '', email: '', subject: '', message: '' })
      }, 1500)
    }, 1500)
  }

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  }

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Feel free to reach out for collaborations, freelance work, or just to say hi."
    >
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <motion.div
            className="contact-card p-4 p-md-5 mt-3 position-relative overflow-hidden"
            whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="d-flex flex-column align-items-center justify-content-center h-100 py-5"
                >
                  <motion.div
                    className="rounded-circle bg-success d-flex align-items-center justify-content-center mb-4"
                    style={{ width: '80px', height: '80px' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <i className="bi bi-check-lg text-white fs-1"></i>
                  </motion.div>
                  <h3 className="text-white mb-2">Message Sent!</h3>
                  <p className="text-white-50">Opening your email client...</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="row g-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div className="col-md-6" variants={formItemVariants}>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div className="col-md-6" variants={formItemVariants}>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div className="col-12" variants={formItemVariants}>
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="What would you like to talk about?"
                      value={form.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div className="col-12" variants={formItemVariants}>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-control"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  <motion.div className="col-12 d-flex justify-content-end" variants={formItemVariants}>
                    <motion.button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
