import { useState } from 'react'

/**
 * Admin Page Component
 * Placeholder page for admin to hypothetically change text and images
 * No authentication needed for this demo
 */
const Admin = () => {
  const [homeContent, setHomeContent] = useState({
    tagline: 'We deliver innovative solutions that drive success and transform businesses.',
    aboutUs: 'Founded in 2020, our company has been at the forefront of innovation...',
    mission: 'Our mission is to empower businesses and individuals through innovative solutions...',
  })

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
  })

  const handleHomeContentChange = (field, value) => {
    setHomeContent(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleProductChange = (field, value) => {
    setProductData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageUpload = (section) => {
    // TODO: Implement image upload functionality when backend is ready
    alert(`Image upload for ${section} would be implemented here`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Admin Panel
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          {/* TODO: Add authentication in production */}
          Manage website content and settings (Demo - No authentication required)
        </p>

        <div className="space-y-8">
          {/* Home Page Content Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Home Page Content
            </h2>

            <div className="space-y-6">
              {/* Hero Tagline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Tagline
                </label>
                <textarea
                  value={homeContent.tagline}
                  onChange={(e) => handleHomeContentChange('tagline', e.target.value)}
                  rows="2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter hero tagline"
                />
              </div>

              {/* About Us */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About Us Text
                </label>
                <textarea
                  value={homeContent.aboutUs}
                  onChange={(e) => handleHomeContentChange('aboutUs', e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter about us content"
                />
              </div>

              {/* Mission Statement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mission Statement
                </label>
                <textarea
                  value={homeContent.mission}
                  onChange={(e) => handleHomeContentChange('mission', e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter mission statement"
                />
              </div>

              {/* Image Upload Placeholders */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Images
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Hero Image', 'About Us Image', 'Activity Image 1', 'Activity Image 2', 'Activity Image 3', 'Activity Image 4'].map((imageName) => (
                    <button
                      key={imageName}
                      onClick={() => handleImageUpload(imageName)}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors text-center"
                    >
                      <svg
                        className="h-8 w-8 text-gray-400 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">{imageName}</p>
                      <p className="text-xs text-gray-400 mt-1">Click to upload</p>
                    </button>
                  ))}
                </div>
              </div>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Save Home Page Changes
              </button>
            </div>
          </div>

          {/* Products Management Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Products Management
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productData.name}
                  onChange={(e) => handleProductChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Description
                </label>
                <textarea
                  value={productData.description}
                  onChange={(e) => handleProductChange('description', e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter product description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="text"
                  value={productData.price}
                  onChange={(e) => handleProductChange('price', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Enter price (e.g., $99.99)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image
                </label>
                <button
                  onClick={() => handleImageUpload('Product Image')}
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors text-center"
                >
                  <svg
                    className="h-12 w-12 text-gray-400 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-600">Click to upload product image</p>
                </button>
              </div>

              <div className="flex gap-4">
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Add Product
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Update Product
                </button>
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                  Delete Product
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Address
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="123 Business Street, Suite 100, City, State 12345"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="contact@company.com"
                />
              </div>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Save Contact Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

