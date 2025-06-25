import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Clock, DollarSign, AlertTriangle, TrendingDown, XCircle } from 'lucide-react';

export function StatusQuoSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        {/* Part 1: The Problem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="font-space text-3xl md:text-4xl text-brand-black mb-4">
            The Problem
          </h2>
          <p className="font-ibm text-lg text-brand-gunmetal mb-8 max-w-4xl">
            Traditional tech DD is fundamentally broken—taking 12+ weeks, costing $150K+, yet still missing critical risks. 
            Despite tech driving 31% of buyouts, 76% of acquisitions fail to meet objectives.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="p-6 text-center border-2 border-red-500 bg-red-50">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-space text-3xl font-bold text-red-600">12</div>
              <div className="font-ibm text-sm text-red-700">Weeks Average Timeline</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-red-500 bg-red-50">
              <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-space text-3xl font-bold text-red-600">$150K+</div>
              <div className="font-ibm text-sm text-red-700">Upfront Cost</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-red-500 bg-red-50">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-space text-3xl font-bold text-red-600">97%</div>
              <div className="font-ibm text-sm text-red-700">Shadow IT Missed</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-red-500 bg-red-50">
              <TrendingDown className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-space text-3xl font-bold text-red-600">76%</div>
              <div className="font-ibm text-sm text-red-700">Deals Fail Objectives</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-red-500 bg-red-50">
              <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-space text-3xl font-bold text-red-600">$500K+</div>
              <div className="font-ibm text-sm text-red-700">Post-Close Surprises</div>
            </Card>
          </div>
        </motion.div>

        {/* Part 2: The Dilemma */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="font-space text-3xl md:text-4xl text-brand-black mb-4">
            The Dilemma
          </h2>
          <p className="font-ibm text-lg text-brand-gunmetal mb-8 max-w-4xl">
            So 91% skip comprehensive tech DD entirely, gambling billions—while the 9% who don't tolerate these failures 
            as expensive insurance. With technical debt reaching $2B+ and compliance penalties hitting 9-figures, 
            firms face an impossible choice: pay for broken DD or risk catastrophic surprises.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center border-2 border-amber-500 bg-amber-50">
              <div className="font-space text-4xl font-bold text-amber-600 mb-2">91%</div>
              <div className="font-ibm text-sm text-amber-700">Skip Comprehensive DD</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-amber-500 bg-amber-50">
              <div className="font-space text-4xl font-bold text-amber-600 mb-2">$2B+</div>
              <div className="font-ibm text-sm text-amber-700">Hidden Tech Debt</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-amber-500 bg-amber-50">
              <div className="font-space text-3xl font-bold text-amber-600 mb-2">9-Figure</div>
              <div className="font-ibm text-sm text-amber-700">Compliance Penalties</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-amber-500 bg-amber-50">
              <div className="font-space text-4xl font-bold text-amber-600 mb-2">30%</div>
              <div className="font-ibm text-sm text-amber-700">Failures from Tech Issues</div>
            </Card>
          </div>
        </motion.div>

        {/* Part 3: The Opportunity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-brand-teal/10 to-blue-50 border-2 border-brand-teal">
            <h2 className="font-space text-3xl md:text-4xl text-brand-black mb-6">
              The Opportunity
            </h2>
            <div className="space-y-4">
              <p className="font-space text-xl md:text-2xl text-brand-gunmetal">
                But what if tech DD could be <span className="text-brand-teal font-bold">fast</span>, 
                <span className="text-brand-teal font-bold"> affordable</span>, and 
                <span className="text-brand-teal font-bold"> comprehensive</span>?
              </p>
              <p className="font-space text-xl md:text-2xl text-brand-gunmetal">
                What if <span className="font-bold">every deal</span>—not just 9%—could access 
                institutional-grade assessment?
              </p>
            </div>
            
            <Button 
              onClick={onNext}
              className="mt-8 bg-brand-teal text-white hover:bg-brand-teal/90 px-10 py-6 text-lg"
            >
              See the solution →
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}