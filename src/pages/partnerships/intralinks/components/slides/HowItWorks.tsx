import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../../types';
import { useState } from 'react';
import { 
  Search, 
  Database, 
  Brain, 
  FileCheck,
  Globe,
  Code,
  TrendingUp,
  Users,
  Zap,
  ChevronRight
} from 'lucide-react';

export function HowItWorksSlide({ onNext }: SlideProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { icon: Search, label: 'Discover', count: '1,000+', color: 'text-blue-500' },
    { icon: Database, label: 'Research', count: '3,000+', color: 'text-purple-500' },
    { icon: Brain, label: 'Analyze', count: '500+', color: 'text-pink-500' },
    { icon: FileCheck, label: 'Verify', count: '100%', color: 'text-brand-teal' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl md:text-5xl text-brand-black mb-4">
            The Depth Advantage
          </h2>
          <p className="font-ibm text-xl text-brand-gunmetal">
            Not all intelligence is created equal
          </p>
        </motion.div>

        {/* Source Comparison with Proportional Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex justify-center items-center gap-8 md:gap-16">
            {/* Traditional DD - 20 sources */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-space text-xl font-bold text-gray-600">20</span>
                </div>
                <p className="font-ibm text-sm text-gray-600 mt-2">Traditional DD</p>
              </motion.div>
            </div>

            {/* ChatGPT - 100 sources */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="relative"
              >
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-space text-2xl font-bold text-amber-600">100</span>
                </div>
                <p className="font-ibm text-sm text-amber-600 mt-2">ChatGPT</p>
              </motion.div>
            </div>

            {/* TechScanIQ - 1000 sources */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="relative"
              >
                <div className="w-40 h-40 bg-brand-teal/20 rounded-full flex items-center justify-center border-4 border-brand-teal">
                  <span className="font-space text-5xl font-bold text-brand-teal">1000</span>
                </div>
                <p className="font-ibm text-lg text-brand-teal mt-3 font-semibold">TechScanIQ</p>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-8"
          >
            <p className="font-ibm text-brand-gunmetal">Sources analyzed</p>
          </motion.div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h3 className="font-space text-2xl text-center text-brand-black mb-8">
            How It Works
          </h3>
        </motion.div>

        {/* Interactive Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStage(index)}
                  className={`flex-1 cursor-pointer ${index < stages.length - 1 ? 'relative' : ''}`}
                >
                  {/* Connection line */}
                  {index < stages.length - 1 && (
                    <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gray-200 -z-10">
                      <motion.div
                        className="h-full bg-brand-teal"
                        initial={{ width: '0%' }}
                        animate={{ width: index < activeStage ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  
                  <div className={`text-center ${activeStage === index ? 'scale-110' : ''} transition-transform`}>
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-2
                                    ${activeStage >= index ? 'bg-brand-teal text-white' : 'bg-gray-100 text-gray-400'} 
                                    transition-colors`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="font-space text-sm font-medium">{stage.label}</p>
                    <p className={`font-space text-2xl font-bold ${activeStage >= index ? stage.color : 'text-gray-400'}`}>
                      {stage.count}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stage Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              {activeStage === 0 && (
                <div className="space-y-4">
                  <h3 className="font-space text-xl">Automated Discovery</h3>
                  <div className="flex justify-center gap-8">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm">Real-time APIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Hidden endpoints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Dynamic content</span>
                    </div>
                  </div>
                </div>
              )}
              {activeStage === 1 && (
                <div className="space-y-4">
                  <h3 className="font-space text-xl">Deep Domain Research</h3>
                  <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <Code className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-xs">Tech</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-xs">Market</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-xs">Team</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-1">
                        <Database className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-xs">Data</p>
                    </div>
                  </div>
                </div>
              )}
              {activeStage === 2 && (
                <div className="space-y-4">
                  <h3 className="font-space text-xl">AI Pattern Recognition</h3>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      {/* Neural network visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-16 h-16 text-pink-500" />
                      </div>
                      {/* Orbiting nodes */}
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 bg-pink-200 rounded-full"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(80px)`
                          }}
                          animate={{
                            transform: `translate(-50%, -50%) rotate(${angle + 360}deg) translateX(80px)`
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeStage === 3 && (
                <div className="space-y-4">
                  <h3 className="font-space text-xl">Every Claim Verified</h3>
                  <div className="max-w-md mx-auto">
                    <div className="bg-black text-white p-4 rounded-lg font-mono text-sm">
                      <span className="text-gray-400">"API latency: </span>
                      <span className="text-brand-teal underline cursor-pointer">[src:42]</span>
                      <span className="text-gray-400"> 400ms p99"</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-6 text-lg group"
          >
            See it in action 
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}