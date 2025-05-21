import { Activity, Check, FileWarning, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardPreview() {
  const [score, setScore] = useState(0);
  const targetScore = 78;
  
  // Animate the score counter
  useEffect(() => {
    if (score < targetScore) {
      const timer = setTimeout(() => {
        setScore(prev => Math.min(prev + 1, targetScore));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [score]);
  
  return (
    <div className="bg-[#0A1A2F] rounded-xl shadow-2xl p-6 w-full max-w-md border border-[#1E3A5F] transition-all duration-300 hover:shadow-cyan-500/10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Tech Health Score</h3>
          <p className="text-[#D1D5DB] text-sm">Comprehensive analysis</p>
        </div>
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#1E3A5F" 
              strokeWidth="8" 
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#22D3EE" 
              strokeWidth="8" 
              strokeDasharray={`${2 * Math.PI * 40 * score/100} ${2 * Math.PI * 40 * (100-score)/100}`}
              strokeDashoffset={2 * Math.PI * 40 * 25/100} 
              transform="rotate(-90 50 50)"
              className="transition-all duration-500"
            />
            <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-xl font-bold fill-white">
              {score}
            </text>
          </svg>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start bg-[#12263A] rounded-lg p-3 hover:bg-[#12263A]/80 transition-colors">
          <FileWarning className="text-amber-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-white">Outdated Frontend (React 16.8)</div>
            <div className="text-xs text-[#D1D5DB]">Severity: Medium</div>
          </div>
        </div>
        
        <div className="flex items-start bg-[#12263A] rounded-lg p-3 hover:bg-[#12263A]/80 transition-colors">
          <FileWarning className="text-red-400 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-white">No CD Signals Detected</div>
            <div className="text-xs text-[#D1D5DB]">Severity: High</div>
          </div>
        </div>
        
        <div className="flex items-start bg-[#12263A] rounded-lg p-3 hover:bg-[#12263A]/80 transition-colors">
          <div className="text-[#22D3EE] mr-3 mt-0.5 opacity-50">+1</div>
          <div className="text-xs text-[#D1D5DB] italic">More issue hidden...</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#12263A] rounded-lg p-3 flex items-center">
          <Shield className="text-green-400 mr-2 h-4 w-4" />
          <span className="text-xs text-[#D1D5DB]">HTTPS + CSP secure</span>
        </div>
        <div className="bg-[#12263A] rounded-lg p-3 flex flex-col">
          <div className="text-xs text-[#D1D5DB] mb-1">Stack detected</div>
          <div className="flex space-x-1 items-center">
            <div className="bg-[#1E3A5F] w-5 h-5 rounded-full"></div>
            <div className="bg-[#1E3A5F] w-5 h-5 rounded-full"></div>
            <div className="bg-[#1E3A5F] w-5 h-5 rounded-full"></div>
            <div className="bg-[#1E3A5F] w-5 h-5 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#12263A] rounded-lg p-3 flex items-start mb-4">
        <Activity className="text-[#22D3EE] mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
        <div className="text-xs text-[#D1D5DB]">
          No critical risks. Proceed with caution on scalability. <span className="text-white">Advisor-reviewed.</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Check className="h-4 w-4 text-green-400 mr-1" />
          <span className="text-xs text-[#D1D5DB]">LP-ready report included</span>
        </div>
        <div className="text-xs text-white bg-[#22D3EE]/20 px-2 py-1 rounded-full">
          PDF Report
        </div>
      </div>
    </div>
  );
}