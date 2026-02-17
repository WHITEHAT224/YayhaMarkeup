import { useState } from 'react';
import img1 from "../assets/1771173049961.jpg";
import img2 from "../assets/1771173052361.jpg";
import img3 from "../assets/1771173061105.jpg";
import img4 from "../assets/1771173063262.jpg";
import img5 from "../assets/1771173065467.jpg";
import img6 from "../assets/1771173067531.jpg";
import img7 from "../assets/1771173069722.jpg";
import img8 from "../assets/1771173084595.jpg";
import img9 from "../assets/1771173092868.jpg";
import img10 from "../assets/1771173110735.jpg";

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

function Realisation(){
  const [openIndex, setOpenIndex] = useState(null);

  return(
     <section id="gallery" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Réalisations</h2>

                <p className="text-lg text-gray-600">Découvrez notre travail à travers nos creations</p>
             </div>
             <div className="grid md:grid-cols-3 gap-6">
              {images.map((src,index)=>(
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <button type="button" onClick={()=>setOpenIndex(index)} className="h-64 w-full block cursor-pointer">
                    <div className="h-64 w-full bg-gray-100">
                      <img loading="lazy" src={src} alt={`Photo ${index+1}`} className="w-100 h-88 object-cover" />
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                    <p className="text-white font-semibold">Creations {index+1} </p>
                  </div>

                </div>

              ))}

             </div>

             {openIndex !== null && (
               <div role="dialog" aria-modal="true" aria-label={`Image ${openIndex+1}`} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={()=>setOpenIndex(null)}>
                 <div className="max-w-4xl w-full rounded shadow-lg overflow-hidden" onClick={(e)=>e.stopPropagation()}>
                   <div className="relative">
                     <button aria-label="Fermer la visionneuse" type="button" onClick={()=>setOpenIndex(null)} className="absolute top-2 right-2 z-50 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center">✕</button>
                     <img loading="lazy" src={images[openIndex]} alt={`Photo ${openIndex+1}`} className="w-full h-[70vh] object-contain bg-black" />
                   </div>
                 </div>
               </div>
             )}
         </div>
     </section>
  )
}
export default Realisation