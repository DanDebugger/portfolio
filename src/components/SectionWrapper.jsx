import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const SectionWrapper = ({ children, title, subtitle, id, className = "" }) => {
    return (
        <section
            id={id}
            className={`section-full ${className}`}
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            <Container>
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-5"
                    >
                        {title && <h2 className="section-title">{title}</h2>}
                        <div className="section-title-underline mx-auto"></div>
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </Container>
        </section>
    );
};

export default SectionWrapper;
