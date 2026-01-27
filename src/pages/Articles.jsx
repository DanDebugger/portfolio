import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const articles = [
    {
        id: 1,
        title: "The Future of Frontend Architecture",
        excerpt: "Exploring the shift from monolithic SPAs to Island Architecture and Server Components. Why the way we build the web is changing fundamentally.",
        date: "Dec 12, 2025",
        readTime: "5 min read",
        author: "Tech Insights",
        tags: ["Architecture", "React", "Web Performance"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        link: "https://dev.to"
    },
    {
        id: 2,
        title: "Mastering Dark Mode Design",
        excerpt: "It's more than just inverting colors. A deep dive into contrast ratios, elevation perception, and creating semantic color systems.",
        date: "Nov 28, 2025",
        readTime: "4 min read",
        author: "Design Weekly",
        tags: ["UI/UX", "Design System", "CSS"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop",
        link: "https://medium.com"
    },
    {
        id: 3,
        title: "Accessible by Default",
        excerpt: "Why accessibility shouldn't be an afterthought. Practical tips for integrating WCAG 2.1 guidelines into your daily development workflow.",
        date: "Nov 15, 2025",
        readTime: "6 min read",
        author: "A11y Matters",
        tags: ["a11y", "Inclusive Design", "Best Practices"],
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
        link: "https://web.dev"
    },
    {
        id: 4,
        title: "State Management in 2026",
        excerpt: "Do we still need Redux? Comparing modern solutions like Zustand, Jotai, and Signals, and when to use context vs global state.",
        date: "Oct 30, 2025",
        readTime: "7 min read",
        author: "React Digest",
        tags: ["State Management", "JavaScript", "Engineering"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        link: "https://react.dev"
    }
];

export default function Articles() {
    return (
        <main className="section-full articles-section" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <Container>
                <div className="text-center mb-5 reveal">
                    <h2 className="section-title">Latest News</h2>
                    <div className="section-title-underline"></div>
                    <p className="section-subtitle">
                        Insights on technology, development patterns, and industry trends.
                    </p>
                </div>

                <Row className="g-4">
                    {articles.map((article, index) => (
                        <Col key={article.id} lg={6} md={12} className={`reveal reveal-delay-${(index % 3) + 1}`}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Card className="article-card h-100 border-0 overflow-hidden" style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '1.5rem',
                                        boxShadow: 'var(--shadow-sm)',
                                        cursor: 'pointer'
                                    }}>
                                        {/* Featured Image */}
                                        <div style={{
                                            height: '200px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}>
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '1rem',
                                                right: '1rem',
                                                background: 'var(--primary)',
                                                color: '#fff',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '99px',
                                                fontSize: '0.75rem',
                                                fontWeight: 600
                                            }}>
                                                {article.tags[0]}
                                            </div>
                                        </div>

                                        <Card.Body className="p-4 d-flex flex-column">
                                            {/* Metadata */}
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="bi bi-person-circle" style={{ color: '#ffffff', fontSize: '1rem' }}></i>
                                                    <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 500 }}>
                                                        {article.author}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    whileHover={{ rotate: 15 }}
                                                    style={{ color: 'var(--primary)', fontSize: '1.2rem' }}
                                                >
                                                    <i className="bi bi-arrow-up-right-circle-fill"></i>
                                                </motion.div>
                                            </div>

                                            <Card.Title as="h3" className="mb-2" style={{
                                                fontWeight: 700,
                                                color: 'var(--text-primary)',
                                                fontSize: '1.25rem',
                                                lineHeight: '1.4'
                                            }}>
                                                {article.title}
                                            </Card.Title>

                                            <div className="mb-3" style={{ fontSize: '0.85rem', color: '#ffffff' }}>
                                                <i className="bi bi-calendar3 me-2"></i>
                                                {article.date} · {article.readTime}
                                            </div>

                                            <Card.Text style={{
                                                color: '#ffffff',
                                                marginBottom: '1.5rem',
                                                flex: 1,
                                                fontSize: '0.95rem',
                                                lineHeight: '1.6'
                                            }}>
                                                {article.excerpt}
                                            </Card.Text>

                                            <div className="d-flex flex-wrap gap-2 mt-auto">
                                                {article.tags.slice(1).map(tag => (
                                                    <Badge key={tag} pill bg="primary" className="text-white" style={{
                                                        padding: '0.5em 1em',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600
                                                    }}>
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    );
}
