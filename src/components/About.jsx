import proprietaire from "../assets/YAYA.jpg";

function About() {
  return (
     <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-90 rounded-lg overflow-hidden">
                <img src={proprietaire} alt="Photo de la propriétaire" loading="lazy" className="w-full h-96 object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">À Propos de Moi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Passionnée par l'art du maquillage depuis plus de 5 ans, je met mon expertise 
                à votre service pour révéler votre beauté naturelle. Spécialisée dans le maquillage 
                de mariée, j'ai accompagné des centaines de femmes pour leur jour le plus important.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ma mission : vous offrir une expérience unique où vous vous sentez belle, 
                confiante et sublime. Chaque prestation est personnalisée pour mettre en valeur 
                vos traits et sublimer votre personnalité.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600">500+</div>
                  <div className="text-gray-600">Mariées sublimées</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">10+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default About;
