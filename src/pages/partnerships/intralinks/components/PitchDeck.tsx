import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import slide components
import { StatusQuoSlide } from './slides/StatusQuo';
import { BreakthroughSlide } from './slides/Breakthrough';
import { IntroducingTechScanSlide } from './slides/IntroducingTechScan';
import { HowItWorksSlide } from './slides/HowItWorks';
import { TransformationSlide } from './slides/TransformationSlide';
import { IntelligenceGapSlide } from './slides/IntelligenceGapSlide';
import { AIRevolutionSlide } from './slides/AIRevolutionSlide';
import { LiveDemoSlide } from './slides/LiveDemoSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { StrategicVisionSlide } from './slides/StrategicVisionSlide';
import { CallToActionSlide } from './slides/CallToActionSlide';

const slides = [
  StatusQuoSlide,
  IntroducingTechScanSlide,
  BreakthroughSlide,
  HowItWorksSlide,
  TransformationSlide,
  IntelligenceGapSlide,
  AIRevolutionSlide,
  LiveDemoSlide,
  BusinessModelSlide,
  StrategicVisionSlide,
  CallToActionSlide,
];

const slideNames = [
  'Status Quo',
  'Introducing TechScan',
  'Breakthrough',
  'How It Works',
  'The Transformation',
  'Intelligence Gap',
  'AI Revolution',
  'Live Demo',
  'Business Model',
  'Strategic Vision',
  'Call to Action',
];

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Header with navigation */}
      <header className="fixed top-0 z-50 w-full bg-brand-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src="/Tesch_Scan_IQ_Logo_Transparent.png" alt="TechScan IQ" className="h-8" />
              <div className="text-brand-gunmetal text-lg font-light">×</div>
              <div className="text-brand-gunmetal font-space text-lg font-medium">INTRALINKS</div>
            </div>
            
            {/* Slide counter */}
            <div className="font-ibm text-sm text-brand-gunmetal">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-1 mt-3 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-teal"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>

      {/* Slide navigation dots */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`block w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-brand-teal scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={slideNames[index]}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="fixed right-6 bottom-6 z-40 flex gap-3">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="sm"
          className="w-12 h-12 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          size="sm"
          className="w-12 h-12 rounded-full bg-brand-teal text-white hover:bg-brand-teal/90"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <CurrentSlideComponent onNext={nextSlide} onPrev={prevSlide} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}