import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function IntelligenceGapSlide(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-20">
      <div className="max-w-6xl w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            THE DEAL INTELLIGENCE STACK IS INCOMPLETE
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 border-2 border-brand-teal">
            <h3 className="font-space text-2xl mb-6">What Intralinks Powers Today</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-brand-teal text-2xl">✓</span>
                <span className="font-ibm">Document management & security</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-teal text-2xl">✓</span>
                <span className="font-ibm">Q&A workflow automation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-teal text-2xl">✓</span>
                <span className="font-ibm">AI-powered document discovery</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-teal text-2xl">✓</span>
                <span className="font-ibm">Deal progress tracking</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-red-500 bg-red-50">
            <h3 className="font-space text-2xl mb-6">What Happens Off-Platform</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="font-ibm">Technical architecture assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="font-ibm">Code quality & security analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="font-ibm">Market position intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-500 text-2xl">✗</span>
                <span className="font-ibm">Integration complexity evaluation</span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="bg-brand-gunmetal text-white p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-space text-2xl mb-2">
            Average technical DD cost per deal: $350,000
          </p>
          <p className="font-ibm text-lg">
            Total addressable market in your deals: $2.3B annually
          </p>
        </motion.div>
      </div>
    </div>
  );
}