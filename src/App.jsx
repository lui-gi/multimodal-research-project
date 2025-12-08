import { useState, useEffect, useRef } from 'react'

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
          Artifact #3
        </h1>
      </div>

      {/* --------------------------------------------------
          MAIN CONTENT
          -------------------------------------------------- 
      */}

      {/* HERO SECTION 
      */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F2EFE9] overflow-hidden pt-5">
        
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
            <div className="col-span-12 md:col-span-9 animate-on-scroll slide-right">
              
              {/* Painting + Backing Wrapper */}
              {/* This relative wrapper ensures the absolute pink shape is confined here */}
              <div className="relative">
                  {/* Backing shape */}
                  <div className="absolute inset-0 bg-[#BE1E5D] transform rotate-1 rounded-[2%] shadow-[12px_12px_0px_0px_#1A1818]" style={{clipPath: 'polygon(0 5%, 100% 0, 95% 100%, 0% 100%)'}}></div>
                  
                  {/* The Painting */}
                  <div className="relative bg-white p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out" style={{clipPath: 'polygon(1% 1%, 99% 0%, 100% 98%, 0% 100%)'}}>
                    <div className="bg-neutral-200 aspect-[2.2/1] w-full flex items-center justify-center relative overflow-hidden group cursor-crosshair">
                      <span className="text-neutral-500 font-bold tracking-widest group-hover:scale-110 transition-transform duration-700"><img src="./public/the-seasons.jpeg"></img></span>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </div>
                  </div>
              </div>
              
              {/* Caption - Now outside the relative wrapper so it flows below */}
              <div className="pl-6 mt-8 border-l-4 border-[#2A4A36]">
                <p className="font-bold text-lg uppercase tracking-wide">Lee Krasner, <span className="italic">The Seasons</span>, 1957.</p>
                <p className="text-sm text-neutral-600 italic">
                  Oil and house paint on canvas, 92 3/4 x 203 7/8 in.
                </p>
                <p className="text-sm text-neutral-600 italic">
                  Detail 1: "breastlike forms" (Hobbs 5). Detail 2: leafy-green patches
                </p>
              </div>
            </div>
            
            
            {/* Organic Detail Blobs - Pop In */}
            <div className="col-span-12 md:col-span-3 space-y-8 flex flex-col items-center md:items-end">
              <div className="animate-on-scroll pop-in delay-100 bg-[#F2EFE9] p-6 w-65 h-65 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_#2A4A36] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hover:rounded-[50%] transition-all duration-500 overflow-hidden border-4 border-[#1A1818]">
                  <img src="./public/breastlike.png" className="w-56 h-56 object-cover rounded-full mb-3 border-4 border-[#1A1818]"></img>
                  <p className="font-bold text-sm uppercase bg-white px-3 py-1 shadow-md">[Detail 1]</p>
              </div>
              
              <div className="animate-on-scroll pop-in delay-200 bg-[#BE1E5D] p-6 w-67 h-67 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_#1A1818] rounded-[68%_32%_47%_53%/44%_53%_47%_56%] hover:rotate-12 transition-all duration-500 overflow-hidden border-4 border-[#F2EFE9]">
                  <img src="./public/plant.png" className="w-56 h-56 object-cover rounded-full mb-3 border-4 border-white"></img>
                  <p className="font-bold text-sm uppercase bg-white px-3 py-1 text-[#BE1E5D] shadow-md">[Detail 2]</p>
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

                {/* Image Placeholder 1 - Below title */}
                <div className="mt-12 animate-on-scroll pop-in delay-200">
                  <div className="relative w-full">
                    <div className="bg-[#F2EFE9] p-4 shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300 rounded-[45%_55%_52%_48%/48%_62%_38%_52%]"
                        style={{clipPath: 'polygon(5% 2%, 98% 0%, 100% 92%, 8% 100%, 0% 10%)'}}>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#6BAF58] opacity-50 rounded-full z-20"></div>
                      <div className="bg-neutral-200 aspect-[3/4] w-full flex items-center justify-center hover:grayscale-0 transition-all duration-500">
                        <span className="text-sm font-bold text-neutral-400">
                          <img src="./public/peach.png"></img>
                        </span>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-center mt-3 text-white bg-[#2A4A36] px-3 py-2 shadow-lg transform rotate-1">
                      The fruit-like shapes in the painting suggest fertility and growth.
                    </p>
                  </div>
                </div>

                <div className="mt-12 animate-on-scroll pop-in delay-200">
                  <div className="relative w-full">
                    <div className="bg-[#F2EFE9] p-4 shadow-xl transform rotate-3 hover:rotate-10 transition-transform duration-300 rounded-[45%_55%_52%_48%/48%_62%_38%_52%]"
                        style={{clipPath: 'polygon(5% 2%, 98% 0%, 100% 92%, 8% 100%, 0% 10%)'}}>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#6BAF58] opacity-50 rounded-full z-20"></div>
                      <div className="bg-neutral-200 aspect-[3/4] w-full flex items-center justify-center hover:grayscale-0 transition-all duration-500">
                        <span className="text-sm font-bold text-neutral-400">
                          <img src="./public/palegreen.png" className="max-w-[300px]"></img>
                        </span>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-center mt-3 text-white bg-[#BE1E5D] px-3 py-2 shadow-lg transform rotate-1">
                    The greens on the left side of the painting appear to be less alive in color.                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content - Slide In Up */}
            <div className="col-span-12 md:col-span-8 space-y-8">
              <div className="animate-on-scroll fade-up bg-[#F2EFE9] text-[#1A1818] p-10 md:p-16 shadow-[20px_20px_0px_0px_#1A1818] transform rotate-1"
                   style={{clipPath: 'polygon(2% 0%, 99% 1%, 100% 98%, 1% 99%)'}}>
                <p className="text-sm leading-relaxed mb-6 font-medium">
When you look at The Seasons (1957) by Lee Krasner, you see a huge, striking burst of massive rounded shapes in hot pink, fleshy pink, green, and white that are all tangled in thick, dark lines. These big formations feel almost organic, like giant fruits or even cells; the hot-pink areas swell like enormous growing fruits or budding flowers whereas the leafy-green patches are applied throughout the piece more thinly, suggesting an unkempt garden. The center of the work immediately grabs any viewer's attention, featuring a large, dominant fleshy orb that looks as if it is swallowing the surrounding shapes due to its sheer size, like it has its own gravity. You then follow the restless vine-looking lines as they wriggle to the right, carving a clear guide of where to direct your attention through the piece. Eventually, you find yourself right back in the middle of the composition, where you uncover what seems to be an upside-down heart. This heart-like form also looks as if the surrounding shapes are bearing the shape like a fruit, almost to the point of growing too heavy and dropping to the floor. 
                </p>
                
                

                <p className="text-sm leading-relaxed mb-6">
Upon taking a few steps back (away from the painting), one can see the sheer size of the piece. The canvas is nearly 17 feet long and 8 feet tall, and so it is very easy to get immersed in it. The horizontal length of the painting forces the viewer to scan the sections one at a time rather than the big picture. It is as if we are standing at the top of a mountain, surrounded by this lush green and pink landscape that Krasner envisioned. The sheer length facilitates a viewing experience that grows and unfolds over time, similar to the changing of "seasons" as the title of the piece suggests. In addition, the greens at the very left of the piece are paler and weaker than the greens present at the very right of the piece, suggesting that the piece begins with fall then ends with spring. The "changing seasons" aspect of the piece is further backed up as the physical width of the canvas forces the viewer to experience the painting as a sequence of events rather than one single event.

                </p>

                <p className="text-sm leading-relaxed mb-6">
                  Shifting our focus from the greenery to the pink sections, we see that the brushwork is dense and meaty, but in the green and black areas, the paint thins and visibly drips down the canvas, like it is still wet and in motion. This effect records the speed and energy of the painting's creation, like it is showing how Krasner was moving with the piece. It does not feel like a static image, but rather it feels more like the reenactment of an event, an explosion of raw, almost furious energy. 
                </p>
                
                <p className="text-sm leading-relaxed mb-6">
This explosion of energy is even more interesting when bundled with the historical context of the piece. This painting is famously one of the first Krasner made in Jackson Pollock's barn studio right after he died. Knowing that, you cannot help but see the painting in a new light. It does not read as sad or mournful. Instead, it feels like a defiant statement bundled with the emotional representation of Krasner at the time. All this pent-up energy is finally being unleashed on this massive canvas. It is alive because it is both joyful and aggressive, a feeling Murray perfectly captures as a "furious jubilation" (Murray 133). It is as if Krasner is processing everything at the same time; she is simultaneously feeling grief, freedom, and rebirth and dumping it all right there on the canvas.
                </p>
                {/* Pull Quote */}
                <div className="my-10 relative animate-on-scroll pop-in">
                   <div className="absolute inset-0 bg-[#6BAF58] transform -rotate-1 skew-x-12 opacity-30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-110"></div>
                   <p className="relative text-sm font-black italic text-[#2A4A36] text-center px-8 py-4">
Further supported by the quote "her
feat of vibrantly outliving the insufferable Pollock by almost thirty
years," (Murray 134)"              </p>
                </div>

                <p className="text-sm leading-relaxed mb-6">
	Krasner not only manifests her grief on the canvas, but it seems like she paints her perspective as a woman, as well. Throughout the painting, there are many feminine characteristics such as the fleshy pinks, the peach-like shapes that suggest fertility, flowery shapes such as petals, as well as "breastlike forms," as art historian Hobbs identifies (Hobbs 5). Krasner seemed to have made the piece a projection of her own body, seeing as the canvas is flowing with this chaotic, life-bearing energy thanks to the abundance of natural elements (plants, fruits, flowers).

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
                 Analysis 
               </h2>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
             {/* Analysis Text with Image Placeholder */}
             <div className="order-2 md:order-1 space-y-8">
               <div className="border-l-[12px] border-[#BE1E5D] pl-8 py-2 border-dashed animate-on-scroll slide-right">
                 <p className="text-sm leading-relaxed mb-6 font-black">
The big ideas circulating in this painting seem to be about the impermanence of life, rebirth, and personal renewal. Throughout the painting, we are greeted with motifs of life and change, as apparent with the fruit-like shapes and the growing greenery. The title "The Seasons" also serves to explain the living characteristics of the piece as well as the fertility and life in it. But the title also focuses our attention on the idea of time moving forward. It implies that just like nature has to go through winter to get to spring, people have to go through hard times to find new growth. Moreover, the sheer size of the canvas forces the viewer to confront these cycles not as static events, but as a continuous flow that grows and unfolds.

                 </p>
                 <p className="text-sm leading-relaxed mb-6 font-black">
This artwork leads us to imagine how the time of the painting marked a big change in Krasner's life, where she was finally free from her husband. It was conceived shortly after her husband, Jackson Pollock, passed away, which could explain the wildness and livid energy that can be seen throughout the canvas. The long, thick brushstrokes as well as the dripping paint, signifying that the stroke was done quickly and savagely could be explained by the specific historical moment of taking place immediately after his death. The significance of this painting, if one had to explain it to another, would point to the raw energy it exerts. It is interesting because the painting acts like a physical record of her emotions, showing exactly where her grief turned into creative power. It is as if the painting is the release of everything she held back, a sentiment Murray describes as a "furious jubilation" (Murray 133).

                 </p>
                 <p className="text-sm leading-relaxed mb-6 font-black">
However, the piece also poses a significant question as to whether or not Krasner truly believed her own words. In an interview, she stated, "When I am painting, and this is a heroic task, the question of male or female is irrelevant" (Rago 237). Yet, The Seasons is scattered with feminine imagery, from the curvaceous forms to the fertile, fruit-like shapes. This contradiction forces us to consider if she was trying to separate her gender from her work, or if her subconscious perspective as a woman was simply too strong to ignore. Ultimately, the painting stands as a complex record of a woman processing grief and freedom simultaneously.

                 </p>
               </div>

               
             </div>

             {/* Artist Photo Snapshot and Additional Image */}
             <div className="order-1 md:order-2 space-y-12">
               {/* Existing Artist Photo */}
               <div className="flex justify-center animate-on-scroll pop-in">
                 <div className="bg-white p-4 shadow-xl transform rotate-3 w-80 relative hover:rotate-6 transition-transform duration-300">
                   <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2A4A36] rounded-full z-20"></div>
                   <div className="bg-neutral-200 aspect-[3/4] w-full mb-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                     <span className="text-sm font-bold"><img src="./public/krasner1.png"></img></span>
                   </div>
                   <p className="font-mono text-xs text-center border-t border-dashed border-[#1A1818] pt-2">
                     Lee Krasner in her studio. (1956)
                   </p>
                 </div>
               </div>

               {/* Image Placeholder 4 - Second image in right column */}
               <div className="flex justify-center animate-on-scroll pop-in delay-100">
                  <div className="relative w-80">
                    <div className="bg-[#6BAF58] p-4 shadow-xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300 rounded-[48%_52%_58%_42%/52%_48%_52%_48%]"
                        style={{clipPath: 'polygon(2% 5%, 98% 0%, 100% 90%, 5% 100%)'}}>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#F2EFE9] opacity-50 rounded-full z-20 transform -translate-x-3 translate-y-3"></div>
                      <div className="bg-neutral-200 w-full flex items-center justify-center hover:grayscale-0 transition-all duration-500">
                          <img src="./public/barn.png"></img>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-center mt-3 text-white bg-[#2A4A36] px-3 py-2 shadow-lg transform -rotate-1">
                        Pollock's barn studio where Krasner painted "The Seasons."
                    </p>
                  </div>
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
Hobbs, Robert. "Lee Krasner's Skepticism and Her Emergent Postmodernism." Woman's 
Art Journal, vol. 28, no. 2, 2007, pp. 3–10. JSTOR, 
http://www.jstor.org/stable/20358125. Accessed 9 Oct. 2025.
            </p>
            <p className="-indent-8 ml-8 hover:text-[#BE1E5D] transition-colors cursor-default">
              Murray, Yxta Maya. "The Seasons." Chicago Review, vol. 60, no. 2, 2016, pp. 132–34. 
JSTOR, http://www.jstor.org/stable/26379970. Accessed 9 Oct. 2025

            </p>
            <p className="-indent-8 ml-8 hover:text-[#BE1E5D] transition-colors cursor-default">
              Rago, Louise Elliott, and Lee Krasner. "We Interview Lee Krasner." Reading Abstract 
Expressionism: Context and Critique, edited by Ellen G. Landau, Yale University Press, 2005, 
pp. 236–39. JSTOR, http://www.jstor.org/stable/j.ctt32bk1z.34. Accessed 9 Oct. 2025.

            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#BE1E5D] py-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-8 bg-white" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}></div>
         <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-sm md:text-base font-mono uppercase tracking-wide">
            A multimodal research project by Luigi Fernandez for Dr. Sturm's Fall 2025 ENGL 1102 course at Georgia State University
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