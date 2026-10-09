import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Mail, Phone, Building, Calendar, DollarSign, Database, Tag } from 'lucide-react';

export default function InquiriesDrawer({ isOpen, onClose }) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-[#0b1120] border-l border-white/10 shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <Database className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-bold text-white">Client Leads & Inquiries</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Stored dynamically in Node.js backend ({inquiries.length} records)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Refresh Leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Mail className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-400 text-xs">No client inquiries received yet.</p>
              <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                Any consultation request or instant cost estimator submission from prospective clients will appear here automatically.
              </p>
            </div>
          ) : (
            inquiries.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-3 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-cyan-400 text-[11px]">
                    {item.id}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    item.type === 'CONSULTATION_INQUIRY' 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : item.type === 'INSTANT_QUOTE'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Name / Client</span>
                    <span className="font-semibold text-white">{item.name || item.company || 'Visitor'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Work Email</span>
                    <span className="text-cyan-300">{item.email}</span>
                  </div>
                </div>

                {item.service && (
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Service Requested</span>
                    <span className="text-slate-200">{item.service}</span>
                  </div>
                )}

                {item.estimatedRange && (
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-emerald-400">
                    Quote: {item.estimatedRange} ({item.estimatedTimeline})
                  </div>
                )}

                {item.message && (
                  <div className="p-2.5 rounded bg-slate-950/60 border border-slate-800/60 text-slate-300 text-[11px]">
                    "{item.message}"
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{new Date(item.createdAt).toLocaleString()}</span>
                  <span className="text-emerald-400">STATUS: ACTIVE LEAD</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
