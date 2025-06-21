import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, ExternalLink, Code2, TrendingUp, Building2, AlertCircle, Shield, Zap, FileCode, BarChart3, Users, Target, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function TechScanLandingPage() {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [hoveredFinding, setHoveredFinding] = useState<number | null>(null)
  const [techScore, setTechScore] = useState(0)
  const [marketScore, setMarketScore] = useState(0)
  const [codeLines, setCodeLines] = useState<string[]>([])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Animate scores on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechScore(67)
      setMarketScore(42)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Simulate code scanning
  useEffect(() => {
    const lines = [
      "Scanning authentication patterns...",
      "Analyzing database queries...",
      "Checking dependency vulnerabilities...",
      "Evaluating code complexity...",
      "Detecting security patterns..."
    ]
    
    lines.forEach((line, index) => {
      setTimeout(() => {
        setCodeLines(prev => [...prev, line])
      }, index * 300)
    })
  }, [])

  const useCases = [
    {
      title: "FOR PE/VC",
      icon: <TrendingUp className="h-8 w-8" />,
      discover: "Technical debt & scalability limits",
      action: "Make confident valuations with code-level insights"
    },
    {
      title: "FOR STRATEGIC BUYERS",
      icon: <Building2 className="h-8 w-8" />,
      discover: "Integration complexity & true build cost",
      action: "Structure deals that account for technical reality"
    },
    {
      title: "FOR GROWTH EQUITY",
      icon: <Target className="h-8 w-8" />,
      discover: "Market position & competitive moats",
      action: "Identify sustainable growth opportunities"
    }
  ]

  const findings = [
    { 
      type: "critical", 
      title: "Database Performance Risk",
      detail: "PostgreSQL running at 89% capacity with no read replicas",
      impact: "System failure within 3 months at current growth"
    },
    { 
      type: "warning", 
      title: "Authentication Vulnerability",
      detail: "JWT tokens lack proper expiration handling",
      impact: "Security breach risk for enterprise clients"
    },
    { 
      type: "positive", 
      title: "Strong Architecture Foundation",
      detail: "Microservices pattern with 87% test coverage",
      impact: "Ready for 10x scale with minimal refactoring"
    }
  ]

  return (
    <div className="min-h-screen bg-brand-white text-brand-black overflow-x-hidden">
      {/* Navigation Bar - Fixed */}
      <motion.header 
        className="fixed top-0 z-50 w-full bg-brand-white/90 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src="/techscaniq_logo.png" alt="TechScanIQ" className="h-10" />
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">How It Works</a>
            <a href="#intelligence" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Intelligence Types</a>
            <a href="#pricing" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Pricing</a>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium group">
              Start Analysis <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
        <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/5 to-transparent" />
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-space font-medium leading-tight text-brand-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SEE WHAT OTHERS CAN'T.
            <br />
            <span className="text-brand-teal">IN 48 HOURS.</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl font-ibm text-brand-gunmetal max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Technical truth + Market reality = Investment decisions that win.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white font-space font-medium text-lg px-10 py-6 group"
            >
              View Sample Analysis
              <FileCode className="ml-2 h-5 w-5 group-hover:rotate-3 transition-transform" />
            </Button>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow group">
              Start Due Diligence
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Split-Screen Visualization */}
        <motion.div 
          className="w-full max-w-7xl mx-auto mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Technical Intelligence Side */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-space font-medium text-brand-white mb-6 flex items-center">
                <Code2 className="mr-2 h-5 w-5 text-brand-teal" />
                TECHNICAL INTELLIGENCE
              </h3>
              <div className="space-y-3">
                <AnimatePresence>
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="font-mono text-sm text-brand-teal/80 flex items-center"
                    >
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mr-2"
                      >
                        ▸
                      </motion.span>
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {/* Animated code blocks in background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ y: 0 }}
                animate={{ y: -100 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <pre className="text-xs text-brand-teal">
{`function analyzeCodebase(repo) {
  const metrics = {
    complexity: calculateCyclomaticComplexity(),
    coverage: getTestCoverage(),
    debt: estimateTechnicalDebt(),
    security: runSecurityAudit()
  };
  return generateInsights(metrics);
}`}
                </pre>
              </motion.div>
            </motion.div>

            {/* Market Intelligence Side */}
            <motion.div 
              className="bg-gradient-to-br from-brand-teal to-teal-600 p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-space font-medium text-brand-white mb-6 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                MARKET INTELLIGENCE
              </h3>
              
              {/* Animated Network Graph */}
              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Central node */}
                  <motion.circle
                    cx="150"
                    cy="100"
                    r="30"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                  <text x="150" y="105" textAnchor="middle" className="fill-white text-sm font-medium">
                    TARGET
                  </text>
                  
                  {/* Connected nodes */}
                  {[
                    { x: 50, y: 50, label: "Customer A", risk: "high" },
                    { x: 250, y: 50, label: "Customer B", risk: "low" },
                    { x: 50, y: 150, label: "Customer C", risk: "medium" },
                    { x: 250, y: 150, label: "Customer D", risk: "low" }
                  ].map((node, index) => (
                    <g key={index}>
                      <motion.line
                        x1="150"
                        y1="100"
                        x2={node.x}
                        y2={node.y}
                        stroke="white"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      />
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        fill={node.risk === "high" ? "#ef4444" : node.risk === "medium" ? "#f59e0b" : "#10b981"}
                        fillOpacity="0.8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                      />
                      <text x={node.x} y={node.y + 5} textAnchor="middle" className="fill-white text-xs">
                        {((index + 1) * 20)}%
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              <motion.div
                className="mt-4 text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <p className="font-space">Revenue Concentration Analysis</p>
                <p className="text-xs mt-1">40% from single customer = High risk</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-brand-gunmetal" size={32} />
        </motion.div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 relative" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-space font-medium text-brand-black">
                BEYOND THE PITCH DECK
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl font-ibm text-brand-gunmetal">
                  Every deal has hidden realities that only emerge after closing.
                  We find them first.
                </p>
                
                <div className="space-y-4">
                  {[
                    { surface: "AI-powered platform", reality: "Rule-based system with ML aspirations" },
                    { surface: "Highly scalable architecture", reality: "Database at 89% capacity, no sharding" },
                    { surface: "Diverse customer base", reality: "67% revenue from largest client" },
                    { surface: "Market leader position", reality: "Losing 3 deals/month to new competitor" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-ibm text-sm text-gray-500 mb-1">They claim:</p>
                          <p className="font-space text-lg text-brand-black">{item.surface}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-brand-teal mx-4 mt-4" />
                        <div className="flex-1">
                          <p className="font-ibm text-sm text-brand-teal mb-1">We reveal:</p>
                          <p className="font-space text-lg text-brand-black">{item.reality}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-lg px-8 py-6 group">
                  See Full Analysis Sample
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Advanced Iceberg Visualization */}
            <motion.div 
              className="relative h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <svg viewBox="0 0 400 600" className="w-full h-full">
                <defs>
                  <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00C2B2" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#00C2B2" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="iceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f9fafb" />
                    <stop offset="50%" stopColor="#e5e7eb" />
                    <stop offset="100%" stopColor="#00C2B2" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Ocean */}
                <rect x="0" y="200" width="400" height="400" fill="url(#oceanGradient)" />
                
                {/* Water line */}
                <motion.line
                  x1="0" y1="200" x2="400" y2="200"
                  stroke="#00C2B2"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                
                {/* Iceberg */}
                <motion.path
                  d="M200,100 L150,200 L100,400 L300,400 L250,200 Z"
                  fill="url(#iceGradient)"
                  stroke="#2C2C2E"
                  strokeWidth="2"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                />
                
                {/* Labels with animation */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <text x="200" y="150" textAnchor="middle" className="fill-brand-gunmetal font-space font-medium text-lg">
                    VISIBLE
                  </text>
                  <text x="200" y="170" textAnchor="middle" className="fill-brand-gunmetal font-ibm text-sm">
                    Pitch deck metrics
                  </text>
                </motion.g>
                
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  <text x="200" y="300" textAnchor="middle" className="fill-white font-space font-medium text-xl">
                    HIDDEN REALITY
                  </text>
                  <text x="200" y="330" textAnchor="middle" className="fill-white/80 font-ibm text-sm">
                    Technical debt
                  </text>
                  <text x="200" y="350" textAnchor="middle" className="fill-white/80 font-ibm text-sm">
                    Customer concentration
                  </text>
                  <text x="200" y="370" textAnchor="middle" className="fill-white/80 font-ibm text-sm">
                    Team burnout risk
                  </text>
                </motion.g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="py-32 bg-gray-50" id="intelligence">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-space font-medium text-center text-brand-black mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            DUAL INTELLIGENCE PLATFORM
          </motion.h2>

          {/* Interactive Dashboard */}
          <motion.div 
            className="max-w-7xl mx-auto bg-brand-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 flex justify-between items-center">
              <h3 className="font-space font-medium text-brand-white text-xl">TechScan IQ Analysis: Target Corp</h3>
              <div className="flex gap-4">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              {/* Animated Scores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Tech Score */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-space font-medium text-brand-gunmetal mb-6">TECHNICAL HEALTH</h4>
                  <div className="relative w-40 h-40 mx-auto">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <motion.circle 
                        cx="80" cy="80" r="70" 
                        stroke="#00C2B2" 
                        strokeWidth="12" 
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 440" }}
                        animate={{ strokeDasharray: `${techScore * 4.4} 440` }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        className="text-5xl font-space font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        {techScore}
                      </motion.span>
                    </div>
                  </div>
                  <p className="font-ibm text-brand-gunmetal mt-4">Above Average</p>
                </motion.div>

                {/* Market Score */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-space font-medium text-brand-gunmetal mb-6">MARKET POSITION</h4>
                  <div className="relative w-40 h-40 mx-auto">
                    <svg className="w-40 h-40 transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                      <motion.circle 
                        cx="80" cy="80" r="70" 
                        stroke="#ef4444" 
                        strokeWidth="12" 
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 440" }}
                        animate={{ strokeDasharray: `${marketScore * 4.4} 440` }}
                        transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span 
                        className="text-5xl font-space font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                      >
                        {marketScore}
                      </motion.span>
                    </div>
                  </div>
                  <p className="font-ibm text-brand-gunmetal mt-4">Needs Attention</p>
                </motion.div>

                {/* Combined Risk */}
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-space font-medium text-brand-gunmetal mb-6">INVESTMENT RISK</h4>
                  <motion.div 
                    className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                    <span className="text-2xl font-space font-medium text-red-600">ELEVATED</span>
                    <p className="font-ibm text-brand-gunmetal mt-2">Deep dive required</p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Interactive Findings */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-space font-medium text-brand-black mb-6 flex items-center">
                    <Code2 className="mr-2 h-5 w-5 text-brand-teal" />
                    TECHNICAL FINDINGS
                  </h4>
                  <div className="space-y-3">
                    {findings.filter(f => f.type !== "positive").map((finding, index) => (
                      <motion.div
                        key={index}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          hoveredFinding === index
                            ? "bg-gray-50 border-brand-teal shadow-lg"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                        onHoverStart={() => setHoveredFinding(index)}
                        onHoverEnd={() => setHoveredFinding(null)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${
                            finding.type === "critical" ? "bg-red-500" : "bg-yellow-500"
                          }`} />
                          <div className="flex-1">
                            <h5 className="font-space font-medium text-brand-black">{finding.title}</h5>
                            <p className="font-ibm text-sm text-gray-600 mt-1">{finding.detail}</p>
                            <AnimatePresence>
                              {hoveredFinding === index && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="font-ibm text-sm text-brand-teal mt-2"
                                >
                                  Impact: {finding.impact}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-space font-medium text-brand-black mb-6 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-brand-teal" />
                    MARKET INTELLIGENCE
                  </h4>
                  <div className="space-y-3">
                    {[
                      { risk: "high", title: "Customer Concentration", detail: "Top 3 customers = 67% of revenue" },
                      { risk: "medium", title: "Competitive Pressure", detail: "New entrant taking 15% market share/year" },
                      { risk: "low", title: "Market Growth", detail: "TAM expanding 25% annually" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg border-2 bg-white border-gray-200 hover:border-brand-teal transition-all hover:shadow-lg cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start">
                          <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${
                            item.risk === "high" ? "bg-red-500" : item.risk === "medium" ? "bg-yellow-500" : "bg-green-500"
                          }`} />
                          <div>
                            <h5 className="font-space font-medium text-brand-black">{item.title}</h5>
                            <p className="font-ibm text-sm text-gray-600 mt-1">{item.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Code Analysis Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-space font-medium text-center text-brand-black mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CODE-LEVEL EVIDENCE
          </motion.h2>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center text-gray-400 text-sm font-mono">
                  <FileCode className="mr-2 h-4 w-4" />
                  /api/auth/session-handler.js
                </div>
              </div>
              
              <div className="p-6">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="language-javascript">
{`function validateSession(token) {
  // CRITICAL: No expiration check
  const decoded = jwt.decode(token);
  
  if (!decoded) {
    return { valid: false };
  }
  
  // WARNING: Missing signature verification
  return { 
    valid: true,
    userId: decoded.userId
  };
}

// RISK: Sessions never expire
// IMPACT: Compromised tokens remain valid indefinitely
// FIX COST: 2-3 developer days + testing`}
                  </code>
                </pre>
              </div>
              
              <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-red-400 flex items-center">
                      <AlertCircle className="mr-1 h-4 w-4" />
                      Critical Security Issue
                    </span>
                    <span className="text-gray-400">
                      Discovered by automated scan + senior review
                    </span>
                  </div>
                  <Button variant="ghost" className="text-brand-teal hover:text-brand-teal/80">
                    View Full Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <motion.p 
              className="text-center text-gray-600 font-ibm mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Every finding linked to source code. Every risk quantified. Every fix estimated.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-space font-medium text-center text-brand-black mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            BUILT FOR SOPHISTICATED INVESTORS
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-brand-white rounded-xl p-8 cursor-pointer transition-all ${
                    activeUseCase === index
                      ? "ring-2 ring-brand-teal shadow-xl scale-105"
                      : "ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveUseCase(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      activeUseCase === index ? "bg-brand-teal text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      {useCase.icon}
                    </div>
                    <h3 className="font-space font-medium text-xl text-brand-black mb-4">{useCase.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-ibm text-sm text-gray-500 mb-1">Discover:</p>
                        <p className="font-space text-brand-black">{useCase.discover}</p>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-ibm text-sm text-gray-500 mb-1">Outcome:</p>
                        <p className="font-space text-brand-black">{useCase.action}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-space font-medium text-center text-brand-black mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WHY TECHSCAN IQ
          </motion.h2>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-brand-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="text-left p-6 font-space font-medium text-gray-600"></th>
                    <th className="text-center p-6 font-space font-medium text-gray-600">Traditional DD</th>
                    <th className="text-center p-6 font-space font-medium text-gray-600">Consultants</th>
                    <th className="text-center p-6 font-space font-medium text-white bg-brand-teal">TechScan IQ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Turnaround Time", traditional: "3-4 weeks", consultants: "2-3 weeks", techscan: "48 hours" },
                    { feature: "Cost", traditional: "$75K+", consultants: "$50K+", techscan: "$7,900" },
                    { feature: "Code Analysis Depth", traditional: "Surface level", consultants: "Moderate", techscan: "Line-by-line" },
                    { feature: "Market Intelligence", traditional: "None", consultants: "Basic", techscan: "Comprehensive" },
                    { feature: "Evidence Trail", traditional: "Summary only", consultants: "Limited", techscan: "Every claim linked" },
                    { feature: "Senior Review", traditional: "Partner glimpse", consultants: "Variable", techscan: "100% coverage" }
                  ].map((row, index) => (
                    <motion.tr 
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <td className="p-6 font-space font-medium text-brand-black">{row.feature}</td>
                      <td className="p-6 text-center font-ibm text-gray-600">{row.traditional}</td>
                      <td className="p-6 text-center font-ibm text-gray-600">{row.consultants}</td>
                      <td className="p-6 text-center font-ibm font-medium text-brand-teal bg-brand-teal/5">
                        {row.techscan}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-gray-50" id="pricing">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-5xl font-space font-medium text-center text-brand-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TRANSPARENT PRICING
          </motion.h2>
          
          <motion.p 
            className="text-xl font-ibm text-center text-gray-600 mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fixed fees. No surprises. Results in 48 hours.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "TECHNICAL DEEP DIVE",
                price: "$4,900",
                features: [
                  "Complete codebase analysis",
                  "Architecture assessment",
                  "Security vulnerability scan",
                  "Technical debt quantification",
                  "Development velocity metrics"
                ],
                icon: <Code2 className="h-6 w-6" />,
                color: "gray"
              },
              {
                name: "MARKET INTELLIGENCE",
                price: "$3,900",
                features: [
                  "Customer concentration analysis",
                  "Competitive positioning",
                  "Growth trajectory validation",
                  "Market risk assessment",
                  "Revenue quality scoring"
                ],
                icon: <BarChart3 className="h-6 w-6" />,
                color: "gray"
              },
              {
                name: "COMPLETE ANALYSIS",
                price: "$7,900",
                features: [
                  "Everything in both packages",
                  "Integrated risk scoring",
                  "Priority support",
                  "Executive summary",
                  "48-hour guarantee"
                ],
                icon: <Zap className="h-6 w-6" />,
                color: "teal",
                popular: true
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-brand-white rounded-2xl p-8 ${
                  plan.popular 
                    ? "ring-2 ring-brand-teal shadow-xl scale-105" 
                    : "ring-1 ring-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-space font-medium">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                    plan.color === "teal" ? "bg-brand-teal text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="font-space font-medium text-xl text-brand-black mb-2">{plan.name}</h3>
                  <div className="text-4xl font-space font-medium text-brand-black">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.color === "teal" ? "text-brand-teal" : "text-gray-400"
                      }`} />
                      <span className="font-ibm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-space font-medium ${
                    plan.color === "teal"
                      ? "bg-brand-teal text-white hover:bg-brand-teal/90"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-brand-black text-brand-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal rounded-full blur-3xl" />
        </motion.div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-space font-medium">
              MAKE YOUR NEXT MOVE
              <br />
              <span className="text-brand-teal">WITH CONFIDENCE</span>
            </h2>
            <p className="text-xl md:text-2xl font-ibm text-gray-300 max-w-3xl mx-auto">
              While others guess, you'll know. Deep technical truth meets market reality in 48 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-xl px-12 py-8 shadow-2xl hover:shadow-brand-teal/20 group">
                Start Due Diligence Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            
            <div className="pt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                <span className="font-ibm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span className="font-ibm">48-Hour Delivery</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <span className="font-ibm">Senior Engineers Only</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}