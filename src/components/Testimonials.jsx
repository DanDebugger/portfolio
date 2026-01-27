import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from 'react-bootstrap'

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Product Manager at TechFlow",
        quote: "Dan transformed our outdated platform into a modern, high-performance web app. His attention to detail and animations made the user experience simply outstanding.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Founder, StartUp Inc",
        quote: "Working with Dan was a breeze. He understood our vision immediately and delivered a product that exceeded our expectations. The 3D elements are a game changer.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Creative Director",
        quote: "I've worked with many developers, but Dan's eye for design sets him apart. He bridges the gap between design and engineering perfectly.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const handleDotClick = (index) => {
        setCurrent(index)
    }

    return (
        <section className="py-5 position-relative" style={{ overflow: 'hidden' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h2 className="section-title">Client Stories</h2>
                    <div className="section-title-underline mx-auto"></div>
                </motion.div>

                <div className="position-relative mx-auto" style={{ maxWidth: '800px', minHeight: '300px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="w-100"
                        >
                            <div
                                className="p-5 text-center position-relative"
                                style={{
                                    background: 'rgba(30, 41, 59, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '2rem',
                                    border: '1px solid var(--border-subtle)',
                                    boxShadow: 'var(--shadow-lg)'
                                }}
                            >
                                <div className="mb-4">
                                    <i className="bi bi-quote fs-1 text-primary opacity-50"></i>
                                </div>

                                <p className="fs-5 mb-4 px-md-5 fst-italic position-relative" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                    "{testimonials[current].quote}"
                                </p>

                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <motion.div
                                        className="mb-3 rounded-circle p-1"
                                        style={{ border: '2px solid var(--primary)', background: 'transparent' }}
                                    >
                                        <img
                                            src={testimonials[current].avatar}
                                            alt={testimonials[current].name}
                                            className="rounded-circle"
                                            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                        />
                                    </motion.div>
                                    <h5 className="mb-1 fw-bold" style={{ color: 'var(--text-primary)' }}>{testimonials[current].name}</h5>
                                    <span className="small text-uppercase tracking-wider" style={{ color: 'var(--primary)', letterSpacing: '0.05em', fontSize: '0.8rem' }}>
                                        {testimonials[current].role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Navigation */}
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className="border-0 rounded-circle transition-all"
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    background: current === index ? 'var(--primary)' : 'var(--border-subtle)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    padding: 0
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
