export const BOT_STEPS = {
    START: 'START',
    SHOW_OPTIONS: 'SHOW_OPTIONS',
    BOOK_CALENDAR: 'BOOK_CALENDAR',
    SELECT_TIME: 'SELECT_TIME',
    ASK_EMAIL: 'ASK_EMAIL',
    CONFIRM_BOOKING: 'CONFIRM_BOOKING',
    PROJECT_ENQUIRY: 'PROJECT_ENQUIRY',
    JUST_HI: 'JUST_HI',
    END: 'END'
};

export const INITIAL_MESSAGES = [
    {
        id: 1,
        text: "Hi there! 👋 I'm Dan's virtual assistant.",
        sender: 'bot',
        timestamp: new Date()
    },
    {
        id: 2,
        text: "How can I help you today?",
        sender: 'bot',
        timestamp: new Date()
    }
];

export const BOT_OPTIONS = [
    { id: 'book', label: '📅 Book a Call', action: BOT_STEPS.BOOK_CALENDAR },
    { id: 'project', label: '💼 Project Enquiry', action: BOT_STEPS.PROJECT_ENQUIRY },
    { id: 'hi', label: '👋 Just saying hi', action: BOT_STEPS.JUST_HI },
];
