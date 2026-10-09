import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveStatusWidget from './components/LiveStatusWidget';
import Services from './components/Services';
import CostEstimator from './components/CostEstimator';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import ContactModal from './components/ContactModal';
import InquiriesDrawer from './components/InquiriesDrawer';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isInquiriesOpen, setIsInquiriesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenContact = (serviceName = '') => {
    setSelectedService(serviceName || 'General Consultation');
    setIsContactOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation */}
      <Navbar 
        onOpenContact={handleOpenContact}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
        onOpenEstimator={handleScrollToEstimator}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenContact={handleOpenContact}
          onOpenEstimator={handleScrollToEstimator}
        />
        
        {/* Axion Live Telemetry & Monitoring Showcase */}
        <LiveStatusWidget />

        {/* Services & Core Capabilities */}
        <Services onSelectService={handleOpenContact} />

        {/* Interactive Cost & Timeline Estimator */}
        <CostEstimator onBookWithEstimate={handleOpenContact} />

        {/* Enterprise Client Case Studies */}
        <CaseStudies onSelectCase={(title) => handleOpenContact(`Case Study Inquiry: ${title}`)} />

        {/* Tech Stack & Tooling Ecosystem */}
        <TechStack />

        {/* Client Reviews & Industry Certifications */}
        <Testimonials />

        {/* Careers & Engineering Roles */}
        <Careers onApplyRole={(role) => handleOpenContact(`Job Application: ${role}`)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact / Consultation Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={selectedService}
      />

      {/* Admin / Client Leads Viewer Drawer */}
      <InquiriesDrawer 
        isOpen={isInquiriesOpen}
        onClose={() => setIsInquiriesOpen(false)}
      />

    </div>
  );
}
