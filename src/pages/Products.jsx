/**
 * Products Page Component
 * Displays a grid of products with image, name, description, and price
 */
const Products = () => {
  // Placeholder product data
  // TODO: Replace with actual product data from API or database
  const products = [
    {
      id: 1,
      name: 'Product One',
      description: 'High-quality product designed for modern needs. Perfect for everyday use.',
      price: '$99.99',
      image: 'Product 1 Image'
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'Premium solution with advanced features. Built to last.',
      price: '$149.99',
      image: 'Product 2 Image'
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'Innovative design meets functionality. Exceptional value.',
      price: '$199.99',
      image: 'Product 3 Image'
    },
    {
      id: 4,
      name: 'Product Four',
      description: 'Professional grade product for serious users. Top performance.',
      price: '$249.99',
      image: 'Product 4 Image'
    },
    {
      id: 5,
      name: 'Product Five',
      description: 'Elegant solution with cutting-edge technology. Stand out from the crowd.',
      price: '$299.99',
      image: 'Product 5 Image'
    },
    {
      id: 6,
      name: 'Product Six',
      description: 'Comprehensive package with everything you need. Complete solution.',
      price: '$349.99',
      image: 'Product 6 Image'
    },
    {
      id: 7,
      name: 'Product Seven',
      description: 'Budget-friendly option without compromising quality. Great value.',
      price: '$79.99',
      image: 'Product 7 Image'
    },
    {
      id: 8,
      name: 'Product Eight',
      description: 'Luxury edition with premium materials. The ultimate choice.',
      price: '$499.99',
      image: 'Product 8 Image'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          {/* TODO: Replace with actual products page description */}
          Discover our wide range of high-quality products designed to meet your needs.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
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
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    View Details
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

