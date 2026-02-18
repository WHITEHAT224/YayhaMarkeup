function Hero() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-pink-100 to-purple-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Sublimez votre{" "}
            <span className="text-pink-600">beauté</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl md:max-w-3xl mx-auto">
            Maquillage professionnel pour mariées, prestations féminines et formations de qualité.
            Révélez votre beauté naturelle avec notre expertise.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Prendre rendez-vous
            </a>

            <a
              href="#services"
              className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
            >
              Découvrir nos services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
