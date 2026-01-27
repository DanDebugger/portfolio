import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
    return (
        <section className="py-5 position-relative bg-transparent" style={{ overflow: 'hidden' }}>
            <Container className="mb-4">
                <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex align-items-center gap-2">
                        <span style={{ color: '#0000FF', fontSize: '1.5rem', fontWeight: 'bold' }}>&gt;</span>
                        <h2 className="mb-0 fw-bold text-white fs-2">What People Say</h2>
                    </div>
                    <Link to="/testimonials" className="text-decoration-none d-flex align-items-center gap-1" style={{ color: '#0000FF', fontWeight: 500 }}>
                        View all <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </Container>

            {/* Marquee Container */}
            <div className="d-flex flex-column gap-4 py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>

                {/* Top Row - Moves Right (start at -50% and move to 0%) */}
                <div className="d-flex overflow-hidden">
                    <motion.div
                        className="d-flex gap-4 px-4"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        style={{ width: 'max-content' }}
                    >
                        {/* Split first 5, duplicate for loop */}
                        {[...testimonials.slice(0, 5), ...testimonials.slice(0, 5)].map((t, i) => (
                            <div key={`top-${t.id}-${i}`} style={{ width: '350px' }}>
                                <TestimonialCard t={t} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Moves Left (start at 0% and move to -50%) */}
                <div className="d-flex overflow-hidden">
                    <motion.div
                        className="d-flex gap-4 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        style={{ width: 'max-content' }}
                    >
                        {/* Split last 5, duplicate for loop */}
                        {[...testimonials.slice(5, 10), ...testimonials.slice(5, 10)].map((t, i) => (
                            <div key={`bottom-${t.id}-${i}`} style={{ width: '350px' }}>
                                <TestimonialCard t={t} />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
