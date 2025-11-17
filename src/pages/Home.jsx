import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

/**
 * Home Page Component
 * Contains hero section, About Us, Mission, Values, and company activity images
 */
const Home = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.home.welcome}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t.home.tagline}
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            {t.home.description}
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.home.aboutUs}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                {t.home.aboutUsText1}
              </p>
              <p className="text-lg text-gray-700">
                {t.home.aboutUsText2}
              </p>
            </div>
            <div className="bg-gray-300 rounded-lg h-64 md:h-80 flex items-center justify-center">
              {/* TODO: Replace with actual company image */}
              <span className="text-gray-500 text-lg">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.home.mission}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                {t.home.missionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.home.values}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {t.home.globalBrand}
              </h3>
              <p className="text-gray-600">
                {t.home.globalBrandDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {t.home.repeatBusiness}
              </h3>
              <p className="text-gray-600">
                {t.home.repeatBusinessDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {t.home.turnKeySolutions}
              </h3>
              <p className="text-gray-600">
                {t.home.turnKeySolutionsDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {t.home.productsServices}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.home.sanitaryWare, desc: t.home.sanitaryWareDesc },
              { title: t.home.ceramics, desc: t.home.ceramicsDesc },
              { title: t.home.filtration, desc: t.home.filtrationDesc },
              { title: t.home.materialHandling, desc: t.home.materialHandlingDesc },
              { title: t.home.naturalStone, desc: t.home.naturalStoneDesc },
              { title: t.home.turnKeyPlants, desc: t.home.turnKeyPlantsDesc }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-center px-4">{item.title}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

