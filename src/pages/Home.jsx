/**
 * Home Page Component
 * Contains hero section, About Us, Mission, Values, and company activity images
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Company
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Partner for Excellence
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            {/* TODO: Replace with actual company tagline */}
            We deliver innovative solutions that drive success and transform businesses.
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
                {/* TODO: Replace with actual company description */}
                Founded in 2020, our company has been at the forefront of innovation,
                delivering exceptional products and services to clients worldwide.
                We pride ourselves on our commitment to quality, customer satisfaction,
                and continuous improvement.
              </p>
              <p className="text-lg text-gray-700">
                Our team of experienced professionals brings decades of combined
                expertise to every project, ensuring that we exceed expectations
                and deliver results that matter.
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
                {/* TODO: Replace with actual mission statement */}
                Our mission is to empower businesses and individuals through innovative
                solutions, exceptional service, and unwavering commitment to excellence.
                We strive to create lasting value for our clients while fostering a
                culture of integrity, collaboration, and continuous growth.
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
                Excellence
              </h3>
              <p className="text-gray-600">
                {/* TODO: Replace with actual value description */}
                We strive for excellence in everything we do, setting high standards
                and continuously improving our processes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Integrity
              </h3>
              <p className="text-gray-600">
                {/* TODO: Replace with actual value description */}
                We conduct business with honesty, transparency, and ethical practices
                in all our interactions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600">
                {/* TODO: Replace with actual value description */}
                We embrace creativity and innovation to solve complex challenges
                and deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What We Do
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  {/* TODO: Replace with actual activity images */}
                  <span className="text-gray-500">Activity Image {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {/* TODO: Replace with actual activity title */}
                    Activity Title {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {/* TODO: Replace with actual activity description */}
                    Brief description of company activity or service offering.
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

