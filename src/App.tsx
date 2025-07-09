import { useState } from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
// import Blog from "./Blog";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === "about") {
    return <AboutUs onNavigate={navigateTo} />;
  }

  if (currentPage === "contact") {
    return <Contact onNavigate={navigateTo} />;
  }

  if (currentPage === "privacy") {
    return <PrivacyPolicy onNavigate={navigateTo} />;
  }

  if (currentPage === "terms") {
    return <TermsOfService onNavigate={navigateTo} />;
  }

  // if (currentPage === "blog") {
  //   return <Blog onNavigate={navigateTo} />;
  // }

  return (
    <>
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />

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
                href="#waitlist"
                className="bg-primary-300 text-white px-8 py-4 rounded-full hover:bg-primary-300/90 inline-block"
              >
                Join Our Waitlist
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
      <section id="waitlist" className="py-20 bg-secondary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Join Our Waitlist !
          </h2>
          <p className="text-lg text-black-100 mb-8 max-w-2xl mx-auto">
            Be the first to know when Percher launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-primary-300 text-white px-6 py-3 rounded-lg hover:bg-primary-300/90 font-medium">
              Join Waitlist
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
                  src="https://cdn.percher.africa/1744577060574-s6vot9lt0gg.png"
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
                  src="https://cdn.percher.africa/1745062099413-vp5js2zo24j.jpeg"
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
                  src="https://cdn.percher.africa/1744935625460-fo96jqgpg3j.jpeg"
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
      {/* <section id="download" className="py-20">
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
                src="https://cdn.percher.africa/apple-logo-white.png"
                width="50px"
              />
              <span>Download from App Store</span>
            </a>
            <a
              href="#"
              className="h-16 inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90"
            >
              <img
                src="https://cdn.percher.africa/google-play-logo-colored.png"
                width="30px"
              />
              <span>Download from Google Play</span>
            </a>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </>
  );
}

export default App;
