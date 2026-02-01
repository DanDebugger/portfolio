/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MessageBubble from './MessageBubble';
import { PopupWidget } from "react-calendly";
import { BOT_STEPS, INITIAL_MESSAGES, BOT_OPTIONS } from './BotLogic';

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [currentStep, setCurrentStep] = useState(BOT_STEPS.SHOW_OPTIONS);
    const [emailInput, setEmailInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addMessage = (text, sender = 'bot', content = null) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            text,
            sender,
            content,
            timestamp: new Date()
        }]);
    };

    const handleOptionClick = (option) => {
        addMessage(option.label, 'user');
        processTopLevelOption(option.action);
    };

    const processTopLevelOption = (action) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            switch (action) {
                case BOT_STEPS.BOOK_CALENDAR:
                    addMessage("No problem! Click the button below to schedule your call via access to my calendar:", 'bot',
                        <div className="text-center mt-2">
                            <PopupWidget
                                url="https://calendly.com/dangreyconcepcion312"
                                rootElement={document.getElementById("root")}
                                text="📅 Open Calendar"
                                textColor="#ffffff"
                                color="var(--primary)"
                            />
                        </div>
                    );
                    setCurrentStep(BOT_STEPS.SHOW_OPTIONS);
                    // End flow or allow restart
                    break;
                case BOT_STEPS.PROJECT_ENQUIRY:
                    addMessage("That's great! Could you describe your project in a few words below?", 'bot');
                    setCurrentStep(BOT_STEPS.PROJECT_ENQUIRY);
                    break;
                case BOT_STEPS.JUST_HI:
                    addMessage("Hello again! Feel free to look around my portfolio. 😊", 'bot');
                    setCurrentStep(BOT_STEPS.END);
                    break;
                default:
                    break;
            }
        }, 1000);
    };

    const handleTextInput = (e) => {
        e.preventDefault();
        if (!emailInput.trim()) return;

        const text = emailInput;
        addMessage(text, 'user');
        setEmailInput('');

        if (currentStep === BOT_STEPS.PROJECT_ENQUIRY) {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                addMessage("Thanks for sharing! I've noted that down. Would you like to schedule a call to discuss it further?", 'bot');
                setCurrentStep(BOT_STEPS.BOOK_CALENDAR); // Re-use start flow or booking flow
            }, 1500);
        }
    }

    return (
        <div className="d-flex flex-column h-100">
            {/* Header */}
            <div className="p-3 border-bottom border-secondary d-flex justify-content-between align-items-center bg-dark rounded-top-4">
                <div className="d-flex align-items-center gap-2">
                    <div className="position-relative">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: 40, height: 40 }}>
                            DB
                        </div>
                        <div className="position-absolute bottom-0 end-0 bg-success border border-dark rounded-circle" style={{ width: 10, height: 10 }}></div>
                    </div>
                    <div>
                        <h6 className="mb-0 text-white">DanBot</h6>
                        <small className="text-secondary" style={{ fontSize: '0.75rem' }}>Usually replies instantly</small>
                    </div>
                </div>
                <button onClick={onClose} className="btn btn-sm btn-icon text-white-50 hover-text-white">
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-grow-1 overflow-auto p-3 custom-scrollbar" style={{ background: 'var(--bg-body)' }}>
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex mb-3 justify-content-start">
                        <div className="bg-dark p-3 rounded-4 border border-secondary text-secondary small">
                            <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-dark border-top border-secondary rounded-bottom-4">
                {currentStep === BOT_STEPS.SHOW_OPTIONS || currentStep === BOT_STEPS.END ? (
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                        {BOT_OPTIONS.map(opt => (
                            <button
                                key={opt.id}
                                onClick={() => handleOptionClick(opt)}
                                className="btn btn-outline-primary btn-sm rounded-pill px-3"
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                ) : currentStep === BOT_STEPS.PROJECT_ENQUIRY ? (
                    <form onSubmit={handleTextInput} className="d-flex gap-2">
                        <input
                            type="text"
                            className="form-control form-control-sm bg-black text-white border-secondary"
                            placeholder="Type your message..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            autoFocus
                        />
                        <button type="submit" className="btn btn-primary btn-sm">
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </form>
                ) : (
                    <div className="text-center text-muted small">
                        Please select an option above
                    </div>
                )}
            </div>
            <style>{`
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
      `}</style>
        </div>
    );
};

export default ChatWindow;
