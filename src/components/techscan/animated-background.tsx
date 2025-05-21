import { useEffect, useRef } from "react";

export function AnimatedBackground({ 
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
    
    // Create gradient points
    const points = [
      { x: 0, y: 0, dx: 0.2, dy: 0.3, color: "#0A377F" },
      { x: canvas.width, y: 0, dx: -0.2, dy: 0.2, color: "#06182E" },
      { x: canvas.width / 2, y: canvas.height / 2, dx: 0.3, dy: 0.1, color: "#0E4499" },
      { x: 0, y: canvas.height, dx: 0.1, dy: -0.2, color: "#022E5A" },
      { x: canvas.width, y: canvas.height, dx: -0.1, dy: -0.1, color: "#084694" },
    ];
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update points position
      points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;
        
        // Bounce off walls
        if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;
      });
      
      // Create gradient using points
      const drawGradient = () => {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width * 0.8
        );
        
        points.forEach((point, index) => {
          const stop = index / (points.length - 1);
          gradient.addColorStop(stop, point.color);
        });
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add mesh effect
        ctx.globalCompositeOperation = "multiply";
        
        // Draw mesh using bezier curves
        ctx.strokeStyle = "rgba(10, 30, 60, 0.03)";
        ctx.lineWidth = 1;
        
        // Create a mesh grid
        const gridSize = 40;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          
          // Add some wave to the lines
          for (let y = 0; y < canvas.height; y += gridSize / 2) {
            const offsetX = Math.sin(y / 30 + Date.now() / 3000) * 5;
            ctx.lineTo(x + offsetX, y);
          }
          
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          
          // Add some wave to the lines
          for (let x = 0; x < canvas.width; x += gridSize / 2) {
            const offsetY = Math.sin(x / 30 + Date.now() / 2000) * 5;
            ctx.lineTo(x, y + offsetY);
          }
          
          ctx.stroke();
        }
        
        // Reset composite operation
        ctx.globalCompositeOperation = "source-over";
      };
      
      drawGradient();
      
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
        style={{ opacity: 0.6 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}