function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-pink-100 to-purple-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Contact & Rendez-vous
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Prêt(e) à vivre une expérience beauté inoubliable ?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Infos */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Informations de Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800">Téléphone</p>
                  <p className="text-gray-600">+224 620-96-30-74</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">contact@beautystudio.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Adresse</p>
                  <p className="text-gray-600">Cimenterie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-semibold text-gray-800">Horaires</p>
                  <p className="text-gray-600">Lun-Sam: 9h-19h</p>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-4">
                Suivez-moi
              </h4>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                  📷
                </div>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                  📘
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Prendre Rendez-vous
            </h3>

            <form className="space-y-5">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service souhaité
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                >
                  <option>Maquillage Mariée</option>
                  <option>Prestation Féminine</option>
                  <option>Formation</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
              >
                Envoyer la demande
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
