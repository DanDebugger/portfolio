import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import gigaImage from '../images/Giga.jpeg';
import bayanihanImage from '../images/Bayanihan.jpeg';


export default function ContestHistory() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        // Recalculate to ensure accurate dimensions
        const timeout = setTimeout(updateWidth, 500);

        return () => {
            window.removeEventListener("resize", updateWidth);
            clearTimeout(timeout);
        };
    }, []);

    const contests = [
        {
            id: 1,
            title: "Bayanihan Venture",
            place: "Top 10 Finalist",
            desc: "Recognized among top startups for innovative tech solutions.",
            image: bayanihanImage
        },
        {
            id: 2,
            title: "Smart Generation S4",
            place: "Giga 100 Awardee",
            desc: "Selected as one of the top 100 student innovators.",
            image: gigaImage
        }
    ];

    return (
        <div className="contest-history-section mt-5 pt-5">
            <div className="text-center mb-5">
                <h2 className="display-4 font-heading mb-3" style={{ color: 'var(--text-primary)' }}>
                    Journey of <span className="hero-highlight">Innovation</span>
                </h2>
                <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                    A history of challenges accepted and victories earned.
                </p>
            </div>

            <motion.div
                ref={carousel}
                className="carousel-container"
                whileTap={{ cursor: "grabbing" }}
                style={{ overflow: "hidden", cursor: "grab", minHeight: "450px" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="d-flex gap-4 px-3"
                >
                    {contests.map((contest) => (
                        <motion.div
                            key={contest.id}
                            className="carousel-item p-3"
                            style={{ minWidth: "350px", borderRadius: "1.5rem", background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
                        >
                            <div
                                className="image-wrapper mb-3"
                                style={{ height: "200px", borderRadius: "1rem", overflow: "hidden" }}
                            >
                                <img
                                    src={contest.image}
                                    alt={contest.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
                                />
                            </div>
                            <h3 className="h4 mb-1" style={{ color: "var(--text-primary)", fontWeight: 700 }}>{contest.title}</h3>
                            <div className="badge bg-primary mb-2">{contest.place}</div>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{contest.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
