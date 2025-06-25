import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { ArrowRight } from 'lucide-react';

export function CoverSlide({ onNext }: SlideProps): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-brand-white to-brand-teal/5">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Partner Logos - Large and Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center justify-center gap-12 mb-16"
          >
            <div className="flex flex-col items-center">
              <img 
                src="/Tesch_Scan_IQ_Logo_Transparent.png" 
                alt="TechScan IQ" 
                className="h-32 md:h-40 mb-4"
              />
            </div>
            
            <div className="text-brand-gunmetal text-6xl md:text-7xl font-light">×</div>
            
            <div className="flex flex-col items-center">
              <div className="h-24 md:h-32 flex items-center justify-center mb-4">
                <h2 className="font-space text-5xl md:text-6xl font-bold text-brand-gunmetal">INTRALINKS</h2>
              </div>
            </div>
          </motion.div>

          {/* Simple Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-ibm text-2xl md:text-3xl text-brand-gunmetal mb-16 max-w-4xl mx-auto"
          >
            How TechScanIQ can enhance M&A Tech Due Diligence for the Intralinks platform
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
            transition={{ delay: 1 }}
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