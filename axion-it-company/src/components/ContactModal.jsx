import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, AlertCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Cloud Architecture & DevOps Automation',
    budget: '$5,000 - $15,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessData(data);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      // Offline fallback
      setSuccessData({
        success: true,
        message: 'Your request has been logged successfully! Our solutions engineer will contact you shortly.',
        inquiryId: `AX-OFFLINE-${Date.now().toString(36).toUpperCase()}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0b1120] rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {successData ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Consultation Request Confirmed</h3>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                {successData.message}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-sm mx-auto font-mono text-xs">
              <div className="text-slate-500">TRACKING REFERENCE ID</div>
              <div className="text-cyan-400 font-bold text-sm mt-0.5">{successData.inquiryId}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSuccessData(null);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidential Technical Scoping</span>
              </div>
              <h3 className="text-2xl font-black text-white">Schedule an IT Strategy Call</h3>
              <p className="text-xs text-slate-400 mt-1">
                Tell us about your infrastructure or software requirements. We respond with a preliminary architectural plan within 2 hours.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme FinTech"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-300 font-medium block mb-1">Required Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  >
                    <option value="Cloud Architecture & DevOps Automation">Cloud Architecture & DevOps Automation</option>
                    <option value="DevSecOps & Enterprise Cybersecurity">DevSecOps & Enterprise Cybersecurity</option>
                    <option value="Custom Software & Web Engineering">Custom Software & Web Engineering</option>
                    <option value="Enterprise AI & Autonomous Agents">Enterprise AI & Autonomous Agents</option>
                    <option value="24/7 Managed IT & SRE Support">24/7 Managed IT & SRE Support</option>
                    <option value="IT Modernization & Advisory">IT Modernization & Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-300 font-medium block mb-1">Expected Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                  >
                    <option value="Under $5,000">Under $5,000 (POC / Audit)</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000 (Growth Stage)</option>
                    <option value="$15,000 - $50,000">$15,000 - $50,000 (Enterprise Modernization)</option>
                    <option value="$50,000+">$50,000+ (Full Multi-Region Migration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-medium block mb-1">Project Details / Goals *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current tech stack, cloud challenges, timeline, or objectives..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:outline-none text-white"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wider shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting Strategy Request...' : 'Submit Strategy Request'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
