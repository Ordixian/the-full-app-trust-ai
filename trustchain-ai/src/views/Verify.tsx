import { FormEvent } from 'react';
import { Camera, Package, ShieldCheck, CreditCard, Info, Sparkles, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
  const navigate = useNavigate();
  
  const handleRunVerification = (e: FormEvent) => {
    e.preventDefault();
    navigate('/result');
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-12 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-on-surface mb-2">Product & Vendor Intelligence</h1>
        <p className="text-on-surface-variant max-w-2xl text-base">
          Ensure the integrity of your supply chain. Our AI cross-references global databases and NAFDAC registries in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Side: Product Verification */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-on-tertiary-container" />
          <div className="flex items-center gap-3 mb-10">
            <Package className="text-on-tertiary-container" />
            <h2 className="text-2xl font-bold text-on-surface">Product Verification</h2>
          </div>

          <form className="space-y-8">
            <div className="group border-2 border-dashed border-on-surface/10 rounded-2xl p-16 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer">
              <Camera size={48} className="text-on-surface-variant mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-on-surface">Upload Product Image</p>
              <p className="text-xs text-on-surface-variant mt-1">PNG, JPG up to 10MB</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Product Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Paracetamol 500mg"
                  className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface">Batch Number</label>
                  <input 
                    type="text" 
                    placeholder="BN-99283-X"
                    className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface">NAFDAC Number</label>
                  <input 
                    type="text" 
                    placeholder="A4-1234L"
                    className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="mt-8 p-4 bg-on-tertiary-container/5 rounded-xl flex items-center gap-4 border border-on-tertiary-container/10">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-on-tertiary-container"></span>
            </div>
            <p className="text-xs font-bold text-on-tertiary-container">TrustChain AI is ready to analyze labels and barcodes.</p>
          </div>
        </motion.section>

        {/* Right Side: Vendor Verification */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="text-secondary" />
            <h2 className="text-2xl font-bold text-on-surface">Vendor Verification</h2>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Vendor/Business Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Lagos Wholesalers Ltd"
                  className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Email Address</label>
                <input 
                  type="email" 
                  placeholder="contact@vendor.com"
                  className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+234 800 000 0000"
                  className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="p-6 bg-surface-container rounded-2xl border border-on-surface/5">
                <div className="flex items-center gap-2 mb-4">
                    <CreditCard size={18} className="text-on-surface-variant" />
                    <span className="text-sm font-bold text-on-surface">Payment Details (Optional)</span>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none">Account Number</label>
                    <input 
                      type="text" 
                      placeholder="0123456789"
                      className="w-full h-12 px-4 rounded-xl border border-on-surface/10 bg-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>

            <div className="p-6 bg-white border border-on-surface/10 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-on-surface">Entity Trust Score</p>
                        <p className="text-xs text-on-surface-variant">Calculated upon submission</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-error/10 text-error rounded-full">
                    <X size={14} />
                    <span className="text-xs font-bold">High Risk</span>
                </div>
            </div>
          </form>
        </motion.section>
      </div>

      <div className="flex flex-col items-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRunVerification}
          className="bg-on-tertiary-container text-white px-12 h-14 rounded-xl font-bold flex items-center gap-3 shadow-xl hover:shadow-on-tertiary-container/20 transition-all"
        >
          <Sparkles size={20} fill="currentColor" />
          Run AI Verification
        </motion.button>
        <p className="text-sm text-on-surface-variant font-medium flex items-center gap-2">
            <Info size={16} className="text-secondary" />
            Verification usually takes 3-5 seconds to scan all global registries.
        </p>
      </div>
    </div>
  );
}
