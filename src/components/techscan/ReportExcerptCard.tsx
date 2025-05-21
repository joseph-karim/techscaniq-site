import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function ReportExcerptCard() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [autoExpanding, setAutoExpanding] = useState(true);

  // Sections data
  const sections = [
    {
      id: "summary",
      title: "Summary Verdict",
      content: "⚠️ Moderate risk — suitable for current traction, but limited for scale.",
      isWarning: true
    },
    {
      id: "structure",
      title: "🧱 Code Structure & Modularity",
      items: [
        "Monolithic architecture (single JS bundle)",
        "No microservices or containerization",
        "Limited ability to scale features independently"
      ]
    },
    {
      id: "api",
      title: "🕸 API Design & Documentation",
      items: [
        "RESTful endpoints inferred",
        "Lacks visible documentation",
        "Risk of failure in auth/billing paths"
      ]
    },
    {
      id: "devops",
      title: "⚙️ DevOps & Deployment",
      items: [
        "Only GitHub Actions CI detected",
        "Manual deploy inferred",
        "No rollout strategies observed"
      ]
    },
    {
      id: "infrastructure",
      title: "🔧 Infrastructure Flexibility",
      items: [
        "Hosted on Vercel (speed > control)",
        "No autoscaling/container orchestration"
      ]
    },
    {
      id: "techdebt",
      title: "📊 Tech Debt Warning",
      items: [
        "Bootstrap 4 in use (legacy)",
        "No automated test coverage"
      ]
    },
    {
      id: "commentary",
      title: "🗣 Analyst Commentary",
      quote: '"The team has clearly optimized for speed and iteration — but future-proofing is limited..."'
    }
  ];

  // Auto expand sections with delay
  useEffect(() => {
    if (!autoExpanding) return;
    
    let currentIndex = 0;
    
    const expandInterval = setInterval(() => {
      if (currentIndex < sections.length) {
        setOpenSections(prev => [...prev, sections[currentIndex].id]);
        currentIndex++;
      } else {
        clearInterval(expandInterval);
        setAutoExpanding(false);
      }
    }, 800);
    
    return () => clearInterval(expandInterval);
  }, [autoExpanding]);

  const handleAccordionChange = (value: string) => {
    setAutoExpanding(false);
    
    if (openSections.includes(value)) {
      setOpenSections(openSections.filter(v => v !== value));
    } else {
      setOpenSections([...openSections, value]);
    }
  };

  return (
    <div className="bg-[#12263A] p-6 rounded-xl border border-[#1E3A5F] shadow-lg transition-all hover:shadow-cyan-500/10 font-mono">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <span className="text-yellow-400 mr-2">🔍</span> 
        Scalability & Architecture
      </h3>
      
      <Accordion 
        type="multiple" 
        value={openSections} 
        onValueChange={(v) => setAutoExpanding(false)}
        className="border-0"
      >
        {sections.map((section) => (
          <AccordionItem 
            key={section.id} 
            value={section.id} 
            className="border-b border-[#1E3A5F] last:border-0"
          >
            <AccordionTrigger 
              onClick={() => handleAccordionChange(section.id)}
              className="hover:no-underline py-3 px-2 rounded-t-lg hover:bg-[#1E3A5F]/20 text-left font-medium"
            >
              {section.id === "summary" ? (
                <div className="bg-[#0A1A2F]/60 p-2 rounded flex items-center w-full">
                  <span className="text-yellow-400 mr-2">⚠️</span>
                  <span className="font-medium">{section.content}</span>
                </div>
              ) : (
                <span className={section.id === "summary" ? "text-yellow-400" : "text-yellow-400"}>{section.title}</span>
              )}
            </AccordionTrigger>
            
            <AccordionContent className="pt-3 px-2">
              {section.items && (
                <ul className="space-y-1 text-gray-300 pl-5">
                  {section.items.map((item, index) => (
                    <li key={index} className="list-none flex">
                      <span className="mr-2">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.quote && (
                <p className="text-gray-300 italic pl-2 border-l-2 border-[#1E3A5F]">
                  {section.quote}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}