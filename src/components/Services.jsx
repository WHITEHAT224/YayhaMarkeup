function Services() {
  return (
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
            <p className="text-lg text-gray-600">Des prestations adaptées à vos besoins</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Mariage */}
            <div className="bg-pink-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💑</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Maquillage Mariée</h3>
              <p className="text-gray-600 mb-6">
                Une mise en beauté sublime pour votre jour le plus important. 
                Maquillage longue tenue et waterproof pour un résultat parfait.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Essai maquillage inclus</li>
                <li>• Maquillage waterproof</li>
                <li>• Longue tenue 12h+</li>
                <li>• Photo retouches possibles</li>
              </ul>
              <a href="#contact" className="text-pink-600 font-semibold hover:text-pink-700">
                Réserver →
              </a>
            </div>

            {/* Service Femmes */}
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💄</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prestations Féminines</h3>
              <p className="text-gray-600 mb-6">
                Des prestations variées pour sublimer votre beauté au quotidien 
                ou pour vos occasions spéciales.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Soins du visage</li>
                <li>• Maquillage de jour/soirée</li>
                <li>• Mise en forme sourcils</li>
                <li>• Conseils personnalisés</li>
              </ul>
              <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700">
                Réserver →
              </a>
            </div>

            {/* Service Formations */}
            <div className="bg-indigo-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formations</h3>
              <p className="text-gray-600 mb-6">
                Apprenez les techniques professionnelles du maquillage. 
                Formations individuelles ou en petits groupes.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-6">
                <li>• Initiation au maquillage</li>
                <li>• Techniques avancées</li>
                <li>• Maquillage de soirée</li>
                <li>• Certificat remis</li>
              </ul>
              <a href="#contact" className="text-indigo-600 font-semibold hover:text-indigo-700">
                S'inscrire →
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Services;
