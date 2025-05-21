import { useState } from 'react'
import { ChevronDown, ChevronUp, PackageCheck, Network, GitBranch, Server, AlertCircle } from 'lucide-react'

type RiskReversalDetailTabProps = {
  title: string
  riskLevel: 'low' | 'moderate' | 'high' | 'critical'
  emoji: string
  className?: string
}

export function RiskReversalDetailTab({
  title,
  riskLevel,
  emoji,
  className,
}: RiskReversalDetailTabProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-green-400'
      case 'moderate':
        return 'text-amber-400'
      case 'high':
        return 'text-orange-500'
      case 'critical':
        return 'text-red-500'
      default:
        return 'text-amber-400'
    }
  }

  return (
    <div className={`bg-[#12263A] rounded-lg transition-all overflow-hidden ${className}`}>
      <div 
        className="p-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className="text-xl mr-2">{emoji}</span>
          <h4 className="font-bold text-white">{title}</h4>
        </div>
        <div className="flex items-center">
          <span className={`mr-4 text-sm ${getRiskColor(riskLevel)}`}>
            Summary Verdict: {emoji} {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} risk — suitable for current traction, but limited for scale.
          </span>
          <button className="text-gray-400 hover:text-white transition-colors">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="overflow-hidden transition-all duration-300 animate-in fade-in-0" style={{ animationDuration: '300ms' }}>
          <div className="p-4 space-y-6 bg-[#12263A]">
            {/* Code Structure & Modularity */}
            <div className="rounded-lg bg-[#1E3A5F] p-4">
              <div className="flex items-center mb-3">
                <PackageCheck className="h-5 w-5 text-[#22D3EE] mr-2" />
                <h5 className="font-semibold text-white">🧱 Code Structure & Modularity</h5>
              </div>
              <ul className="space-y-2 text-[#D1D5DB] text-sm pl-7">
                <li className="list-disc">Monolithic architecture (single JS bundle, no modular loading)</li>
                <li className="list-disc">No microservices or containerization</li>
                <li className="list-disc">Limited ability to scale features independently</li>
              </ul>
            </div>

            {/* API Design & Documentation */}
            <div className="rounded-lg bg-[#1E3A5F] p-4">
              <div className="flex items-center mb-3">
                <Network className="h-5 w-5 text-[#22D3EE] mr-2" />
                <h5 className="font-semibold text-white">🕸 API Design & Documentation</h5>
              </div>
              <ul className="space-y-2 text-[#D1D5DB] text-sm pl-7">
                <li className="list-disc">REST endpoints inferred from behavior layer</li>
                <li className="list-disc">No Swagger/OpenAPI schemas</li>
                <li className="list-disc">Single-point risks: auth & billing</li>
              </ul>
            </div>

            {/* DevOps & Deployment Maturity */}
            <div className="rounded-lg bg-[#1E3A5F] p-4">
              <div className="flex items-center mb-3">
                <GitBranch className="h-5 w-5 text-[#22D3EE] mr-2" />
                <h5 className="font-semibold text-white">⚙️ DevOps & Deployment Maturity</h5>
              </div>
              <ul className="space-y-2 text-[#D1D5DB] text-sm pl-7">
                <li className="list-disc">Basic CI via GitHub Actions</li>
                <li className="list-disc">Manual deployment inferred</li>
                <li className="list-disc">No advanced rollout mechanisms (e.g. blue/green)</li>
              </ul>
            </div>

            {/* Infrastructure Flexibility */}
            <div className="rounded-lg bg-[#1E3A5F] p-4">
              <div className="flex items-center mb-3">
                <Server className="h-5 w-5 text-[#22D3EE] mr-2" />
                <h5 className="font-semibold text-white">🔧 Infrastructure Flexibility</h5>
              </div>
              <ul className="space-y-2 text-[#D1D5DB] text-sm pl-7">
                <li className="list-disc">Hosted on Vercel (fast, but less backend control)</li>
                <li className="list-disc">No autoscaling, no orchestration (Kubernetes absent)</li>
                <li className="list-disc">MVP-optimized but not Series A-ready</li>
              </ul>
            </div>

            {/* Tech Debt Warning */}
            <div className="rounded-lg bg-[#1E3A5F] p-4">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-5 w-5 text-[#22D3EE] mr-2" />
                <h5 className="font-semibold text-white">📊 Tech Debt Warning</h5>
              </div>
              <ul className="space-y-2 text-[#D1D5DB] text-sm pl-7">
                <li className="list-disc">Bootstrap 4 usage = stack age</li>
                <li className="list-disc">No visible automated test coverage</li>
                <li className="list-disc">Likely manual QA processes</li>
              </ul>
            </div>

            {/* Analyst Commentary */}
            <div className="rounded-lg bg-[#0A1A2F] p-4 border border-[#1E3A5F]/50">
              <h5 className="font-semibold text-white mb-2">🗣️ Analyst Commentary</h5>
              <p className="text-[#D1D5DB] text-sm italic">
                "The team has clearly optimized for speed and iteration — but future-proofing is limited. 
                Without architectural modularity or robust CI/CD, this product may struggle to scale with 
                customer volume or engineering headcount. Investors should press for a tech roadmap addressing 
                refactoring and devops maturity before Series A."
              </p>
              <div className="flex justify-end mt-3">
                <button className="text-xs text-[#22D3EE] hover:underline flex items-center">
                  Copy to clipboard
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}