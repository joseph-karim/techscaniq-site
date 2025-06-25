# TechScan IQ Technical Implementation Guide

## Quick Start Implementation

### 1. Install Required Dependencies

```bash
# Core dependencies
npm install framer-motion lucide-react

# Font dependencies (add to your index.html or _document.tsx)
```

```html
<!-- Add to <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 2. Update Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'brand': {
          'black': '#000000',
          'white': '#FFFFFF',
          'teal': '#00C2B2',
          'gunmetal': '#2C2C2E',
        },
      },
      animation: {
        'pulse-shadow': 'pulseShadow 3s ease-in-out infinite',
      },
      keyframes: {
        pulseShadow: {
          '0%, 100%': { boxShadow: '0 20px 50px rgba(0,194,178,0.3)' },
          '50%': { boxShadow: '0 30px 70px rgba(0,194,178,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 3. Create Base Components

#### Button Component
```typescript
// components/ui/TechScanButton.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechScanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}

export function TechScanButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className,
  ...props 
}: TechScanButtonProps) {
  const variants = {
    primary: 'bg-brand-teal text-brand-white hover:bg-brand-teal/90',
    secondary: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white',
    white: 'border-2 border-white text-brand-black bg-white hover:bg-white/90',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'font-space font-medium rounded-lg transition-all duration-200 flex items-center gap-2 group',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </motion.button>
  );
}
```

#### Card Component
```typescript
// components/ui/TechScanCard.tsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TechScanCardProps {
  variant?: 'default' | 'highlighted' | 'dark';
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TechScanCard({ 
  variant = 'default', 
  children, 
  className,
  delay = 0 
}: TechScanCardProps) {
  const variants = {
    default: 'bg-white border border-gray-200',
    highlighted: 'bg-white border-2 border-brand-teal',
    dark: 'bg-gradient-to-br from-gray-900 to-gray-800 text-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      className={cn(
        'rounded-2xl p-8 shadow-lg transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
```

#### Section Component
```typescript
// components/ui/TechScanSection.tsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TechScanSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function TechScanSection({ 
  children, 
  className,
  background = 'white' 
}: TechScanSectionProps) {
  const backgrounds = {
    white: 'bg-brand-white',
    gray: 'bg-gray-50',
  };

  return (
    <section className={cn(
      'py-32',
      backgrounds[background],
      className
    )}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
```

### 4. Create Custom Hooks

#### useAnimatedNumber Hook
```typescript
// hooks/useAnimatedNumber.ts
import { useState, useEffect } from 'react';

export function useAnimatedNumber(end: number, duration: number = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setValue(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return value;
}
```

#### useScrollProgress Hook
```typescript
// hooks/useScrollProgress.ts
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
```

### 5. Common Patterns

#### Hero Section Pattern
```typescript
// components/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TechScanButton } from '@/components/ui/TechScanButton';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <motion.div 
        className="max-w-5xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-space font-medium leading-tight text-brand-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          DEEP TECH INTELLIGENCE
          <br />
          <span className="text-brand-teal">IN 48 HOURS.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-ibm text-brand-gunmetal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          See what code is really worth.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TechScanButton variant="secondary" size="lg">
            View Sample Report
          </TechScanButton>
          <TechScanButton size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            Start Intelligence Scan
          </TechScanButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

#### Feature Grid Pattern
```typescript
// components/sections/FeatureGrid.tsx
import { TechScanCard } from '@/components/ui/TechScanCard';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Deep Technical Analysis',
    items: [
      'Line-by-line code inspection',
      'Architecture pattern recognition',
      'Security vulnerability detection',
    ],
  },
  // ... more features
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <TechScanCard key={index} delay={index * 0.1}>
          <h3 className="font-space text-2xl text-brand-black mb-6">
            {feature.title}
          </h3>
          <ul className="space-y-3">
            {feature.items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-brand-teal flex-shrink-0" />
                <span className="font-ibm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </TechScanCard>
      ))}
    </div>
  );
}
```

### 6. State Management Patterns

#### Global Theme Context
```typescript
// contexts/ThemeContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState('#00C2B2');

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
```

### 7. Performance Optimizations

#### Lazy Loading Components
```typescript
// App.tsx
import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const PartnershipPortal = lazy(() => import('./pages/partnerships/intralinks'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partnerships/intralinks" element={<PartnershipPortal />} />
      </Routes>
    </Suspense>
  );
}
```

#### Image Optimization
```typescript
// components/ui/OptimizedImage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function OptimizedImage({ src, alt, className }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onLoad={() => setIsLoaded(true)}
    />
  );
}
```

### 8. Responsive Design Utilities

```typescript
// utils/responsive.ts
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<keyof typeof breakpoints>('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.xl) setBreakpoint('xl');
      else if (width >= breakpoints.lg) setBreakpoint('lg');
      else if (width >= breakpoints.md) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}
```

### 9. Testing Guidelines

```typescript
// __tests__/components/TechScanButton.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TechScanButton } from '@/components/ui/TechScanButton';

describe('TechScanButton', () => {
  it('renders with correct variant styles', () => {
    render(<TechScanButton variant="primary">Test Button</TechScanButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-brand-teal');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<TechScanButton onClick={handleClick}>Click me</TechScanButton>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 10. Deployment Checklist

- [ ] Run `npm run build` to check for TypeScript errors
- [ ] Test all responsive breakpoints
- [ ] Verify font loading
- [ ] Check color contrast ratios
- [ ] Test animations on low-end devices
- [ ] Optimize images (WebP format)
- [ ] Add meta tags for SEO
- [ ] Configure server-side routing (vercel.json or _redirects)
- [ ] Set up environment variables
- [ ] Enable gzip compression
- [ ] Configure CDN for assets
- [ ] Set up monitoring (Sentry, Analytics)