import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { PitchDeck } from './components/PitchDeck';

export function IntralinksPartnershipPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isWrong, setIsWrong] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'intralinks2025') {
      setIsAuthenticated(true);
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 2000);
    }
  };

  if (isAuthenticated) {
    return <PitchDeck />;
  }

  return (
    <div className="min-h-screen bg-brand-white flex flex-col items-center justify-center px-6">
      <motion.div 
        className="max-w-md w-full text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logos */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-8">
            <img src="/Tesch_Scan_IQ_Logo_Transparent.png" alt="TechScan IQ" className="h-12" />
            <div className="text-brand-gunmetal text-2xl font-light">×</div>
            <div className="text-brand-gunmetal font-space text-xl font-medium">INTRALINKS</div>
          </div>
          
          <div className="space-y-2">
            <h1 className="font-space text-3xl md:text-4xl text-brand-black font-medium">
              The Future of Deal Intelligence
            </h1>
            <p className="font-ibm text-brand-gunmetal">
              December 2024
            </p>
          </div>
        </div>

        {/* Password Form */}
        <motion.form 
          onSubmit={handlePasswordSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="space-y-2">
            <label className="font-ibm text-sm text-brand-gunmetal">
              Enter Access Code
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`text-center font-mono text-lg tracking-wider ${
                isWrong ? 'border-red-500 bg-red-50' : 'border-brand-gunmetal/20'
              }`}
              placeholder="___________________"
              autoComplete="off"
            />
            <AnimatePresence>
              {isWrong && (
                <motion.p 
                  className="text-red-500 text-sm font-ibm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Incorrect access code
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-ibm font-medium py-3"
          >
            Access Partnership Portal
          </Button>
        </motion.form>

        <motion.div 
          className="text-xs text-brand-gunmetal/60 font-ibm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Confidential & Proprietary
        </motion.div>
      </motion.div>
    </div>
  );
}