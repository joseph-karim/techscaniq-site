import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SlideProps } from '../PitchDeck';

export function TransformationSlide({ onNext }: SlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <h1 className="font-space text-5xl md:text-6xl text-brand-black mb-8 leading-tight">
          What if every deal on your platform<br />
          came with intelligence worth $350K?
        </h1>
        
        <p className="font-ibm text-xl text-brand-gunmetal mb-12">
          Intralinks powers 10,000+ transactions. But the most valuable part<br />
          of every deal—technical intelligence—happens off your platform.
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button 
            onClick={onNext}
            className="bg-brand-teal text-white hover:bg-brand-teal/90 px-8 py-6 text-lg font-ibm"
          >
            See the $2.3B Opportunity →
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}