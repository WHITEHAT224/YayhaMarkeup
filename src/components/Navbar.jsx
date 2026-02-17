function Navbar() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-pink-600 ">Yahya <span className="text-green-400">Markeup</span></h1>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">Galerie</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">À propos</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
