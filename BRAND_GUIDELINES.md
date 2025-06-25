# TechScan IQ Brand Guidelines & Technical Implementation

## Brand Identity

### Mission Statement
TechScan IQ provides deep technical intelligence in 48 hours, analyzing any company's website and software to reveal hidden technical realities and market opportunities that determine true value.

### Brand Positioning
- **Tagline**: "Diligence, Decoded."
- **Value Proposition**: See what code is really worth
- **Key Differentiator**: AI-powered research that understands the strategic value of code

## Visual Identity

### Logo
- **Primary Logo**: `Tesch_Scan_IQ_Logo_Transparent.png`
- **Implementation**: 
  ```jsx
  <img src="/Tesch_Scan_IQ_Logo_Transparent.png" alt="TechScan IQ" className="h-12" />
  ```
- **Height**: 48px (h-12) in navigation, adjustable based on context

### Color Palette

#### Primary Colors
```css
/* Brand Colors */
--brand-black: #000000;
--brand-white: #FFFFFF;
--brand-teal: #00C2B2;
--brand-gunmetal: #2C2C2E;
```

#### Usage Guidelines
- **Brand Black (#000000)**: Primary text, high-emphasis elements
- **Brand White (#FFFFFF)**: Backgrounds, reversed text
- **Brand Teal (#00C2B2)**: CTAs, highlights, interactive elements, success states
- **Brand Gunmetal (#2C2C2E)**: Secondary text, subtle backgrounds

#### Supporting Colors
```css
/* Semantic Colors */
--red-400: #f87171;    /* Errors, critical warnings */
--orange-400: #fb923c; /* Medium warnings */
--yellow-400: #facc15; /* Low warnings */
--green-400: #4ade80;  /* Success states */
--gray-50: #f9fafb;    /* Light backgrounds */
--gray-200: #e5e7eb;   /* Borders */
--gray-600: #4b5563;   /* Muted text */
--gray-700: #374151;   /* Body text */
--gray-900: #111827;   /* Dark backgrounds */
```

## Typography

### Font Families
```css
/* Typography Stack */
font-family: 'Space Grotesk', sans-serif;    /* Headings */
font-family: 'IBM Plex Sans', sans-serif;    /* Body text */
font-family: 'IBM Plex Mono', monospace;     /* Code snippets */
```

### Implementation
```jsx
// Tailwind classes
className="font-space"  // Space Grotesk
className="font-ibm"    // IBM Plex Sans
className="font-mono"   // IBM Plex Mono
```

### Type Scale
```css
/* Headings */
.text-7xl { font-size: 4.5rem; }  /* Hero headlines */
.text-6xl { font-size: 3.75rem; } /* Section headlines */
.text-5xl { font-size: 3rem; }    /* Major headings */
.text-4xl { font-size: 2.25rem; } /* Sub-headings */
.text-2xl { font-size: 1.5rem; }  /* Card titles */
.text-xl  { font-size: 1.25rem; } /* Large body */
.text-lg  { font-size: 1.125rem; } /* Emphasized body */
.text-base { font-size: 1rem; }   /* Body text */
.text-sm  { font-size: 0.875rem; } /* Small text */
```

### Typography Rules
1. **Headings**: Always use Space Grotesk with medium weight (font-medium)
2. **Body Text**: IBM Plex Sans for all paragraph text
3. **Technical Content**: IBM Plex Mono for code, technical specifications
4. **Line Height**: Use Tailwind's `leading-tight` for headings, `leading-relaxed` for body

## Component Patterns

### Buttons

#### Primary Button (CTA)
```jsx
<Button className="bg-brand-teal text-brand-white hover:bg-brand-teal/90 font-space font-medium">
  Start Intelligence Scan
  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Button>
```

#### Secondary Button (Outline)
```jsx
<Button 
  variant="outline" 
  className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white font-space font-medium"
>
  View Sample Report
  <FileCode className="ml-2 h-5 w-5 group-hover:rotate-3 transition-transform" />
</Button>
```

#### White Button (on dark backgrounds)
```jsx
<Button 
  variant="outline" 
  className="border-2 border-white text-brand-black bg-white hover:bg-white/90 font-space font-medium"
>
  See Full Analysis Sample
</Button>
```

### Cards

#### Standard Card
```jsx
<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
  {/* Card content */}
</div>
```

#### Highlighted Card
```jsx
<div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-teal">
  {/* Card content */}
</div>
```

#### Dark Card
```jsx
<div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl">
  {/* Card content */}
</div>
```

### Motion & Animation

#### Standard Entry Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

#### Hover Effects
```jsx
// Scale on hover
whileHover={{ scale: 1.05 }}

// Lift on hover
whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 194, 178, 0.5)" }}

// Icon animations
className="group-hover:translate-x-1 transition-transform"
className="group-hover:rotate-3 transition-transform"
```

#### Continuous Animations
```jsx
// Pulsing shadow
animate={{
  boxShadow: [
    "0 20px 50px rgba(0,194,178,0.3)",
    "0 30px 70px rgba(0,194,178,0.5)",
    "0 20px 50px rgba(0,194,178,0.3)"
  ]
}}
transition={{ duration: 3, repeat: Infinity }}
```

## Layout Principles

### Spacing
```css
/* Standard spacing scale */
gap-3 (12px)  /* Tight spacing */
gap-4 (16px)  /* Default element spacing */
gap-6 (24px)  /* Section spacing */
gap-8 (32px)  /* Large spacing */
gap-12 (48px) /* Extra large spacing */

/* Section padding */
py-32 (128px) /* Standard section padding */
px-6 (24px)   /* Mobile horizontal padding */
px-8 (32px)   /* Desktop horizontal padding */
```

### Container Widths
```css
max-w-4xl  /* 896px - Content blocks */
max-w-5xl  /* 1024px - Standard sections */
max-w-6xl  /* 1152px - Wide sections */
max-w-7xl  /* 1280px - Full width sections */
```

### Grid Systems
```jsx
// Two column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

// Three column layout
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// Responsive 12-column grid
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
```

## Icons & Visual Elements

### Icon Library
- **Primary**: Lucide React icons
- **Size**: h-4 w-4 (small), h-5 w-5 (default), h-6 w-6 (medium), h-8 w-8 (large)
- **Common Icons**:
  - ArrowRight (CTAs)
  - Check (features, success)
  - AlertCircle (warnings)
  - Brain (AI/Intelligence)
  - Target (sales/goals)
  - TrendingUp (growth/PE)
  - Building2 (companies)

### Visual Accents
```jsx
// Bullet points
<div className="w-2 h-2 rounded-full bg-brand-teal" />

// Decorative gradients
className="bg-gradient-to-br from-brand-teal to-teal-600"
className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/5"
```

## Content Guidelines

### Voice & Tone
- **Professional**: Technical expertise without jargon
- **Direct**: Get to the point quickly
- **Confident**: Bold claims backed by evidence
- **Strategic**: Focus on business outcomes, not just technical details

### Headline Formulas
- **Value-driven**: "DEEP TECH INTELLIGENCE IN 48 HOURS"
- **Problem-solution**: "INTELLIGENCE THAT CHANGES OUTCOMES"
- **Comparative**: "HOW TECHNICAL ANALYSIS WORKS TODAY"
- **Process**: "FROM QUESTION TO INTELLIGENCE"

### CTAs
- Primary: "Start Intelligence Scan"
- Secondary: "View Sample Report", "See Full Analysis"
- Contextual: Include directional arrows (→) for progression

## Technical Implementation

### Tailwind Configuration
```javascript
// tailwind.config.js
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
  },
}
```

### Component Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── techscan/     # Brand-specific components
│       ├── landing-page.tsx
│       └── ...
└── pages/
    └── partnerships/ # Special pages
```

### Responsive Design
- **Mobile First**: Design for mobile, enhance for desktop
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- **Hidden Elements**: Use `hidden md:flex` for desktop-only elements

### Performance Considerations
- **Lazy Loading**: Use dynamic imports for heavy components
- **Image Optimization**: Use WebP format where possible
- **Animation Performance**: Use `transform` and `opacity` for animations
- **Bundle Size**: Monitor with `npm run build`

## Usage Examples

### Hero Section Pattern
```jsx
<section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
  <motion.div className="max-w-5xl mx-auto text-center space-y-8">
    <motion.h1 className="text-6xl md:text-7xl font-space font-medium leading-tight text-brand-black">
      DEEP TECH INTELLIGENCE
      <br />
      <span className="text-brand-teal">IN 48 HOURS.</span>
    </motion.h1>
    <motion.p className="text-xl md:text-2xl font-ibm text-brand-gunmetal">
      See what code is really worth.
    </motion.p>
  </motion.div>
</section>
```

### Feature Grid Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Feature content */}
    </motion.div>
  ))}
</div>
```

## Accessibility

### Color Contrast
- Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
- Test color combinations at https://webaim.org/resources/contrastchecker/

### Focus States
```css
/* Ensure visible focus indicators */
focus:ring-2 focus:ring-brand-teal focus:ring-offset-2
```

### Alternative Text
- Always include descriptive alt text for images
- Use aria-labels for icon-only buttons
- Provide screen reader context for decorative elements

## Maintenance

### Version Control
- Commit message format: `type: Brief description`
- Types: feat, fix, docs, style, refactor, test, chore

### Code Quality
- Run `npm run lint` before commits
- Run `npm run build` to check for TypeScript errors
- Follow ESLint configuration

### Testing
- Test responsive layouts at all breakpoints
- Verify animations on low-performance devices
- Check color contrast ratios
- Test with screen readers