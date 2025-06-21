import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown, ExternalLink, TrendingUp, Building2, AlertCircle, FileCode, Target, Search, UserCheck, AlertTriangle, CheckCircle, XCircle, Brain, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function TechScanLandingPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [dataFlowActive] = useState(true)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Auto-advance process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-brand-white text-brand-black overflow-x-hidden">
      {/* Navigation Bar */}
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
            <a href="#platform" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Platform</a>
            <a href="#how-it-works" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">How It Works</a>
            <a href="#use-cases" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Use Cases</a>
            <a href="#pricing" className="font-ibm text-brand-gunmetal hover:text-brand-black transition-colors">Pricing</a>
            <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium group">
              Start Intelligence Scan
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
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
            className="text-xl md:text-2xl font-ibm text-brand-gunmetal max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The world's first AI research platform that understands<br />
            the true value of code—for buying companies or winning deals.
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
              Start Intelligence Scan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
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

      {/* The Platform Section */}
      <section className="py-32 bg-gray-50" id="platform">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-space font-medium text-brand-black mb-6">
              ONE REVOLUTIONARY ENGINE. TWO GAME-CHANGING APPLICATIONS.
            </h2>
            <p className="text-xl font-ibm text-brand-gunmetal max-w-4xl mx-auto">
              Our AI research agents don't just scan code—they understand what it's worth.
              By analyzing millions of signals across code, infrastructure, markets, and competitors,
              we reveal the hidden value that drives billion-dollar decisions.
            </p>
          </motion.div>

          {/* Animated Data Flow Diagram */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="relative h-[600px] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Central AI Engine */}
              <motion.div
                className="absolute z-20 bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl p-8 shadow-2xl"
                animate={{
                  scale: dataFlowActive ? [1, 1.05, 1] : 1,
                  boxShadow: dataFlowActive 
                    ? ["0 20px 50px rgba(0,194,178,0.3)", "0 30px 70px rgba(0,194,178,0.5)", "0 20px 50px rgba(0,194,178,0.3)"]
                    : "0 20px 50px rgba(0,194,178,0.3)"
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center justify-center">
                  <Brain className="h-16 w-16 text-white" />
                  <Sparkles className="h-8 w-8 text-white/60 ml-2" />
                </div>
                <p className="text-white font-space font-medium mt-4 text-center">
                  AI INTELLIGENCE ENGINE
                </p>
              </motion.div>

              {/* Data Sources - Left */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                  animate={dataFlowActive ? { x: [0, 10, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                >
                  <h4 className="font-space font-medium text-sm mb-2">DEEP TECHNICAL ANALYSIS</h4>
                  <ul className="space-y-1 text-xs font-ibm text-gray-600">
                    <li>• Line-by-line code inspection</li>
                    <li>• Architecture pattern recognition</li>
                    <li>• Security vulnerability detection</li>
                    <li>• Performance bottleneck analysis</li>
                    <li>• Technical debt quantification</li>
                  </ul>
                </motion.div>
              </div>

              {/* Data Sources - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4">
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                  animate={dataFlowActive ? { x: [0, -10, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <h4 className="font-space font-medium text-sm mb-2">MARKET & COMPETITIVE INTEL</h4>
                  <ul className="space-y-1 text-xs font-ibm text-gray-600">
                    <li>• Customer concentration mapping</li>
                    <li>• Competitor capability tracking</li>
                    <li>• Industry trend analysis</li>
                    <li>• Pricing and contract intelligence</li>
                    <li>• Win/loss pattern recognition</li>
                  </ul>
                </motion.div>
              </div>

              {/* Output Products - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-8">
                <motion.div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-xl"
                  animate={dataFlowActive ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                >
                  <TrendingUp className="h-8 w-8 mb-2 text-brand-teal" />
                  <h4 className="font-space font-medium mb-1">TECHNICAL DUE DILIGENCE</h4>
                  <p className="text-sm font-ibm text-gray-300">For Investment Decisions</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 shadow-xl"
                  animate={dataFlowActive ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                >
                  <Target className="h-8 w-8 mb-2 text-brand-teal" />
                  <h4 className="font-space font-medium mb-1">SALES INTELLIGENCE</h4>
                  <p className="text-sm font-ibm text-gray-300">For Enterprise Deals</p>
                </motion.div>
              </div>

              {/* Animated Data Flow Lines */}
              <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C2B2" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00C2B2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00C2B2" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {dataFlowActive && (
                  <>
                    <motion.path
                      d="M 150 300 Q 350 300 400 300"
                      stroke="url(#flow-gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path
                      d="M 650 300 Q 450 300 400 300"
                      stroke="url(#flow-gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </>
                )}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Value Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-space font-medium text-brand-black mb-6">
              UNDERSTANDING CODE VALUE CHANGES EVERYTHING
            </h2>
            <p className="text-xl font-ibm text-brand-gunmetal">
              Traditional analysis sees code as cost.<br />
              We see code as strategic advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Private Equity */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-space font-medium text-brand-black">
                  FOR PRIVATE EQUITY:
                </h3>
              </div>
              
              <div className="bg-brand-black/5 rounded-lg p-6 border border-brand-black/10">
                <p className="text-lg font-ibm text-brand-black italic">
                  "This codebase is worth $50M less than claimed due to architectural limits"
                </p>
              </div>
            </motion.div>

            {/* For Enterprise Sales */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 mb-4">
                  <Target className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-space font-medium text-brand-black">
                  FOR ENTERPRISE SALES:
                </h3>
              </div>
              
              <div className="bg-brand-black/5 rounded-lg p-6 border border-brand-black/10">
                <p className="text-lg font-ibm text-brand-black italic">
                  "This capability solves their $10M problem—here's how to position it and who to convince"
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-ibm text-brand-gunmetal leading-relaxed">
              The same AI that spots a monolithic architecture blocking growth
              can identify the exact pain points that make enterprises buy.
            </p>
            <p className="text-xl font-space font-medium text-brand-black mt-4">
              Because code isn't just technical—it's business value waiting to be unlocked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gray-50" id="how-it-works">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            THE INTELLIGENCE ENGINE BEHIND EVERY INSIGHT
          </motion.h2>

          {/* Interactive Process Visualization */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-brand-teal rounded-full"
                  animate={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                  {
                    step: 1,
                    title: "MULTI-DIMENSIONAL SCANNING",
                    icon: <Search className="h-8 w-8" />,
                    description: "Our agents simultaneously analyze:",
                    items: [
                      "Public codebases and technical signals",
                      "Engineering job posts and team changes",
                      "Customer reviews and support forums",
                      "Competitor movements and capabilities",
                      "Patent filings and technical documentation"
                    ]
                  },
                  {
                    step: 2,
                    title: "PATTERN RECOGNITION & SYNTHESIS",
                    icon: <Brain className="h-8 w-8" />,
                    description: "AI models trained on 10,000+ deals identify:",
                    items: [
                      "Hidden technical risks and opportunities",
                      "Market position vulnerabilities",
                      "Competitive advantages in code",
                      "Business impact of technical choices"
                    ]
                  },
                  {
                    step: 3,
                    title: "HUMAN EXPERT VALIDATION",
                    icon: <UserCheck className="h-8 w-8" />,
                    description: "Senior engineers and deal experts verify:",
                    items: [
                      "Technical findings accuracy",
                      "Business impact assessment",
                      "Strategic recommendations"
                    ]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all cursor-pointer ${
                      activeStep === index
                        ? "border-brand-teal shadow-xl scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      activeStep === index ? "bg-brand-teal text-white" : "bg-gray-100 text-gray-600"
                    }`}>
                      {item.icon}
                    </div>
                    
                    <h3 className="text-xl font-space font-medium text-brand-black mb-4">
                      {item.step}. {item.title}
                    </h3>
                    
                    <p className="font-ibm text-gray-700 mb-4">{item.description}</p>
                    
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {item.items.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm font-ibm text-gray-600">{subItem}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="text-center mt-12 bg-brand-teal/10 rounded-2xl p-8 border border-brand-teal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-space font-medium text-brand-black">
                Result: Intelligence no human team could gather in months—delivered in 48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Use Cases Section */}
      <section className="py-32" id="use-cases">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TWO WAYS TO WIN WITH TECHNICAL INTELLIGENCE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Scenario 1: Buying Companies */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-space font-medium">SCENARIO 1: BUYING COMPANIES</h3>
                  <Building2 className="h-8 w-8 text-brand-teal" />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-space font-medium text-brand-teal mb-2">
                    PE TECHNICAL DUE DILIGENCE
                  </h4>
                  <p className="font-ibm text-gray-300">
                    You're evaluating a $100M SaaS acquisition target
                  </p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 mb-6">
                  <p className="font-space font-medium mb-4">We reveal:</p>
                  <ul className="space-y-3 font-ibm text-gray-300">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                      Database can't scale past current 100K users without $5M rewrite
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      67% revenue from one customer who's building in-house solution
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                      Talented team but architecture decisions limit growth
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500">
                  <p className="font-space font-medium text-green-400 mb-1">
                    Outcome: Negotiate 40% lower price
                  </p>
                  <p className="font-ibm text-sm text-green-300">
                    and budget for technical fixes
                  </p>
                </div>

                <Button className="w-full mt-6 bg-brand-teal text-white hover:bg-brand-teal/90 font-space font-medium">
                  View PE Report Sample
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Scenario 2: Winning Deals */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-space font-medium">SCENARIO 2: WINNING DEALS</h3>
                  <Target className="h-8 w-8 text-brand-teal" />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-space font-medium text-brand-teal mb-2">
                    SALES INTELLIGENCE
                  </h4>
                  <p className="font-ibm text-gray-300">
                    You're selling to a Fortune 500 that needs digital transformation
                  </p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 mb-6">
                  <p className="font-space font-medium mb-4">We reveal:</p>
                  <ul className="space-y-3 font-ibm text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      Their current vendor's system crashes during peak hours
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                      CTO has budget but security team has killed 3 deals
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      Your microservices solve their exact scaling problem
                    </li>
                  </ul>
                </div>

                <div className="bg-green-500/20 rounded-lg p-4 border border-green-500">
                  <p className="font-space font-medium text-green-400 mb-1">
                    Outcome: Win $2M deal in 45 days
                  </p>
                  <p className="font-ibm text-sm text-green-300">
                    by leading with architecture
                  </p>
                </div>

                <Button className="w-full mt-6 bg-brand-teal text-white hover:bg-brand-teal/90 font-space font-medium">
                  View Sales Intel Sample
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Continuum Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-space font-medium text-brand-black mb-6">
              FROM ACQUISITION TO GROWTH: THE FULL INTELLIGENCE CYCLE
            </h2>
            <p className="text-xl font-ibm text-brand-gunmetal">
              Smart investors don't just buy companies—they grow them.
            </p>
          </motion.div>

          {/* Timeline Visualization */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Month 1-3: Acquisition */}
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-teal"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 left-8 bg-brand-teal text-white px-4 py-1 rounded-full font-space font-medium">
                    MONTH 1-3
                  </div>
                  
                  <h3 className="text-2xl font-space font-medium text-brand-black mb-4 mt-2">
                    ACQUISITION
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-brand-teal mr-3" />
                    <p className="font-space font-medium">Use Technical DD to buy right</p>
                  </div>
                  
                  <p className="font-ibm text-gray-700">
                    Identify undervalued assets with fixable technical issues
                  </p>
                </motion.div>

                {/* Month 4-24: Growth */}
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-teal"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 left-8 bg-brand-teal text-white px-4 py-1 rounded-full font-space font-medium">
                    MONTH 4-24
                  </div>
                  
                  <h3 className="text-2xl font-space font-medium text-brand-black mb-4 mt-2">
                    GROWTH
                  </h3>
                  
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-brand-teal mr-3" />
                    <p className="font-space font-medium">Use Sales Intelligence to expand</p>
                  </div>
                  
                  <p className="font-ibm text-gray-700">
                    Find enterprise customers whose problems match your new capabilities
                  </p>
                </motion.div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mt-8">
                <ArrowRight className="h-8 w-8 text-brand-teal" />
              </div>
            </div>

            {/* Result */}
            <motion.div
              className="text-center mt-12 bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 rounded-2xl p-8 border border-brand-teal"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-space font-medium text-brand-black mb-4">
                Create 3-5x returns by knowing exactly what you're buying AND how to sell it
              </p>
            </motion.div>

            {/* Case Study */}
            <motion.div
              className="mt-12 bg-gray-900 text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-space font-medium text-brand-teal mb-4">Case Study:</p>
              <p className="font-ibm text-gray-300 leading-relaxed">
                Vista Equity used both reports to acquire DevTools Inc. for $45M,
                then landed 3 Fortune 500 accounts in 6 months by knowing exactly which
                technical capabilities to highlight. Exit at $180M in 18 months.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32" id="pricing">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-5xl font-space font-medium text-center text-brand-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            INTELLIGENCE THAT MULTIPLIES VALUE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Technical DD */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-space font-medium text-brand-black mb-2">
                  TECHNICAL DUE DILIGENCE
                </h3>
                <p className="font-ibm text-gray-600 mb-6">For Smarter Acquisitions</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-space font-medium text-brand-black">$7,900</span>
                  <span className="text-xl font-ibm text-gray-500 ml-2">per target</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Complete technical audit",
                    "Market position analysis",
                    "Risk quantification",
                    "Integration roadmap"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                      <span className="font-ibm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-gray-600 mb-6">
                  Perfect for: PE/VC firms, Corp Dev teams
                </p>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 font-space font-medium">
                  Start Analysis
                </Button>
              </div>
            </motion.div>

            {/* Sales Intelligence */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-space font-medium text-brand-black mb-2">
                  SALES INTELLIGENCE
                </h3>
                <p className="font-ibm text-gray-600 mb-6">For Bigger Deals</p>
                
                <div className="mb-8">
                  <div>
                    <span className="text-5xl font-space font-medium text-brand-black">$500</span>
                    <span className="text-xl font-ibm text-gray-500 ml-2">per account</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-space font-medium text-brand-black">+$5,000</span>
                    <span className="text-lg font-ibm text-gray-500 ml-2">per closed deal</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Deep account intelligence",
                    "Decision maker mapping",
                    "Technical requirements",
                    "Competitive playbook"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                      <span className="font-ibm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-gray-600 mb-6">
                  Perfect for: Enterprise sales teams, $100K+ deals
                </p>

                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 font-space font-medium">
                  Start Analysis
                </Button>
              </div>
            </motion.div>

            {/* Growth Package */}
            <motion.div
              className="bg-gradient-to-br from-brand-teal to-teal-600 rounded-2xl shadow-xl overflow-hidden text-white relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 194, 178, 0.5)" }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-black text-white px-6 py-2 rounded-full font-space font-medium text-sm">
                BEST VALUE
              </div>
              
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-space font-medium mb-2">
                  GROWTH PACKAGE
                </h3>
                <p className="font-ibm text-white/80 mb-6">Buy + Grow Bundle</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-space font-medium">$39,900</span>
                  <span className="text-xl font-ibm text-white/80 ml-2">/year</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "5 DD reports",
                    "10 Sales intel reports",
                    "Quarterly updates",
                    "Portfolio monitoring"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                      <span className="font-ibm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-ibm text-sm text-white/80 mb-6">
                  Perfect for: PE firms with portfolio companies
                </p>

                <Button className="w-full bg-white text-brand-teal hover:bg-gray-100 font-space font-medium">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              CODE IS VALUE. SEE IT FIRST.
            </h2>
            <p className="text-xl md:text-2xl font-ibm text-gray-300 max-w-3xl mx-auto">
              Whether you're buying companies or selling solutions,<br />
              technical intelligence is your unfair advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium text-xl px-12 py-8 shadow-2xl hover:shadow-brand-teal/20 group">
                Start Your Intelligence Scan
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}