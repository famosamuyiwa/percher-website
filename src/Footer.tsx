interface FooterProps {
  onNavigate?: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-secondary-300 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Percher</h3>
            <p className="text-gray-300">Find your perfect rental property.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("about")}
                  className="text-gray-300 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("privacy")}
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("terms")}
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/facebook.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://x.com/percherapp"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/twitter.png"
                alt="Twitter"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/percher.app"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/instagram.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@percherapp"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/tiktok.png"
                alt="TikTok"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <p>&copy; 2025 Percher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
