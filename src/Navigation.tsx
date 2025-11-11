import { useState } from "react";

interface NavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const isCurrentPage = (page: string) => {
    return currentPage === page;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="https://cdn.percher.africa/percher-logo-full.png"
              width="120px"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => handleNavigation("home")}
                className={`${
                  isCurrentPage("home")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className={`${
                  isCurrentPage("about")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className={`${
                  isCurrentPage("contact")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-200 hover:text-primary-300 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-symbols-rounded text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <button
              onClick={() => handleNavigation("home")}
              className={`${
                isCurrentPage("home")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`${
                isCurrentPage("about")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className={`${
                isCurrentPage("contact")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
