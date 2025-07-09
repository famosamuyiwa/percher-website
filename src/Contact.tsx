import Footer from "./Footer";
import Navigation from "./Navigation";

interface ContactProps {
  onNavigate: (page: string) => void;
}

function Contact({ onNavigate }: ContactProps) {
  return (
    <>
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} currentPage="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-300 mb-6">
              Get in <span className="text-primary-300">Touch</span>
            </h1>
            <p className="text-xl text-black-100 mb-12 max-w-3xl mx-auto">
              Have questions about Percher? We'd love to hear from you. Send us
              a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-secondary-300 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black-200 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black-200 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black-200 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black-200 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black-200 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-300 text-white py-3 rounded-lg hover:bg-primary-300/90 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-secondary-300 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-rounded"
                        style={{ color: "#ff7f50" }}
                      >
                        email
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-300 mb-1">
                        Email
                      </h3>
                      <p className="text-black-100">support@percher.africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-rounded"
                        style={{ color: "#ff7f50" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-300 mb-1">
                        Office
                      </h3>
                      <p className="text-black-100">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-rounded"
                        style={{ color: "#ff7f50" }}
                      >
                        schedule
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-300 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-black-100">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-black-100">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-black-100">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-primary-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-secondary-300 mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-secondary-300 mb-2">
                      How do I list my property?
                    </h4>
                    <p className="text-black-100 text-sm">
                      Download our app and follow the simple listing process.
                      Our team will verify your property within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-300 mb-2">
                      Is Percher available in my city?
                    </h4>
                    <p className="text-black-100 text-sm">
                      We're currently available in Lagos and Abuja, with plans
                      to expand to more cities soon.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary-300 mb-2">
                      How do I report an issue?
                    </h4>
                    <p className="text-black-100 text-sm">
                      Use the contact form above or email us directly at
                      support@percher.africa for immediate assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default Contact;
