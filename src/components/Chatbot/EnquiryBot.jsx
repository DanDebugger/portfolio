/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';

const EnquiryBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 99999 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-3 rounded-4 shadow-lg overflow-hidden border border-secondary"
                        style={{
                            width: '350px',
                            height: '500px',
                            background: 'var(--bg-card)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        <ChatWindow onClose={() => setIsOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-white border-opacity-25"
                style={{ width: 60, height: 60 }}
            >
                {isOpen ? (
                    <i className="bi bi-x-lg fs-4"></i>
                ) : (
                    <i className="bi bi-chat-dots-fill fs-4"></i>
                )}
            </motion.button>
        </div>
    );
};

export default EnquiryBot;
