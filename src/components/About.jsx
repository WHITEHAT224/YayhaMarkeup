import proprietaire from "../assets/YAYA.jpg";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={proprietaire}
                alt="Photo de la propriétaire"
                loading="lazy"
                className="w-full h-[400px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              À Propos de Moi
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Passionnée par l'art du maquillage depuis plus de 10 ans, je mets mon expertise
              à votre service pour révéler votre beauté naturelle. Spécialisée dans le maquillage
              de mariée, j'ai accompagné des centaines de femmes pour leur jour le plus important.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Ma mission : vous offrir une expérience unique où vous vous sentez belle,
              confiante et sublime. Chaque prestation est personnalisée pour mettre en valeur
              vos traits et sublimer votre personnalité.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

              <div className="bg-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Mariées sublimées
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Années d'expérience
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-gray-600 text-sm sm:text-base">
                  Satisfaction
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
