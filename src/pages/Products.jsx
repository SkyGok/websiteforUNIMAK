/**
 * Products Page Component
 * Displays a grid of products with image, name, description, and price
 */
const Products = () => {
  // UNIMAK product categories
  const products = [
    {
      id: 1,
      name: 'Sanitary Ware Machinery',
      description: 'Complete machinery solutions for sanitary ware manufacturing including casting, glazing, and finishing equipment.',
      price: 'Contact for Quote',
      image: 'Sanitary Ware Machinery'
    },
    {
      id: 2,
      name: 'Ceramics Machinery',
      description: 'Advanced equipment and systems for ceramic production, processing, and finishing operations.',
      price: 'Contact for Quote',
      image: 'Ceramics Machinery'
    },
    {
      id: 3,
      name: 'Filtration Systems',
      description: 'Industrial filtration solutions designed for various manufacturing and processing applications.',
      price: 'Contact for Quote',
      image: 'Filtration Systems'
    },
    {
      id: 4,
      name: 'Material Handling Solutions',
      description: 'Efficient material handling systems and equipment for industrial manufacturing operations.',
      price: 'Contact for Quote',
      image: 'Material Handling'
    },
    {
      id: 5,
      name: 'Natural Stone Splitting',
      description: 'Specialized machinery for natural stone processing, splitting, and finishing operations.',
      price: 'Contact for Quote',
      image: 'Natural Stone Machinery'
    },
    {
      id: 6,
      name: 'Turn-Key Plants',
      description: 'Complete turn-key plant solutions from design and engineering to manufacturing and installation.',
      price: 'Contact for Quote',
      image: 'Turn-Key Plants'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Explore our comprehensive range of machinery and turn-key plant solutions
          for the sanitary ware, ceramics, and stone processing industries.
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
                    Contact Us
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

