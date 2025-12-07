import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  // 1. SCROLL OBSERVER LOGIC
  // This hook handles the "fade in on scroll" animations
  useEffect(() => {
    // Only run the observer after the initial intro animation is mostly done
    if (!isLoaded) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once visible to prevent re-triggering
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoaded]);

  // Initial loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 800) 
    return () => clearTimeout(timer)
  }, [])

  return (
    // MAIN WRAPPER: Ensures full width and correct font
    <div className="min-h-screen w-full bg-[#F2EFE9] text-[#1A1818] relative overflow-x-hidden font-mono selection:bg-[#BE1E5D] selection:text-white">

      {/* --------------------------------------------------
          INTRO ANIMATION
          -------------------------------------------------- 
      */}
      <div className={`fixed inset-0 z-[100] bg-[#2A4A36] transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] delay-200 ${
        isLoaded ? '-translate-y-full' : 'translate-y-0'
      }`} style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}></div>

      <div className={`fixed inset-0 z-[110] bg-[#BE1E5D] transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] delay-100 ${
        isLoaded ? '-translate-y-full' : 'translate-y-0'
      }`} style={{clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 100%)'}}></div>

      <div className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#1A1818] transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isLoaded ? '-translate-y-full' : 'translate-y-0'
      }`} style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)'}}>
        <h1 className="text-[#F2EFE9] text-5xl md:text-8xl font-black tracking-tighter uppercase animate-pulse transform -rotate-2">
          The Seasons
        </h1>
      </div>

      {/* --------------------------------------------------
          MAIN CONTENT
          -------------------------------------------------- 
      */}

      {/* HERO SECTION 
      */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F2EFE9] overflow-hidden">
        
        {/* Animated Background Blobs (Full Screen) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#BE1E5D] opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#6BAF58] opacity-10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")'}}
        ></div>
        
        <div className="relative z-10 px-6 max-w-7xl w-full">
          {/* Main Title Container */}
          <div 
            className={`bg-white p-12 md:p-24 shadow-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{
              clipPath: 'polygon(2% 0%, 98% 2%, 100% 95%, 80% 100%, 2% 98%)',
              filter: 'drop-shadow(10px 10px 0px rgba(42, 74, 54, 1))' 
            }}
          >
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block bg-[#1A1818] text-white px-6 py-3 mb-2 transform -rotate-2 rounded-[55%_45%_35%_65%/65%_35%_65%_35%] shadow-lg">
                <h1 className="text-xl font-bold uppercase tracking-widest">
                  Artifact #3
                </h1>
              </div>
              
              <div className="border-b-4 border-[#1A1818] border-dashed pb-8 transform rotate-1">
                <h2 className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter text-[#1A1818]">
                  Multimodal<br />Research Project
                </h2>
              </div>
              
              {/* Organic Title Blocks */}
              <div className="flex flex-col md:flex-row gap-6 mt-12 items-center justify-center md:justify-start">
                {/* Title Card */}
                <div className={`bg-[#BE1E5D] p-8 w-full md:w-auto transform -rotate-3 rounded-[20px_255px_20px_255px/255px_20px_255px_20px] shadow-lg transition-transform hover:scale-105 duration-300`}>
                  <p className="text-3xl md:text-5xl font-black text-white italic text-center">
                    THE SEASONS
                  </p>
                  <p className="text-xl font-bold text-white mt-2 text-center">
                    (Lee Krasner, 1957)
                  </p>
                </div>
                
                {/* Me */}
                <div className={`bg-[#6BAF58] p-8 w-full md:w-auto transform rotate-2 rounded-[255px_20px_255px_20px/20px_255px_20px_255px] shadow-lg transition-transform hover:scale-105 duration-300`}>
                   <p className="text-xl md:text-3xl font-black text-white text-center">
                    by Luigi Fernandez
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className={`mt-16 flex justify-center transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-[#2A4A36] w-20 h-20 flex items-center justify-center animate-bounce rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-lg cursor-pointer hover:bg-[#1A1818] transition-colors">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#F2EFE9]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PAINTING DISPLAY SECTION 
         Uses 'bg-white' on the SECTION tag to ensure the white bar goes full width.
      */}
      <section className="py-24 relative w-full bg-white border-y-8 border-[#1A1818]">
        {/* Jagged Divider Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -mt-1">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-[#1A1818]">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Painting Container - Slide In Left */}
            <div className="col-span-12 md:col-span-9 relative animate-on-scroll slide-right">
              {/* Backing shape */}
              <div className="absolute inset-0 bg-[#BE1E5D] transform rotate-1 rounded-[2%] shadow-[12px_12px_0px_0px_#1A1818]" style={{clipPath: 'polygon(0 5%, 100% 0, 95% 100%, 0% 100%)'}}></div>
              
              {/* The Painting */}
              <div className="relative bg-white p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out" style={{clipPath: 'polygon(1% 1%, 99% 0%, 100% 98%, 0% 100%)'}}>
                <div className="bg-neutral-200 aspect-[2.2/1] w-full flex items-center justify-center relative overflow-hidden group cursor-crosshair">
                  <span className="text-neutral-500 font-bold tracking-widest group-hover:scale-110 transition-transform duration-700">[INSERT PAINTING IMAGE HERE]</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>
              
              <div className="pl-6 mt-8 border-l-4 border-[#2A4A36]">
                <p className="font-bold text-lg uppercase tracking-wide">Fig 1. Lee Krasner, <span className="italic">The Seasons</span>, 1957.</p>
                <p className="text-sm text-neutral-600 italic">Oil and house paint on canvas, 92 3/4 x 203 7/8 in.</p>
              </div>
            </div>
            
            {/* Organic Detail Blobs - Pop In */}
            <div className="col-span-12 md:col-span-3 space-y-8 flex flex-col items-center md:items-end">
               <div className="animate-on-scroll pop-in delay-100 bg-[#F2EFE9] p-4 w-48 h-48 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_#2A4A36] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[50%] transition-all duration-500 overflow-hidden border-4 border-[#1A1818]">
                  <div className="bg-neutral-300 w-24 h-24 mb-2 rounded-full"></div>
                  <p className="font-bold text-xs uppercase bg-white px-2">[Detail 1]</p>
               </div>
               
               <div className="animate-on-scroll pop-in delay-200 bg-[#BE1E5D] p-4 w-56 h-56 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_#1A1818] rounded-[68%_32%_47%_53%/44%_53%_47%_56%] hover:rotate-12 transition-all duration-500 overflow-hidden border-4 border-[#F2EFE9]">
                  <div className="bg-neutral-300 w-28 h-28 mb-2 rounded-full mix-blend-screen"></div>
                  <p className="font-bold text-xs uppercase bg-white px-2 text-[#BE1E5D]">[Detail 2]</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DESCRIPTION SECTION 
         Uses 'bg-[#2A4A36]' on the SECTION tag to ensure the Green Forest color fills the screen.
      */}
      <section className="relative py-24 w-full bg-[#2A4A36] text-[#F2EFE9] overflow-hidden">
        {/* Background Accent Shape */}
        <div className="absolute top-40 right-[-10%] w-[30vw] h-[60vh] bg-[#6BAF58] opacity-20 rounded-[100px] transform -rotate-12 blur-2xl"></div>

        {/* Jagged Divider Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-[#F2EFE9]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 relative z-20">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Sticky Title - Slide In Left */}
            <div className="col-span-12 md:col-span-4">
              <div className="sticky top-12 animate-on-scroll slide-right">
                <div className="bg-[#BE1E5D] p-10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" 
                     style={{clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)'}}>
                  <h2 className="text-5xl md:text-7xl font-black uppercase leading-none break-words">
                    What Do<br/>You See?
                  </h2>
                  <div className="w-24 h-24 bg-[#F2EFE9] rounded-full absolute -top-10 -right-10 opacity-50 mix-blend-overlay"></div>
                  <p className="font-bold uppercase tracking-widest text-[#F2EFE9] mt-4 border-t-2 border-[#F2EFE9] pt-4 inline-block">
                    Visual Description
                  </p>
                </div>
              </div>
            </div>
            
            {/* Text Content - Slide In Up */}
            <div className="col-span-12 md:col-span-8">
              <div className="animate-on-scroll fade-up bg-[#F2EFE9] text-[#1A1818] p-10 md:p-16 shadow-[20px_20px_0px_0px_#1A1818] transform rotate-1"
                   style={{clipPath: 'polygon(2% 0%, 99% 1%, 100% 98%, 1% 99%)'}}>
                <p className="text-lg leading-relaxed mb-6 font-medium">
                  [Opening paragraph: Begin with the immediate visual impact of the work. Discuss the sweeping scale and the interplay of the organic forms. Ensure you cite your observations if referring to specific critiques: "The forms suggest a garden in bloom" (Critic 24).]
                </p>
                
                {/* Pull Quote */}
                <div className="my-10 relative animate-on-scroll pop-in">
                   <div className="absolute inset-0 bg-[#6BAF58] transform -rotate-1 skew-x-12 opacity-30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-110"></div>
                   <p className="relative text-2xl font-black italic text-[#2A4A36] text-center px-8 py-4">
                     "Quote regarding the visual nature of the work." (Author Page)
                   </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  [Second paragraph: Focus on color. Describe the specific fleshy pinks and deep greens. How do they interact? Use citations: (Author Page).]
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  [Third paragraph: Discuss the line work and composition. Are the lines aggressive or fluid? Continue until you reach the ~700 word requirement.]
                </p>
                
                <p className="text-lg leading-relaxed">
                  [Closing visual description paragraph.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Area */}
      <div className="h-32 w-full bg-[#F2EFE9] relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[#BE1E5D]" style={{clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)'}}></div>
      </div>

      {/* ANALYSIS SECTION 
         Uses 'bg-[#F2EFE9]' to fill screen.
      */}
      <section className="relative py-24 w-full bg-[#F2EFE9] overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute bottom-0 left-[-100px] w-96 h-96 border-[20px] border-[#6BAF58] opacity-20 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="mb-16 text-center animate-on-scroll fade-up">
             <div className="inline-block bg-[#1A1818] px-12 py-6 transform -rotate-1 rounded-[5px_50px_5px_50px] shadow-[10px_10px_0px_0px_#BE1E5D]">
               <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
                 Analysis & Interpretation
               </h2>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             {/* Analysis Text */}
             <div className="order-2 md:order-1 border-l-[12px] border-[#BE1E5D] pl-8 py-2 border-dashed animate-on-scroll slide-right">
               <p className="text-lg leading-relaxed mb-6">
                 [Analysis Paragraph 1: Interpret the meaning. Connect the "seasons" title to the cycle of life and death often discussed in Krasner's work during this period. Include citations: (Author Page).]
               </p>
               <p className="text-lg leading-relaxed mb-6">
                 [Analysis Paragraph 2: Discuss the historical context (Abstract Expressionism, 1957). How does this work reflect the era or deviate from it? Include citations: (Author Page).]
               </p>
               <p className="text-lg leading-relaxed">
                 [Conclusion: Summarize the significance of the work.]
               </p>
             </div>

             {/* Artist Photo Snapshot */}
             <div className="order-1 md:order-2 flex justify-center animate-on-scroll pop-in">
               <div className="bg-white p-4 shadow-xl transform rotate-3 w-80 relative hover:rotate-6 transition-transform duration-300">
                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2A4A36] rounded-full z-20"></div>
                 <div className="bg-neutral-200 aspect-[3/4] w-full mb-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                   <span className="text-sm font-bold">[PHOTO OF LEE KRASNER]</span>
                 </div>
                 <p className="font-mono text-xs text-center border-t border-dashed border-[#1A1818] pt-2">
                   Lee Krasner in her studio.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* WORKS CITED 
         Full width Black background.
      */}
      <section className="relative py-24 w-full bg-[#1A1818] text-[#F2EFE9] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE1E5D] opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A4A36] opacity-30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 animate-on-scroll fade-up">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E5D] to-[#6BAF58]">
            Works Cited
          </h2>
          <div className="font-mono text-sm space-y-6 border-l-2 border-[#6BAF58] pl-8">
            <p className="-indent-8 ml-8 hover:text-[#BE1E5D] transition-colors cursor-default">
              Krasner, Lee. <em>The Seasons</em>. 1957, Whitney Museum of American Art, New York.
            </p>
            <p className="-indent-8 ml-8 hover:text-[#BE1E5D] transition-colors cursor-default">
              [Last Name, First Name. "Article Title." <em>Journal Title</em>, vol. #, no. #, Year, pp. #-#.]
            </p>
            <p className="-indent-8 ml-8 hover:text-[#BE1E5D] transition-colors cursor-default">
              [Source 3 formatted in MLA...]
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#BE1E5D] py-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-8 bg-white" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}></div>
         <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-sm md:text-base font-mono uppercase tracking-wide">
            A multimodal research project by [Your Name] for Dr. Sturm's Fall 2025 ENGL 1102 course at Georgia State University
          </p>
        </div>
      </footer>

      {/* ANIMATION STYLES 
          Injecting CSS directly for the Intersection Observer animations
      */}
      <style jsx>{`
        /* Base class for elements to animate */
        .animate-on-scroll {
          opacity: 0;
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 1. Fade Up */
        .fade-up {
          transform: translateY(40px);
        }
        .fade-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 2. Slide In Right */
        .slide-right {
          transform: translateX(-50px);
        }
        .slide-right.is-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* 3. Pop In (Scale) */
        .pop-in {
          transform: scale(0.8);
        }
        .pop-in.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* Stagger delays */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </div>
  )
}

export default App