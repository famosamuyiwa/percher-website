function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                src="https://tabbie.africa/percher-logo-full.png"
                width="120px"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="#search"
                  className="text-black-200 hover:text-primary-300"
                >
                  Search Perchs
                </a>
                <a
                  href="#features"
                  className="text-black-200 hover:text-primary-300"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-black-200 hover:text-primary-300"
                >
                  How it Works
                </a>
                <a
                  href="#download"
                  className="flex flex-row gap-2 bg-primary-300 text-white px-6 py-2 rounded-full hover:bg-primary-300/90"
                >
                  <span
                    className="material-symbols-rounded"
                    style={{ color: "white" }}
                  >
                    download
                  </span>
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Find Your Perfect <span className="text-primary-300">Space</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-2xl mx-auto">
              Discover beautiful houses and properties for rent. Search, book,
              and manage your rental journey - all in one seamless platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#download"
                className="bg-primary-300 text-white px-8 py-4 rounded-full hover:bg-primary-300/90 inline-block"
              >
                Start Your Search
              </a>
              <a
                href="#features"
                className="bg-primary-100 text-primary-300 px-8 py-4 rounded-full hover:bg-gray-50 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Why Choose Percher? 🤔
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  travel_explore
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Smart Search
              </h3>
              <p className="text-black-100">
                Find exactly what you're looking for with advanced filters for
                location, price, amenities, and more.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  calendar_add_on
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Easy Booking
              </h3>
              <p className="text-black-100">
                Secure your space instantly with our real-time booking system.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  fact_check
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Scam Free Zone
              </h3>
              <p className="text-black-100">
                Proper measures are taken to ensure percher is a safe space for
                both guests and hosts to thrive in transparency.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  local_police
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Secure Payments
              </h3>
              <p className="text-black-100">
                Pay rent and deposits securely through our integrated payment
                system with multiple payment options.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  how_to_reg
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Verified Hosts
              </h3>
              <p className="text-black-100">
                The hosts go through a meticulous screening and identity
                verification before they are verified and granted access to list
                properties.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  money_bag
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Affordable Listings
              </h3>
              <p className="text-black-100">
                Enjoy luxury spaces at reasonable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Coming Soon 🚀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  home_pin
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Map Integrations
              </h3>
              <p className="text-black-100">
                Comprehensive tools for perch owners and guests to explore,
                manage navigation and get insights on a particular region.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  forum
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                In-App Messaging
              </h3>
              <p className="text-black-100">
                Direct communication between guests and perch owners with
                instant notifications.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  simulation
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Virtual Tours
              </h3>
              <p className="text-black-100">
                Experience the perch without ever setting foot in it by
                exploring virtually from the comfort of your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Preview Section */}
      <section id="search" className="py-20 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Find Your Next Perch in Minutes
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black-200 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter city or neighborhood"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black-200 mb-1">
                  Price Range
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300">
                  <option>Any Price</option>
                  <option>₦10,000 - ₦50,000</option>
                  <option>₦50,000 - ₦200,000</option>
                  <option>₦200,000+</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-primary-300 text-white py-3 rounded-lg hover:bg-primary-300/90">
              Search Properties
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            How Percher Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Search & Filter
                    </h3>
                    <p className="text-black-100">
                      Browse thousands of listings with detailed filters to find
                      your perfect match.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Schedule Viewings
                    </h3>
                    <p className="text-black-100">
                      Book perch viewings instantly with our real-time
                      scheduling system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-300 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-300 mb-2">
                      Apply & Secure
                    </h3>
                    <p className="text-black-100">
                      Submit your application and necessary documents all
                      through the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
            Add your app screenshot here
            <div className="aspect-[3/4] rounded-3xl bg-primary-200"></div>
          </div> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            What Our Users Say 🤩
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://tabbie.africa/1744577060574-s6vot9lt0gg.png"
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50px" }}
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-300">Ajadi O.</h4>
                  <p className="text-black-100">Orchid, Lagos</p>
                </div>
              </div>
              <p className="text-black-200">
                "Found my dream apartment in just two days using Percher. The
                scheduling feature made viewing properties so easy!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://tabbie.africa/1745062099413-vp5js2zo24j.jpeg"
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50px" }}
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-300">
                    Favour I.
                  </h4>
                  <p className="text-black-100">Ikate, Lagos</p>
                </div>
              </div>
              <p className="text-black-200">
                "The digital registration process saved me so much time. No more
                printing and scanning documents!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://tabbie.africa/1744935625460-fo96jqgpg3j.jpeg"
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50px" }}
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-secondary-300">
                    Famosa O.
                  </h4>
                  <p className="text-black-100">Gwarinpa, Abuja</p>
                </div>
              </div>
              <p className="text-black-200">
                "The filters helped me find exactly what I was looking for
                within my budget. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Ready to Find Your Perfect Space?
          </h2>
          <p className="text-xl text-black-100 mb-12 max-w-2xl mx-auto">
            Download Percher today and start your journey to finding your dream
            rental perch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="h-16 inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90"
            >
              <img
                src="https://tabbie.africa/apple-logo-white.png"
                width="50px"
              />
              <span>Download from App Store</span>
            </a>
            <a
              href="#"
              className="h-16 inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90"
            >
              <img
                src="https://tabbie.africa/google-play-logo-colored.png"
                width="30px"
              />
              <span>Download from Google Play</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-300 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Percher</h3>
              <p className="text-gray-300">
                Find your perfect rental property.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Renters</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#search" className="text-gray-300 hover:text-white">
                    Search Perchs
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-white"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Saved Perchs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Perch Owners</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    List Perch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Landlord Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2025 Percher. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
