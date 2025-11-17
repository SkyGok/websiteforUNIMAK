import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/translations'

/**
 * Products Page Component
 * Displays a grid of products with image, name, description, and price
 */
const Products = () => {
  const { language } = useLanguage()
  const t = translations[language]

  // UNIMAK product categories
  const products = [
    {
      id: 1,
      name: t.home.sanitaryWare,
      description: 'Complete machinery solutions for sanitary ware manufacturing including casting, glazing, and finishing equipment.',
      price: t.products.contactForQuote,
      image: t.home.sanitaryWare
    },
    {
      id: 2,
      name: t.home.ceramics,
      description: 'Advanced equipment and systems for ceramic production, processing, and finishing operations.',
      price: t.products.contactForQuote,
      image: t.home.ceramics
    },
    {
      id: 3,
      name: t.home.filtration,
      description: 'Industrial filtration solutions designed for various manufacturing and processing applications.',
      price: t.products.contactForQuote,
      image: t.home.filtration
    },
    {
      id: 4,
      name: t.home.materialHandling,
      description: 'Efficient material handling systems and equipment for industrial manufacturing operations.',
      price: t.products.contactForQuote,
      image: t.home.materialHandling
    },
    {
      id: 5,
      name: t.home.naturalStone,
      description: 'Specialized machinery for natural stone processing, splitting, and finishing operations.',
      price: t.products.contactForQuote,
      image: t.home.naturalStone
    },
    {
      id: 6,
      name: t.home.turnKeyPlants,
      description: 'Complete turn-key plant solutions from design and engineering to manufacturing and installation.',
      price: t.products.contactForQuote,
      image: t.home.turnKeyPlants
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          {t.products.title}
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          {t.products.description}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                {/* TODO: Replace with actual product image */}
                <span className="text-white font-semibold text-center px-4">
                  {product.image}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">
                    {product.price}
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200 text-sm">
                    {t.products.contactUs}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

