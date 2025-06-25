import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export function CoverSlide({ onNext }: SlideProps): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-brand-white to-brand-teal/5">
      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <img 
                src="/Tesch_Scan_IQ_Logo_Transparent.png" 
                alt="TechScan IQ" 
                className="h-16 mb-2"
              />
              <p className="font-ibm text-sm text-brand-gunmetal">AI-Powered Tech DD</p>
            </div>
            
            <div className="text-brand-gunmetal text-3xl font-light">×</div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 flex items-center justify-center mb-2">
                <h2 className="font-space text-3xl font-bold text-brand-gunmetal">INTRALINKS</h2>
              </div>
              <p className="font-ibm text-sm text-brand-gunmetal">M&A Platform Leader</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="font-space text-5xl md:text-6xl text-brand-black mb-6"
          >
            Transforming M&A Intelligence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-ibm text-2xl text-brand-gunmetal mb-12 max-w-3xl mx-auto"
          >
            How AI-powered technical due diligence can revolutionize 
            your platform and create new revenue streams
          </motion.p>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center">
              <p className="font-space text-4xl font-bold text-brand-teal">48hr</p>
              <p className="font-ibm text-sm text-gray-600">Turnaround</p>
            </div>
            <div className="text-center">
              <p className="font-space text-4xl font-bold text-brand-teal">1000+</p>
              <p className="font-ibm text-sm text-gray-600">Sources</p>
            </div>
            <div className="text-center">
              <p className="font-space text-4xl font-bold text-brand-teal">95%</p>
              <p className="font-ibm text-sm text-gray-600">Cost Reduction</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button 
              onClick={onNext}
              className="bg-brand-teal text-white hover:bg-brand-teal/90 px-10 py-6 text-lg group"
            >
              Start Presentation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <p className="font-ibm text-sm text-gray-500">
              Confidential Partnership Proposal • {new Date().getFullYear()}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}