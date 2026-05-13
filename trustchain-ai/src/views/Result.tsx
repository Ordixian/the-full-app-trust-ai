import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const result = location.state?.data;

  if (!result) return <div className="p-20 text-center">No forensic data found.</div>;

  const { analysis } = result;

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <Link to="/verify" className="flex items-center gap-2 text-on-surface-variant mb-8 hover:text-on-surface">
        <ArrowLeft size={16} /> Back to Scanner
      </Link>

      <div className="glass-panel rounded-3xl p-12 border border-on-surface/10 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-on-surface-variant mb-4">Trust Score Analysis</p>
        
        <div className={`text-8xl font-black mb-6 ${analysis.score > 70 ? 'text-teal' : 'text-red'}`}>
          {analysis.score}%
        </div>

        <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase tracking-wider mb-8 ${analysis.score > 70 ? 'bg-teal/10 text-teal' : 'bg-red/10 text-red'}`}>
          {analysis.score > 70 ? <ShieldCheck size={18} /> : <AlertTriangle size={18} />}
          {analysis.verdict}
        </div>

        <div className="space-y-4 text-left mt-10">
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest border-b border-on-surface/10 pb-2">Risk Flags</h3>
          {analysis.flags.length > 0 ? (
            analysis.flags.map((flag: string, i: number) => (
              <div key={i} className="bg-red/5 border-l-4 border-red p-4 text-sm text-on-surface">
                ⚠ {flag}
              </div>
            ))
          ) : (
            <p className="text-sm text-teal">✓ No critical risk flags detected in this node.</p>
          )}
        </div>
      </div>
    </div>
  );
}
