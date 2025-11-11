import Footer from "./Footer";
import Navigation from "./Navigation";

interface AboutUsProps {
  onNavigate: (page: string) => void;
}

function AboutUs({ onNavigate }: AboutUsProps) {
  return (
    <>
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="about" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              About <span className="text-primary-300">Percher</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              We're revolutionizing the rental market in Africa by connecting
              people with their perfect spaces through technology, transparency,
              and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-300 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black-100 mb-6">
                At Percher, we believe everyone deserves to find their perfect
                space without the stress, scams, and uncertainty that often
                comes with traditional rental processes.
              </p>
              <p className="text-lg text-black-100 mb-6">
                We're building Africa's most trusted rental platform by
                combining cutting-edge technology with human-centered design,
                ensuring both renters and property owners have a seamless,
                secure, and transparent experience.
              </p>
              <p className="text-lg text-black-100 mb-6">
                The goal is to have onboarded 10,000+ users and 5,000+
                properties by the end of 2026.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">
                    10K+
                  </div>
                  <div className="text-black-100">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">
                    5K+
                  </div>
                  <div className="text-black-100">Properties Listed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square p-4 rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <img
                  src="/assets/images/houses.png"
                  alt="houses"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-300 mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  verified
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Trust & Transparency
              </h3>
              <p className="text-black-100">
                We believe in building trust through complete transparency.
                Every listing is verified, every host is screened, and every
                transaction is secure.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  diversity_3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Community First
              </h3>
              <p className="text-black-100">
                We're not just a platform; we're a community. We listen to our
                users, adapt to their needs, and grow together.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-lg">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#ff7f50" }}
                >
                  rocket_launch
                </span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Innovation
              </h3>
              <p className="text-black-100">
                We constantly push boundaries to create the best possible
                experience for our users, leveraging the latest technology and
                design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-300 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-black-100 max-w-4xl mx-auto">
              Percher was born from a simple frustration: finding a rental
              property in Africa shouldn't be this hard. Our founders
              experienced firsthand the challenges of navigating unreliable
              listings, unresponsive agents, and the constant fear of scams. Our
              vision is to be the leading rental platform in Africa, providing a
              seamless and secure experience for both renters and property
              owners. We aim to make renting in Africa easy, transparent, and
              hassle-free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                The Beginning
              </h3>
              <p className="text-black-100">
                Percher was founded with a vision to transform the rental market
                in Africa, starting with Nigeria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2025</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Growth & Launch
              </h3>
              <p className="text-black-100">
                We plan to launch our mobile app and begin connecting thousands
                of users with their perfect spaces.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2026</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 mb-3">
                Expansion
              </h3>
              <p className="text-black-100">
                Expanding across Africa, bringing our trusted platform to more
                countries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-300 mb-6">
              Meet Our <span className="text-primary-300">Visionary</span>
            </h2>
            <p className="text-xl text-black-100 max-w-3xl mx-auto">
              Leading the revolution in African rental markets with innovation,
              passion, and a commitment to making housing accessible for
              everyone.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-md transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-300 via-accent-300 to-secondary-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="material-symbols-rounded text-5xl text-white">
                    person
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded text-white text-sm">
                    verified
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-secondary-300 mb-2">
                  Famosa Muyiwa
                </h3>
                <p className="text-primary-300 font-semibold mb-4 text-lg">
                  CEO & Founder
                </p>
                <p className="text-black-100 leading-relaxed mb-6">
                  A visionary entrepreneur passionate about solving real-world
                  problems through technology and innovation. With a deep
                  understanding of the African market, Famosa is dedicated to
                  transforming how people find and rent properties across the
                  continent.
                </p>

                <div className="flex justify-center space-x-4">
                  <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                    <span className="material-symbols-rounded text-primary-300 text-sm">
                      lightbulb
                    </span>
                    <span className="text-sm font-medium text-primary-300">
                      Innovation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent-50 px-4 py-2 rounded-full">
                    <span className="material-symbols-rounded text-accent-300 text-sm">
                      trending_up
                    </span>
                    <span className="text-sm font-medium text-accent-300">
                      Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-300 mb-6">
            Join the Percher Community
          </h2>
          <p className="text-xl text-black-100 mb-12 max-w-2xl mx-auto">
            Be part of the revolution in African rental markets. Download our
            app and experience the future of property rentals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#download"
              className="bg-primary-300 text-white px-8 py-4 rounded-full hover:bg-primary-300/90 inline-block"
            >
              Download App
            </a>
            <button
              onClick={() => onNavigate("home")}
              className="bg-primary-100 text-primary-300 px-8 py-4 rounded-full hover:bg-gray-50 inline-block"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default AboutUs;
