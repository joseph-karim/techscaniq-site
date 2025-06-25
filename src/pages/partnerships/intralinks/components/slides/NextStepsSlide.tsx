import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { Play, Calendar, FileText, Users } from 'lucide-react';

export function NextStepsSlide({ onNext, onPrev }: SlideProps): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32">
      <div className="max-w-5xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-space text-5xl md:text-6xl text-brand-black mb-8">
            Live Demo & Next Steps
          </h1>
          
          <p className="font-ibm text-xl text-brand-gunmetal mb-12 max-w-3xl mx-auto">
            Let's explore how TechScanIQ can transform your deal flow with AI-powered technical due diligence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 border-2 border-brand-teal hover:shadow-lg transition-shadow">
              <Play className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="font-space text-2xl mb-4">See It In Action</h3>
              <p className="font-ibm text-brand-gunmetal mb-6">
                Experience a live demonstration of TechScanIQ analyzing a real company in your platform
              </p>
              <Button 
                onClick={onNext}
                className="w-full bg-brand-teal text-white hover:bg-brand-teal/90"
              >
                Continue to Live Demo →
              </Button>
            </Card>

            <Card className="p-8 border-2 border-brand-gunmetal hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-brand-gunmetal mx-auto mb-4" />
              <h3 className="font-space text-2xl mb-4">Schedule Deep Dive</h3>
              <p className="font-ibm text-brand-gunmetal mb-6">
                Book a personalized session to discuss integration, pricing, and partnership details
              </p>
              <Button 
                variant="outline"
                className="w-full border-brand-gunmetal text-brand-gunmetal hover:bg-brand-gunmetal hover:text-white"
                onClick={() => window.open('https://calendly.com/techscaniq/partnership', '_blank')}
              >
                Book Partnership Call
              </Button>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-lg p-8"
          >
            <h3 className="font-space text-2xl mb-4">Additional Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={onNext}
              >
                <FileText className="w-4 h-4" />
                Technical Details
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={onNext}
              >
                <Users className="w-4 h-4" />
                Business Model
              </Button>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                onClick={onNext}
              >
                <FileText className="w-4 h-4" />
                Case Studies
              </Button>
            </div>
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
        </motion.div>
      </div>
    </div>
  );
}