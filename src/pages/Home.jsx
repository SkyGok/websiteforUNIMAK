/**
 * Home Page Component
 * Contains hero section, About Us, Mission, Values, and company activity images
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to UNIMAK
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Global Machinery Supplier for Sanitary Ware Industry
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            A global brand delivering turn-key plants and machinery solutions since 1982.
            Trusted worldwide for excellence and repeat business.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1982, UNIMAK has been a leading global machinery supplier
                for the sanitary ware industry. Based in Bursa, Turkey, we specialize
                in manufacturing and supplying high-quality machinery and turn-key plant
                solutions for sanitary ware, ceramics, filtration, material handling,
                and natural stone processing industries.
              </p>
              <p className="text-lg text-gray-700">
                With over four decades of experience, UNIMAK has established itself
                as a trusted global brand, serving clients worldwide with innovative
                engineering solutions, exceptional quality, and reliable service that
                drives repeat business.
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
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Our mission is to be the world's leading supplier of machinery and
                turn-key plant solutions for the sanitary ware and ceramics industries.
                We are committed to delivering innovative engineering solutions, superior
                quality, and exceptional service that enables our clients to achieve
                excellence in their manufacturing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Global Brand
              </h3>
              <p className="text-gray-600">
                UNIMAK is recognized as a global brand, trusted by manufacturers
                worldwide for reliable machinery and engineering solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Repeat Business
              </h3>
              <p className="text-gray-600">
                Our commitment to quality and service excellence has earned us
                the trust of clients who return to us for their machinery needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Turn-Key Solutions
              </h3>
              <p className="text-gray-600">
                We provide complete turn-key plant solutions, handling everything
                from engineering and manufacturing to installation and commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Products & Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sanitary Ware Machinery', desc: 'Complete machinery solutions for sanitary ware manufacturing' },
              { title: 'Ceramics Machinery', desc: 'Advanced equipment for ceramic production and processing' },
              { title: 'Filtration Systems', desc: 'Industrial filtration solutions for various applications' },
              { title: 'Material Handling', desc: 'Efficient material handling solutions and systems' },
              { title: 'Natural Stone Splitting', desc: 'Specialized machinery for natural stone processing' },
              { title: 'Turn-Key Plants', desc: 'Complete plant design, manufacturing, and installation services' }
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

