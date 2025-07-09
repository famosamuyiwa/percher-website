interface NavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const isCurrentPage = (page: string) => {
    return currentPage === page;
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <>
                <button
                  onClick={() => handleNavigation("home")}
                  className={`${
                    isCurrentPage("home")
                      ? "text-primary-300"
                      : "text-black-200 hover:text-primary-300"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation("about")}
                  className={`${
                    isCurrentPage("about")
                      ? "text-primary-300"
                      : "text-black-200 hover:text-primary-300"
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavigation("contact")}
                  className={`${
                    isCurrentPage("contact")
                      ? "text-primary-300"
                      : "text-black-200 hover:text-primary-300"
                  }`}
                >
                  Contact
                </button>
                {/* <button
                  onClick={() => handleNavigation("blog")}
                  className={`${
                    isCurrentPage("blog")
                      ? "text-primary-300"
                      : "text-black-200 hover:text-primary-300"
                  }`}
                >
                  Blog
                </button> */}
              </>
              {/* <a
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
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
