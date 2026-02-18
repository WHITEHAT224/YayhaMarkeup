import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-pink-600">
            Yahya <span className="text-green-400">Markeup</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Galerie</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <a href="#home" onClick={() => setIsOpen(false)}>Accueil</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Galerie</a>
            <a href="#about" onClick={() => setIsOpen(false)}>À propos</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
