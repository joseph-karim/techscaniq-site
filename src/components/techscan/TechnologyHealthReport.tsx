import { AlertTriangle } from "lucide-react";

type TechnologyHealthReportProps = {
  className?: string;
}

export function TechnologyHealthReport({ className }: TechnologyHealthReportProps) {
  return (
    <div className={`relative bg-[#1E3A5F] rounded-xl shadow-2xl p-6 max-w-md ${className}`}>
      <div className="absolute -right-4 -top-4 bg-[#22D3EE] rounded-full p-4">
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="pb-4 border-b border-[#00142c]">
        <h3 className="text-xl font-bold">Technology Health Report</h3>
        <p className="text-[#D1D5DB] text-sm">SaaSCo</p>
        <div className="flex justify-between items-center mt-3">
          <div className="text-xs text-[#D1D5DB]">Verdict: <span className="text-green-400">✅ No critical risks</span></div>
          <div className="text-xs text-[#D1D5DB]">Confidence: <span className="text-white font-medium">High</span></div>
        </div>
      </div>
      
      <div className="py-4">
        <div className="flex justify-between mb-2">
          <span className="text-[#D1D5DB]">Tech Health Score</span>
          <span className="font-bold text-[#22D3EE]">7.8/10</span>
        </div>
        <div className="mb-6">
          <div className="flex justify-between text-xs mb-1">
            <span>Poor</span>
            <span>Excellent</span>
          </div>
          <div className="bg-[#00142c] rounded-full h-2">
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
          </div>
        </div>
        
        <div className="space-y-3 mb-5">
          <div className="text-sm font-medium mb-2">Stack Overview</div>
          <div className="flex justify-between text-xs text-[#D1D5DB]">
            <span>Frontend:</span>
            <span>React 16.8, Bootstrap 4</span>
          </div>
          <div className="flex justify-between text-xs text-[#D1D5DB]">
            <span>Backend:</span>
            <span>Node.js, Express</span>
          </div>
          <div className="flex justify-between text-xs text-[#D1D5DB]">
            <span>Database:</span>
            <span>MongoDB</span>
          </div>
          <div className="flex justify-between text-xs text-[#D1D5DB]">
            <span>Hosting:</span>
            <span>Vercel + Cloudflare</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium mb-2">Top Concerns</div>
          <div className="bg-[#00142c]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start hover:bg-[#00142c]">
            <span className="text-amber-400 mr-2">⚠️</span>
            <span>Monolithic architecture may limit scaling</span>
          </div>
          <div className="bg-[#00142c]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start hover:bg-[#00142c]">
            <span className="text-amber-400 mr-2">⚠️</span>
            <span>Outdated React version (16.8 vs current 18.2)</span>
          </div>
          <div className="bg-[#00142c]/80 p-2 rounded text-xs text-[#D1D5DB] flex items-start hover:bg-[#00142c]">
            <span className="text-amber-400 mr-2">⚠️</span>
            <span>No continuous deployment evidence</span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#00142c]/50 p-3 rounded-lg mt-4 text-xs text-center text-[#D1D5DB]">
        Reviewed by Senior Technical Advisor on 05/15/2025
      </div>
    </div>
  );
}