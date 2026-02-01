/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const MessageBubble = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`d-flex mb-3 ${isBot ? 'justify-content-start' : 'justify-content-end'}`}
        >
            <div
                className={`p-3 rounded-4 shadow-sm ${isBot
                        ? 'bg-dark text-white border border-secondary'
                        : 'bg-primary text-white'
                    }`}
                style={{
                    maxWidth: '80%',
                    borderBottomLeftRadius: isBot ? '4px' : '1rem',
                    borderBottomRightRadius: isBot ? '1rem' : '4px',
                    background: isBot ? 'var(--bg-card)' : 'var(--primary)',
                    borderColor: isBot ? 'var(--border-subtle)' : 'transparent'
                }}
            >
                <p className="mb-0 small">{message.text}</p>

                {/* Render custom content like Calendar if present */}
                {message.content && (
                    <div className="mt-2">
                        {message.content}
                    </div>
                )}

                <div className="text-end mt-1" style={{ fontSize: '0.65rem', opacity: 0.7 }}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </motion.div>
    );
};

export default MessageBubble;
