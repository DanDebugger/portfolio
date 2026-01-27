import { useState, useMemo } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import SectionWrapper from '../components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Sandpack } from "@codesandbox/sandpack-react";
import { tutorialData } from '../data/tutorialData';

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="btn btn-sm position-absolute top-0 end-0 m-2"
            style={{
                background: 'rgba(255,255,255,0.1)',
                color: copied ? 'var(--primary)' : 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
                backdropFilter: 'blur(4px)'
            }}
        >
            {copied ? <><i className="bi bi-check2 me-1"></i>Copied</> : <><i className="bi bi-clipboard me-1"></i>Copy</>}
        </button>
    );
};

const CodeBlock = ({ code }) => (
    <div className="position-relative mb-4 group">
        <div
            className="rounded border"
            style={{
                background: '#0d1117',
                borderColor: 'var(--border-subtle)',
                overflow: 'hidden'
            }}
        >
            <div className="p-3 overflow-auto">
                <pre className="m-0" style={{ fontFamily: '"Fira Code", monospace', fontSize: '0.9rem', color: '#e6edf3' }}>
                    {code}
                </pre>
            </div>
            <CopyButton text={code} />
        </div>
    </div>
);

const ColorSwatch = ({ name, variable, hex }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="mb-4 position-relative cursor-pointer"
            onClick={handleCopy}
            style={{ cursor: 'pointer' }}
        >
            <div
                className="rounded-top-3 d-flex align-items-center justify-content-center"
                style={{
                    height: '100px',
                    backgroundColor: `var(${variable}, ${hex})`,
                    border: '1px solid var(--border-subtle)',
                    borderBottom: 'none'
                }}
            >
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-dark text-white px-2 py-1 rounded small shadow-sm"
                        >
                            Copied!
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div
                className="p-3 rounded-bottom-3 border border-top-0"
                style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)'
                }}
            >
                <div className="fw-bold text-white mb-1">{name}</div>
                <div className="d-flex justify-content-between align-items-center">
                    <code className="text-primary small">{variable}</code>
                    <span className="text-secondary small font-monospace">{hex}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function Tutorials() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setSelectedId] = useState(tutorialData[0].items[0].id);

    // Flatten items for easy searching and finding selected item
    const allItems = useMemo(() => {
        return tutorialData.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })));
    }, []);

    const activeItem = allItems.find(item => item.id === selectedId) || allItems[0];

    const filteredData = useMemo(() => {
        if (!searchTerm) return tutorialData;

        return tutorialData.map(cat => ({
            ...cat,
            items: cat.items.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(cat => cat.items.length > 0);
    }, [searchTerm]);

    const renderContent = () => {
        if (activeItem.type === 'palette') {
            return (
                <Row>
                    {activeItem.data.map((color, idx) => (
                        <Col key={idx} xs={6} md={4}>
                            <ColorSwatch {...color} />
                        </Col>
                    ))}
                </Row>
            );
        }
        if (activeItem.type === 'icons') {
            return (
                <div className="d-flex gap-4 flex-wrap p-4 rounded border border-secondary" style={{ background: 'var(--bg-card)' }}>
                    {activeItem.data.map(icon => (
                        <motion.div
                            whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                            key={icon}
                            className="text-center cursor-pointer"
                            title={icon}
                            onClick={() => { navigator.clipboard.writeText(icon) }}
                        >
                            <div className="bg-dark p-3 rounded-3 mb-2 d-inline-flex border border-secondary shadow-sm">
                                <i className={`bi ${icon} fs-4`}></i>
                            </div>
                            <div className="text-primary small font-monospace" style={{ fontSize: '0.75rem' }}>.{icon}</div>
                        </motion.div>
                    ))}
                </div>
            );
        }
        if (activeItem.type === 'sandpack') {
            return (
                <div className="mt-4 rounded-4 overflow-hidden border border-secondary" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <Sandpack
                        template="react"
                        theme={{
                            colors: {
                                surface1: '#0f172a', // Background
                                surface2: '#1e293b', // Active line
                                surface3: '#334155', // Selection
                                clickable: '#94a3b8',
                                base: '#e2e8f0',
                                disabled: '#475569',
                                hover: '#f8fafc',
                                accent: '#3b82f6', // Primary
                                error: '#ef4444',
                                errorSurface: '#450a0a',
                            },
                            syntax: {
                                keyword: '#c084fc',
                                property: '#3b82f6',
                                plain: '#cbd5e1',
                                static: '#38bdf8',
                                string: '#4ade80',
                                definition: '#f472b6',
                                punctuation: '#94a3b8',
                                tag: '#f472b6',
                                comment: '#64748b',
                                doctype: '#94a3b8',
                            },
                        }}
                        files={activeItem.files}
                        options={{
                            showNavigator: true,
                            showLineNumbers: true,
                            showInlineErrors: true,
                            editorHeight: 400
                        }}
                    />
                </div>
            );
        }
        // Default to code
        return (
            <>
                <h5 className="text-white mb-3">Example Code</h5>
                <CodeBlock code={activeItem.code} />
                <div className="mt-5 p-3 rounded border border-info border-opacity-25" style={{ background: 'rgba(6, 182, 212, 0.05)' }}>
                    <div className="d-flex gap-3">
                        <i className="bi bi-info-circle-fill text-info fs-4"></i>
                        <div>
                            <h6 className="text-info fw-bold mb-1">Pro Tip</h6>
                            <p className="mb-0 small text-white-50">
                                Copy this code snippet directly into your project. Make sure you have the necessary dependencies installed for it to work correctly.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <SectionWrapper
            id="tutorials"
            title="Knowledge Hub"
            subtitle="50+ guides covering the full stack development lifecycle."
        >
            <Container fluid className="px-lg-5">
                <Row>
                    {/* Sidebar */}
                    <Col lg={3} className="mb-5 mb-lg-0">
                        <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                            <InputGroup className="mb-4">
                                <InputGroup.Text style={{ background: 'var(--bg-card)', borderColor: 'var(--border-subtle)', color: 'var(--text-secondary)' }}>
                                    <i className="bi bi-search"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Search tutorials..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        background: 'var(--bg-card)',
                                        borderColor: 'var(--border-subtle)',
                                        color: 'var(--text-primary)'
                                    }}
                                    className="shadow-none"
                                />
                            </InputGroup>

                            <div
                                className="custom-scrollbar overflow-auto"
                                style={{
                                    maxHeight: 'calc(100vh - 200px)',
                                    paddingRight: '10px'
                                }}
                            >
                                {filteredData.map((cat, idx) => (
                                    <div key={idx} className="mb-4">
                                        <h6
                                            className="text-uppercase fw-bold mb-3 d-flex align-items-center gap-2"
                                            style={{ color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '1px' }}
                                        >
                                            <i className={`bi ${cat.icon}`}></i> {cat.category}
                                        </h6>
                                        <div className="d-flex flex-column gap-1">
                                            {cat.items.map(item => (
                                                <motion.button
                                                    key={item.id}
                                                    whileHover={{ x: 5 }}
                                                    onClick={() => setSelectedId(item.id)}
                                                    className={`btn text-start border-0 py-2 px-3 rounded-2 d-flex align-items-center gap-2 ${selectedId === item.id ? 'active' : ''}`}
                                                    style={{
                                                        background: selectedId === item.id ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                                        color: selectedId === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                                                        transition: 'all 0.2s'
                                                    }}
                                                >
                                                    <div style={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        background: selectedId === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                                        opacity: 0.5
                                                    }}></div>
                                                    <span className="text-truncate">{item.title}</span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>

                    {/* Content Area */}
                    <Col lg={9}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="p-4 p-md-5 rounded-4 border"
                                style={{
                                    background: 'var(--bg-card)',
                                    borderColor: 'var(--border-subtle)',
                                    minHeight: '600px'
                                }}
                            >
                                <div className="d-flex align-items-center gap-2 text-primary mb-2 small text-uppercase fw-bold">
                                    <i className="bi bi-bookmark-fill"></i>
                                    {activeItem.category}
                                </div>
                                <h2 className="display-6 fw-bold text-white mb-3">{activeItem.title}</h2>
                                <p className="lead border-bottom pb-4 mb-4" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' }}>
                                    {activeItem.desc}
                                </p>

                                {renderContent()}

                            </motion.div>
                        </AnimatePresence>
                    </Col>
                </Row>
            </Container>
        </SectionWrapper>
    );
}
