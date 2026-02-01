import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import SectionWrapper from '../components/SectionWrapper';
import '../App.css';

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Ready to start a project? Book a discovery call directly via my calendar."
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <motion.div
            className="contact-card p-0 mt-3 position-relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            style={{ borderRadius: '1rem', minHeight: '700px', background: 'var(--bg-card)' }}
          >
            <div className="w-100 h-100">
              <InlineWidget
                url="https://calendly.com/dangreyconcepcion312"
                styles={{ height: '700px', width: '100%' }}
                pageSettings={{
                  backgroundColor: '1e1e1e', // Match dark theme
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '3b82f6', // Bootstrap primary blue
                  textColor: 'ffffff'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        /* Override Calendly iframe styling issues if any */
        .calendly-inline-widget {
             min-width: 320px;
             height: 700px;
             width: 100%;
        }
      `}</style>
    </SectionWrapper>
  );
}
