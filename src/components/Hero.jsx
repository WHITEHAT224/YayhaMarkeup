


function Hero(){
  return(
      <section id="home" className="pt-16 min-h-screen flex items-center bg-linear-to-br from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Sublimez votre <span className="text-pink-600">beauté</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Maquillage professionnel pour mariées, prestations féminines et formations de qualité. 
              Révélez votre beauté naturelle avec notre expertise.
            </p>
            <div className="space-x-4">
              <a href="#contact" className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
                Prendre rendez-vous
              </a>
              <a href="#services" className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero