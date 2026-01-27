import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function AllTestimonials() {
    return (
        <SectionWrapper
            id="all-testimonials"
            title="What People Say"
            subtitle="Kind words from clients and colleagues I've had the pleasure to work with."
        >
            <div className="row g-4">
                {testimonials.map((t) => (
                    <div key={t.id} className="col-md-6 col-lg-4 d-flex justify-content-center">
                        <TestimonialCard t={t} />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
