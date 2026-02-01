/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';

const CalendarWidget = ({ onDateTimeSelect }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [mode, setMode] = useState('date'); // 'date' or 'time'

    // Generate available times (Mock logic)
    const times = [
        "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setMode('time');
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        onDateTimeSelect({ date: selectedDate, time });
    };

    return (
        <div className="p-2 bg-dark rounded border border-secondary">
            {mode === 'date' ? (
                <div className="calendar-wrapper">
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        minDate={new Date()}
                        calendarClassName="bg-transparent border-0 text-white"
                        dayClassName={() => "text-white hover-bg-primary rounded-circle"}
                    />
                    <style>{`
            .react-datepicker { width: 100% !important; font-size: 0.8rem !important; background-color: var(--bg-card) !important; border: none !important; font-family: inherit !important; }
            .react-datepicker__month-container { width: 100% !important; }
            .react-datepicker__header { background-color: transparent !important; border-bottom: 1px solid var(--border-subtle) !important; padding-top: 5px !important; }
            .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header { color: white !important; font-size: 0.9rem !important; }
            .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name { width: 1.9rem !important; line-height: 1.9rem !important; margin: 0.1rem !important; }
            .react-datepicker__day { color: #e2e8f0 !important; }
            .react-datepicker__day:hover { background-color: var(--primary) !important; color: white !important; }
            .react-datepicker__day--selected { background-color: var(--primary) !important; color: white !important; }
            .react-datepicker__day--keyboard-selected { background-color: rgba(59, 130, 246, 0.5) !important; }
            .react-datepicker__day--disabled { color: #475569 !important; }
            .react-datepicker__navigation { top: 8px !important; }
            .react-datepicker__navigation-icon::before { border-color: white !important; }
          `}</style>
                </div>
            ) : (
                <div className="time-selection text-center">
                    <h6 className="text-white mb-3">
                        {selectedDate.toLocaleDateString()}
                    </h6>
                    <div className="d-grid gap-2" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        {times.map((time) => (
                            <motion.button
                                key={time}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleTimeSelect(time)}
                                className={`btn btn-sm text-white border-secondary ${selectedTime === time ? 'btn-primary' : 'btn-outline-primary'}`}
                            >
                                {time}
                            </motion.button>
                        ))}
                    </div>
                    <button
                        className="btn btn-link btn-sm text-secondary mt-2 text-decoration-none"
                        onClick={() => setMode('date')}
                    >
                        <i className="bi bi-arrow-left me-1"></i> Back to Date
                    </button>
                </div>
            )}
        </div>
    );
};

export default CalendarWidget;
