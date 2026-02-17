


function Footer(){
    return(
         <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Yahya Markeup</h3>
            <p className="text-gray-300 mb-4">
              Sublimez votre beauté avec notre expertise professionnelle
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

    )
}
export default Footer;