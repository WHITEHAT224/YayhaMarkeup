function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Marque */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              Yahya <span className="text-green-400">Markeup</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Sublimez votre beauté avec une expertise professionnelle,
              un accompagnement personnalisé et une expérience unique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-pink-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-pink-400 transition-colors">Galerie</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +224 620-96-30-74</li>
              <li>✉️ contact@beautystudio.fr</li>
              <li>📍 Cimenterie</li>
              <li>🕐 Lun-Sam: 9h-19h</li>
            </ul>
          </div>

        </div>

        {/* Ligne séparation */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Yahya Markeup. Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
