import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function AIRevolutionSlide(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 pt-32">
      <div className="max-w-5xl w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl text-brand-black mb-4">
            AI CHANGES EVERYTHING ABOUT TECHNICAL INTELLIGENCE
          </h2>
          <p className="font-ibm text-xl text-brand-gunmetal">
            What used to take armies of consultants now happens in 48 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 border-2 border-brand-teal mb-8">
            <h3 className="font-space text-2xl mb-6 text-center">
              How TechScan IQ's AI Research Engine Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-brand-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-space text-2xl text-brand-teal">1</span>
                </div>
                <h4 className="font-space text-lg mb-2">Multi-Source Scanning</h4>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  Analyzes code, infrastructure, job posts, reviews, forums, patents
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-space text-2xl text-brand-teal">2</span>
                </div>
                <h4 className="font-space text-lg mb-2">Pattern Recognition</h4>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  AI trained on 10,000+ deals identifies risks and opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-brand-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="font-space text-2xl text-brand-teal">3</span>
                </div>
                <h4 className="font-space text-lg mb-2">Value Quantification</h4>
                <p className="font-ibm text-sm text-brand-gunmetal">
                  Translates technical findings into business impact and dollars
                </p>
              </div>
            </div>

            <div className="bg-brand-gunmetal text-white p-6 rounded-lg">
              <p className="font-ibm text-center">
                <span className="font-space text-xl">Key Insight:</span><br />
                Our AI doesn't just read code—it understands what code is worth.<br />
                The same engine that values companies for PE can identify sales opportunities.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-ibm text-brand-gunmetal mb-8">
            This is the intelligence layer every modern deal needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
}