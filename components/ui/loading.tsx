import { useEffect, useState, useRef } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const vPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  
  useEffect(() => {
    // V path'inin uzunluğunu al
    if (vPathRef.current) {
      const length = vPathRef.current.getTotalLength();
      setPathLength(length);
      
      // Başlangıçta path'i tamamen görünmez yap
      vPathRef.current.style.strokeDasharray = `${length}`;
      vPathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);
  
  useEffect(() => {
    // Daha doğal bir dolum için easing fonksiyonu
    const easeOutQuad = (t: number) => t * (2 - t);
    
    let startTime: number | null = null;
    const duration = 1500; // 2 saniye içinde dolsun
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing fonksiyonu ile daha doğal bir dolum
      setProgress(easeOutQuad(progress) * 120);
      
      // V path'inin stroke-dashoffset'ini güncelle
      if (vPathRef.current && pathLength > 0) {
        const drawLength = pathLength * (1 - easeOutQuad(progress));
        vPathRef.current.style.strokeDashoffset = `${drawLength}`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    if (pathLength > 0) {
      requestAnimationFrame(animate);
    }
    
    return () => {
      startTime = null;
    };
  }, [pathLength]);

  return (
    <div className="flex justify-center items-center h-full w-full fixed top-0 left-0 bg-white z-1000">
      <div className="w-[300px] h-[300px] relative">
        <svg viewBox="0 0 1345 1427" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Gradient tanımı */}
          <defs>
            <linearGradient id="v-fill-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset={`${Math.max(0, progress-10)}%`} stopColor="#ffffff" />
              <stop offset={`${progress}%`} stopColor="#0F171F" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Background hexagon */}
          <path 
            d="M656 100h20l12 1 9 2 13 2 8 3 14 5 5 3 11 6 14 8 15 8 13 8 11 6 11 7 12 6 5 3 11 7 11 6 5 3 14 8 17 10 11 6 13 8 14 8 11 6 13 8 11 6 13 8 12 7 6 3 14 8 13 8 14 8 10 6 11 6 21 12 29 17 6 3 14 8 18 11 19 13 11 9 13 14 9 11 8 13 4 8 5 14 3 10 4 19 2 21v289l-1 166-1 22-4 24-4 13-5 15-10 16-11 14-9 10-5 6-6 4-12 9-14 10-14 8-15 8-24 14-13 8-11 6-16 9-8 5-11 6-13 8-10 6-12 6-12 7-4 3-11 6-17 10-11 6-10 6-11 6-11 7-18 10-12 7-14 8-13 8-17 10-12 6-9 6-11 6-20 12-15 8-24 14-18 8-12 4-14 2-2 1-13 1h-21l-14-1-6-2-13-2-13-5-15-7-9-5-14-8-8-5-12-6-9-6-12-6-9-6-13-8-14-7-13-8-20-12-41-23-9-6-9-5-7-4-17-10-14-8-12-7-9-6-14-7-12-7-9-6-6-3-13-8-11-6-17-9-18-11-7-4-10-6-22-12-13-8-8-6-13-10-8-6-8-8-13-17-9-14-7-17-3-9-4-18-3-22v-474l4-25 5-20 7-17 6-9 4-7 8-9 8-10 9-9 11-8 18-12 13-8 10-6 11-6 17-9 4-3 9-5 11-7 33-18 9-6 11-6 24-14 11-6 20-12 12-7 9-6 7-3 12-7 4-3 11-6 20-12 17-9 8-5 11-6 9-6 11-6 10-6 11-6 14-8 11-7 13-8 14-9 19-10 11-4 6-2 5-2 17-2z" 
            fill="#0F171F"
          />
          
          {/* V outline - çizgi animasyonu için */}
          <path 
            ref={vPathRef}
            d="M430 320h43l14 3 13 3 9 3 9 5 11 7 6 5 5 6 5 5 7 9 8 16 3 11 1 14v31l-2 17-4 19-3 9-7 19-6 17-3 8-7 17-3 10-4 9-5 12-5 14-4 9-7 16-3 7-7 19-8 19-5 10-4 9-6 16-4 9-5 15-5 10-4 11-5 11-3 7-7 18-4 10-4 13-6 15-7 20-5 14-5 17-3 8-6 28-5 21-3 22-1 4-1 13v36l1 9 4 16 5 9 3 5v2h2l5 5 11 6 10 3 15 1 12-1 15-4 9-3 19-9 9-6 11-6 17-12 22-18 16-14 13-12 7-9 6-4 7-8 13-14 6-8h2l2-4h2l2-4 12-14 13-16 11-14 12-15h2l2-4 6-10 14-18 10-13 10-16 10-13 8-11 4-7 7-10 10-16 7-10 4-6 9-14 5-9 11-16 8-13 11-18 16-27 4-5 10-17 6-12 4-5 11-19 7-11 6-10 3-7 9-16 8-13 10-17 10-19 10-17 5-8 5-9 9-17 6-10 6-12 10-15 8-15 5-10 6-6h2l1-3 11-5h18l13 5 3 3 7 6 6 12v19l-6 12-6 11-4 7-7 11-6 12-9 16-3 6h-2l-2 6-5 9-8 13-6 11-9 17h-2l-2 7-6 8-6 12-6 9-3 7-6 11-1 2h-2l-2 6-11 18-6 10-7 13-6 9-6 11-6 9-3 6-8 13-7 13-6 8-4 7-4 5-6 11-6 9-6 11-6 8-5 9-7 10-7 11-8 13-5 6-3 5-9 13-7 10-8 12-8 11-4 6-8 11-6 8-9 13-12 15h-2l-2 5-10 13-8 10-8 9-11 14-9 11-14 15-11 12-5 6-5 5h-2l-2 4h-2l-2 4h-2l-2 4-6 7-4 1-2 4h-2l-1 3-8 7-11 10-7 5-3 3h-2l-1 3-6 5-10 7-22 16-5 2v2l-6 3-19 10-7 4-7 3-9 2v2l-9 3-4 2-9 2-4 2-11 1-5 2-7 1h-29l-11-2-15-3-13-5-16-8-6-4-11-8v-2l-4-1-7-8-6-7-7-10-5-10-8-24-2-8-3-16-1-6v-55l2-10 2-16 1-2 2-15 6-26 3-16 6-20 5-17 4-10 9-25 6-15 2-10 10-24 5-13 4-8 12-30 4-12 4-9 11-25 4-8 4-10 10-26 4-9 8-19 4-10 6-13 7-19 8-21 11-28 4-13 6-19 3-18v-23l-4-8-8-4-7-2-1-1-8-1h-21l-10 1-3 2-11 2-7 3h-4v2l-8 4-13 10h-2l-1 3-4 1-1 3-8 7-8 10h-2l-2 6-6 8-9 15-4 9-3 7-3 9-5 16-2 10-5 23-3 29-2 15-1 16-6 12-6 7-11 6h-24l-10-5-5-4-7-10-3-12v-14l2-28 5-33 4-18 4-15 3-10 4-15 12-27 21-35 6-8 7-7 7-8 12-13 7-6 18-12 10-7 9-5 13-5 11-4 6-2z" 
            fill="transparent"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* V dolum - içini doldurmak için */}
          <path 
            d="M430 320h43l14 3 13 3 9 3 9 5 11 7 6 5 5 6 5 5 7 9 8 16 3 11 1 14v31l-2 17-4 19-3 9-7 19-6 17-3 8-7 17-3 10-4 9-5 12-5 14-4 9-7 16-3 7-7 19-8 19-5 10-4 9-6 16-4 9-5 15-5 10-4 11-5 11-3 7-7 18-4 10-4 13-6 15-7 20-5 14-5 17-3 8-6 28-5 21-3 22-1 4-1 13v36l1 9 4 16 5 9 3 5v2h2l5 5 11 6 10 3 15 1 12-1 15-4 9-3 19-9 9-6 11-6 17-12 22-18 16-14 13-12 7-9 6-4 7-8 13-14 6-8h2l2-4h2l2-4 12-14 13-16 11-14 12-15h2l2-4 6-10 14-18 10-13 10-16 10-13 8-11 4-7 7-10 10-16 7-10 4-6 9-14 5-9 11-16 8-13 11-18 16-27 4-5 10-17 6-12 4-5 11-19 7-11 6-10 3-7 9-16 8-13 10-17 10-19 10-17 5-8 5-9 9-17 6-10 6-12 10-15 8-15 5-10 6-6h2l1-3 11-5h18l13 5 3 3 7 6 6 12v19l-6 12-6 11-4 7-7 11-6 12-9 16-3 6h-2l-2 6-5 9-8 13-6 11-9 17h-2l-2 7-6 8-6 12-6 9-3 7-6 11-1 2h-2l-2 6-11 18-6 10-7 13-6 9-6 11-6 9-3 6-8 13-7 13-6 8-4 7-4 5-6 11-6 9-6 11-6 8-5 9-7 10-7 11-8 13-5 6-3 5-9 13-7 10-8 12-8 11-4 6-8 11-6 8-9 13-12 15h-2l-2 5-10 13-8 10-8 9-11 14-9 11-14 15-11 12-5 6-5 5h-2l-2 4h-2l-2 4h-2l-2 4-6 7-4 1-2 4h-2l-1 3-8 7-11 10-7 5-3 3h-2l-1 3-6 5-10 7-22 16-5 2v2l-6 3-19 10-7 4-7 3-9 2v2l-9 3-4 2-9 2-4 2-11 1-5 2-7 1h-29l-11-2-15-3-13-5-16-8-6-4-11-8v-2l-4-1-7-8-6-7-7-10-5-10-8-24-2-8-3-16-1-6v-55l2-10 2-16 1-2 2-15 6-26 3-16 6-20 5-17 4-10 9-25 6-15 2-10 10-24 5-13 4-8 12-30 4-12 4-9 11-25 4-8 4-10 10-26 4-9 8-19 4-10 6-13 7-19 8-21 11-28 4-13 6-19 3-18v-23l-4-8-8-4-7-2-1-1-8-1h-21l-10 1-3 2-11 2-7 3h-4v2l-8 4-13 10h-2l-1 3-4 1-1 3-8 7-8 10h-2l-2 6-6 8-9 15-4 9-3 7-3 9-5 16-2 10-5 23-3 29-2 15-1 16-6 12-6 7-11 6h-24l-10-5-5-4-7-10-3-12v-14l2-28 5-33 4-18 4-15 3-10 4-15 12-27 21-35 6-8 7-7 7-8 12-13 7-6 18-12 10-7 9-5 13-5 11-4 6-2z" 
            fill="url(#v-fill-gradient)"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`
            }}
          />
          
          {/* Animasyon sırasında hafif parıltı efekti */}
          
        </svg>
      </div>
    </div>
  );
};

export default Loading;
  