import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Zap, Target, FileCheck, Activity, DollarSign } from 'lucide-react';

export function IntroducingTechScanSlide({ onNext, onPrev }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="font-space text-4xl md:text-5xl text-brand-black mb-6 uppercase">
            TechScanIQ Changes Everything About Technical Due Diligence
          </h1>
          <p className="font-ibm text-xl text-brand-gunmetal mb-4">
            What used to take armies of consultants now happens in 48 hours
          </p>
          <p className="font-ibm text-lg text-brand-gunmetal max-w-4xl mx-auto">
            TechScanIQ is an AI-powered intelligence platform that rapidly identifies, analyzes, and benchmarks 
            a company's technology stack across cloud systems, APIs, platforms, back-end and front-end infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-8 border-2 border-brand-teal bg-gradient-to-br from-white to-brand-teal/5">
            <h2 className="font-space text-2xl text-center mb-8">
              How TechScanIQ's AI Research Engine Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-space text-lg mb-2">Multi-Source Scanning</h3>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  Analyzes code, infrastructure, job posts, reviews, forums, patents
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-space text-lg mb-2">Pattern Recognition</h3>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  AI trained on 10,000+ deals identifies risks and opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="font-space text-lg mb-2">Value Quantification</h3>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  Translates technical findings into business impact and dollars
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="p-6 text-center border-2 border-brand-teal hover:bg-brand-teal/5 transition-colors">
              <Zap className="w-10 h-10 text-brand-teal mx-auto mb-3" />
              <h3 className="font-space text-lg mb-2">Automated</h3>
              <p className="font-ibm text-xs text-brand-gunmetal">
                Swift, comprehensive evaluations reducing manual effort
              </p>
            </Card>
            
            <Card className="p-6 text-center border-2 border-brand-teal hover:bg-brand-teal/5 transition-colors">
              <Target className="w-10 h-10 text-brand-teal mx-auto mb-3" />
              <h3 className="font-space text-lg mb-2">Accurate</h3>
              <p className="font-ibm text-xs text-brand-gunmetal">
                Highly precise analysis ensuring confidence in decision-making
              </p>
            </Card>
            
            <Card className="p-6 text-center border-2 border-brand-teal hover:bg-brand-teal/5 transition-colors">
              <FileCheck className="w-10 h-10 text-brand-teal mx-auto mb-3" />
              <h3 className="font-space text-lg mb-2">Auditable</h3>
              <p className="font-ibm text-xs text-brand-gunmetal">
                Transparent analytics supporting governance and compliance
              </p>
            </Card>
            
            <Card className="p-6 text-center border-2 border-brand-teal hover:bg-brand-teal/5 transition-colors">
              <Activity className="w-10 h-10 text-brand-teal mx-auto mb-3" />
              <h3 className="font-space text-lg mb-2">Actionable</h3>
              <p className="font-ibm text-xs text-brand-gunmetal">
                Direct, strategic recommendations tied to business outcomes
              </p>
            </Card>
            
            <Card className="p-6 text-center border-2 border-brand-teal hover:bg-brand-teal/5 transition-colors">
              <DollarSign className="w-10 h-10 text-brand-teal mx-auto mb-3" />
              <h3 className="font-space text-lg mb-2">Affordable</h3>
              <p className="font-ibm text-xs text-brand-gunmetal">
                Cost-effective solutions providing high-value analytical insights
              </p>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-10 py-6 text-lg"
          >
            Uncover the opportunity →
          </Button>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button 
            onClick={onPrev}
            variant="outline"
            className="border-brand-gunmetal text-brand-gunmetal"
          >
            ← Back
          </Button>
        </div>
      </div>
    </div>
  );
}