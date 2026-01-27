import { motion } from 'framer-motion';

const TestimonialCard = ({ t }) => (
    <motion.div
        className="testimonial-card"
        whileHover={{
            borderColor: '#1515f0ff',
            boxShadow: '0 4px 20px rgba(21, 21, 240, 0.3)'
        }}
        style={{
            background: '#0B0E14',
            border: '1px solid #1F2937',
            borderRadius: '1rem',
            padding: '1.25rem',
            width: '100%',
            maxWidth: '350px',
            height: '200px',
            flexShrink: 0,
            cursor: 'default',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
        }}
    >
        <div className="d-flex gap-3 h-100">
            <div className="flex-shrink-0">
                <img
                    src={t.avatar}
                    alt={t.name}
                    className="rounded-circle"
                    style={{ width: '48px', height: '48px', objectFit: 'cover', border: '2px solid #1F2937' }}
                />
            </div>
            <div className="flex-grow-1 d-flex flex-column">
                <p className="mb-3" style={{ color: '#E5E7EB', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    "{t.quote}"
                </p>
                <div className="mt-auto">
                    <span style={{ color: '#0000FF', fontWeight: 600, fontSize: '0.9rem' }}>
                        {t.name}
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

export default TestimonialCard;
