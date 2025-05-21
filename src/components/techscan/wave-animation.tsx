import { useEffect, useRef } from "react";

export function WaveBackground({ 
  children,
  className
}: { 
  children: React.ReactNode,
  className?: string 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial setup
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);
    
    // Create wave parameters
    const waves = [
      { wavelength: 200, amplitude: 25, speed: 0.03, color: "rgba(34, 211, 238, 0.05)" },
      { wavelength: 100, amplitude: 15, speed: 0.07, color: "rgba(8, 145, 178, 0.05)" },
      { wavelength: 50, amplitude: 10, speed: 0.05, color: "rgba(14, 68, 153, 0.04)" }
    ];
    
    let phase = 0;
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update phase for wave movement
      phase += 0.005;
      
      // Draw waves
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x / wave.wavelength + phase * wave.speed) * wave.amplitude + canvas.height / 2;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = wave.color;
        ctx.fill();
      });
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className={`relative ${className || ""}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}