import { useState, useEffect } from "react";
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

function Realisation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fermeture avec ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight" && openIndex !== null) {
        setOpenIndex((prev) => (prev! + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && openIndex !== null) {
        setOpenIndex((prev) =>
          prev! === 0 ? images.length - 1 : prev! - 1
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Découvrez notre travail à travers nos créations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              <img
                loading="lazy"
                src={src}
                alt={`Photo ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">
                  Création {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setOpenIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                ✕
              </button>

              {/* Left Button */}
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === 0
                      ? images.length - 1
                      : openIndex - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                ‹
              </button>

              {/* Right Button */}
              <button
                onClick={() =>
                  setOpenIndex((openIndex + 1) % images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl"
              >
                ›
              </button>

              <img
                src={images[openIndex]}
                alt={`Photo ${openIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Realisation;
