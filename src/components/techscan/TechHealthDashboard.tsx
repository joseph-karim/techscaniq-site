import { ArrowRight, Check, FileWarning, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { InvestmentMemoModal } from "./InvestmentMemoModal";

type RedFlag = {
  risk: string;
  severity: "Low" | "Medium" | "High";
  recommendation: string;
};

type ComplianceCheck = {
  label: string;
  status: "pass" | "warn" | "fail";
};

type TechHealthDashboardProps = {
  score?: number;
  nextSteps?: string;
  redFlags?: RedFlag[];
  stack?: string[];
  compliance?: ComplianceCheck[];
  summary?: string;
  ctaText?: string;
  className?: string;
};

const defaultRedFlags: RedFlag[] = [
  {
    risk: "Outdated Frontend React 16.3 vs 18.2",
    severity: "Medium",
    recommendation: "Ask about upgrade plans"
  },
  {
    risk: "No CD signals",
    severity: "High",
    recommendation: "Probe on DevOps maturity"
  },
  {
    risk: "Manual error tracking",
    severity: "Medium",
    recommendation: "Ask about monitoring stack"
  }
];

const defaultStack = ["React", "Node.js", "MongoDB", "Vercel"];
const defaultCompliance = [
  { label: "SSL, HTTPS enforced", status: "pass" },
  { label: "Headers secure (CSP, HSTS present)", status: "pass" },
  { label: "No exposed env vars", status: "warn" }
];

export function TechHealthDashboard({
  score = 7.8,
  nextSteps = "Ask founder about code modularity and test coverage",
  redFlags = defaultRedFlags,
  stack = defaultStack,
  compliance = defaultCompliance,
  summary = "SaasCo demonstrates above-average technical hygiene and...",
  ctaText = "View Full Investment Memo",
  className = ""
}: TechHealthDashboardProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [memoModalOpen, setMemoModalOpen] = useState(false);
  
  // Animate the score on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(0);
      const interval = setInterval(() => {
        setAnimatedScore(prev => {
          if (prev >= score) {
            clearInterval(interval);
            return score;
          }
          return prev + 0.1;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [score]);

  const getSeverityColor = (severity: "Low" | "Medium" | "High") => {
    switch (severity) {
      case "Low":
        return "text-blue-400";
      case "Medium":
        return "text-amber-400";
      case "High":
        return "text-red-400";
    }
  };

  const getSeverityBgColor = (severity: "Low" | "Medium" | "High") => {
    switch (severity) {
      case "Low":
        return "bg-blue-400/20";
      case "Medium":
        return "bg-amber-400/20";
      case "High":
        return "bg-red-400/20";
    }
  };

  const getStatusIcon = (status: "pass" | "warn" | "fail") => {
    switch (status) {
      case "pass":
        return <Check className="h-4 w-4 text-green-400" />;
      case "warn":
        return <AlertTriangle className="h-4 w-4 text-amber-400" />;
      case "fail":
        return <FileWarning className="h-4 w-4 text-red-400" />;
    }
  };

  return (
    <>
      <div className={`bg-[#0A1A2F] rounded-xl border border-[#1E3A5F] text-white shadow-xl w-full max-w-3xl ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Score Card */}
            <div className="border-b border-[#1E3A5F] pb-4">
              <h3 className="text-2xl font-bold py-4 px-3 rounded-t-lg bg-[#1E3A5F]/20">
                Tech Health Score
              </h3>
              <div className="pt-4 px-2">
                <div className="flex items-center">
                  <div className="w-32 h-32 relative">
                    <div className="absolute inset-0">
                      <CircularProgressbar
                        value={animatedScore * 10}
                        maxValue={10}
                        text={`${animatedScore.toFixed(1)}`}
                        circleRatio={0.75}
                        styles={buildStyles({
                          rotation: 0.625,
                          strokeLinecap: 'round',
                          textSize: '24px',
                          pathTransitionDuration: 0.5,
                          pathColor: `url(#scoreGradient)`,
                          textColor: '#ffffff',
                          trailColor: '#1E3A5F',
                        })}
                      />
                    </div>
                    {/* SVG Filter for gradient - overlaid on top of CircularProgressbar */}
                    <svg style={{ height: 0, width: 0, position: 'absolute' }}>
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF4500" />
                          <stop offset="50%" stopColor="#FFBA08" />
                          <stop offset="100%" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg text-gray-300">Health {score}/10</p>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <ArrowRight className="text-[#22D3EE] h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{nextSteps}</p>
                </div>
              </div>
            </div>
            
            {/* Stack Overview */}
            <div className="border-b border-[#1E3A5F] pb-4">
              <h3 className="text-2xl font-bold py-4 px-3 bg-[#1E3A5F]/20">
                Stack Overview
              </h3>
              <div className="pt-4 px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {stack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-[#1E3A5F] px-3 py-1 rounded flex items-center"
                    >
                      <div className="h-4 w-4 rounded-full bg-[#22D3EE]/20 mr-2"></div>
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mt-4">
                  {compliance.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2">
                        {getStatusIcon(item.status)}
                      </div>
                      <span className="text-sm text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Red Flags */}
            <div className="border-b border-[#1E3A5F] pb-4">
              <h3 className="text-2xl font-bold py-4 px-3 rounded-t-lg bg-[#1E3A5F]/20">
                Red Flags & Risk Factors
              </h3>
              <div className="pt-4 px-2">
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-300 pb-2 border-b border-[#1E3A5F]">
                    <div>Risk</div>
                    <div>Severity</div>
                    <div>Recommendation</div>
                  </div>
                  
                  {redFlags.map((flag, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 text-sm py-3 border-b border-[#1E3A5F]/50 hover:bg-[#1E3A5F]/20 rounded transition-colors">
                      <div>{flag.risk}</div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs ${getSeverityBgColor(flag.severity)} ${getSeverityColor(flag.severity)}`}>
                          {flag.severity}
                        </span>
                      </div>
                      <div className="text-gray-300">{flag.recommendation}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Investment Memo */}
            <div className="border-b border-[#1E3A5F] pb-4">
              <h3 className="text-2xl font-bold py-4 px-3 bg-[#1E3A5F]/20">
                LP-Ready Investment Memo
              </h3>
              <div className="pt-4 px-2">
                <div className="bg-[#1E3A5F]/50 p-4 rounded-lg flex items-start">
                  <div className="bg-[#1E3A5F] p-3 rounded mr-4">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-300"
                    >
                      <path 
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M14 2V8H20" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M16 13H8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M16 17H8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M10 9H9H8" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-300 line-clamp-2">{summary}</p>
                    <button 
                      onClick={() => setMemoModalOpen(true)}
                      className="flex items-center mt-3 text-[#22D3EE] text-sm font-medium hover:underline"
                    >
                      {ctaText}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <InvestmentMemoModal open={memoModalOpen} onOpenChange={setMemoModalOpen} />
    </>
  );
}