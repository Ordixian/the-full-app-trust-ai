import { CheckCircle, Info, ShieldCheck, ChevronRight, ArrowRight, Download, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Result() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-12 py-12">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs font-bold">
            <span>Products</span>
            <ChevronRight size={14} />
            <span>Verification</span>
            <ChevronRight size={14} />
            <span className="text-secondary">#TC-882910</span>
          </nav>
          <h1 className="text-3xl font-bold text-on-surface leading-none">Verification Result</h1>
        </div>
        <div className="flex items-center gap-2 bg-on-tertiary-container text-white px-4 py-3 rounded-xl shadow-lg shadow-on-tertiary-container/20">
          <CheckCircle size={20} fill="currentColor" className="text-on-tertiary-container bg-white rounded-full" />
          <span className="text-sm font-bold">Likely Genuine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Trust Score Hero Card */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 glass-panel rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden border-t-4 border-on-tertiary-container"
        >
          <div className="absolute top-4 right-4">
            <ShieldCheck size={64} className="text-on-tertiary-container opacity-5" />
          </div>
          <span className="text-xs font-bold text-on-surface-variant mb-6 uppercase tracking-widest">Trust Score Index</span>
          
          <div className="relative flex items-center justify-center mb-6">
            <svg className="w-44 h-44 transform -rotate-90">
              <circle 
                className="text-surface-container-high" 
                cx="88" cy="88" r="80" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="12" 
              />
              <circle 
                className="text-on-tertiary-container" 
                cx="88" cy="88" r="80" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="12" 
                strokeDasharray="502" 
                strokeDashoffset="90" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-on-surface">82</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mt-1">/ 100</span>
            </div>
          </div>

          <div className="bg-on-tertiary-container/10 text-on-tertiary-container px-6 py-2 rounded-full font-bold text-xs flex items-center gap-2">
            <ShieldCheck size={16} />
            Low Risk Profile
          </div>
          <p className="mt-8 text-on-surface-variant text-sm font-medium leading-relaxed">
            Our AI analyzed 47 data points across the supply chain to confirm authenticity.
          </p>
        </motion.div>

        {/* Right Content */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex-grow"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <CheckCircle size={20} className="text-secondary" />
              Risk Flags Analysis
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Label Integrity', desc: 'Cryptographic seal is intact and matches the global register.', icon: <CheckCircle /> },
                { title: 'Vendor History', desc: 'Merchant has 98% positive verification rate over 24 months.', icon: <CheckCircle /> },
                { title: 'Geographic Consistency', desc: 'Scan location aligns with the expected retail distribution zone.', icon: <CheckCircle /> },
                { title: 'Packaging Version', desc: 'Minor design variant detected (Seasonal Edition 2024).', icon: <Info />, isWarning: true },
              ].map((flag, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-on-surface/5">
                  <div className={`p-2 rounded-full ${flag.isWarning ? 'bg-secondary/10 text-secondary' : 'bg-on-tertiary-container/10 text-on-tertiary-container'}`}>
                    {flag.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">{flag.title}</h4>
                    <p className="text-xs text-on-surface-variant font-medium leading-relaxed mt-1">{flag.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-24 h-24 rounded-xl bg-surface-container overflow-hidden border border-on-surface/10 shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhKQ1tgwjQYOElYXJTmsdHRZs4FZlfmx0kpO_biiA5oWRiLTyMFGckxdjFkugIwcfS20zYBfzaRp0_GXWVPq18fJ-7PfJq4FQjDWk_opcDdzlt3L53V6HpOPwo0akzY0PwE_hZHnC_CU5F1wemisgDS0trTJQCk683muex3LnuThNdVrZzWlYFirPmkKJOgh_F3uTgigJ0gLWjCnlfUmD7ntldn3fGEhOoWUvz_IkJ1uBtBheQ4Uq20y0rsDHFVQCZ7DyQcpLkGfY" 
                className="w-full h-full object-cover"
                alt="Product"
              />
            </div>
            <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Product Name</span>
                <span className="text-sm font-bold text-on-surface">Astro-Z Pharma V2</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Batch ID</span>
                <span className="text-sm font-bold text-on-surface">NG-445-XP</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Expiry Date</span>
                <span className="text-sm font-bold text-on-surface">Oct 2026</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Origin</span>
                <span className="text-sm font-bold text-on-surface">Lagos, NG</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Action Section */}
      <div className="mt-16 flex flex-col items-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="max-w-2xl w-full text-center space-y-8 bg-surface-container-highest/30 p-12 rounded-3xl border border-on-surface/5"
        >
          <div className="flex justify-center">
             <div className="relative">
               <div className="absolute -inset-6 bg-on-tertiary-container/10 rounded-full blur-2xl" />
               <ShieldCheck size={56} className="text-on-tertiary-container relative" fill="currentColor" />
             </div>
          </div>
          <h2 className="text-2xl font-bold text-on-surface">Secure Your Purchase</h2>
          <p className="text-base text-on-surface-variant font-medium">The product is verified and the vendor is trusted. Proceed to complete your transaction with guaranteed protection via Squad by GTCO.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-on-tertiary-container text-white px-10 h-14 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-on-tertiary-container/20 transition-all group"
            >
              Proceed to Verified Payment via Squad
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 h-14 rounded-2xl font-bold border-2 border-on-surface/10 text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download Report (PDF)
            </motion.button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-on-surface-variant opacity-60">
            <Lock size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted Verification Journey</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
