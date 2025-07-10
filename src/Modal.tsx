interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  isLoading?: boolean;
}

function Modal({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
  isLoading = false,
}: ModalProps) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span
              className="material-symbols-rounded text-4xl"
              style={{ color: "#10B981" }}
            >
              check_circle
            </span>
          </div>
        );
      case "error":
        return (
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span
              className="material-symbols-rounded text-4xl"
              style={{ color: "#EF4444" }}
            >
              error
            </span>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span
              className="material-symbols-rounded text-4xl"
              style={{ color: "#3B82F6" }}
            >
              info
            </span>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="material-symbols-rounded">close</span>
        </button>

        {/* Content */}
        <div className="text-center">
          {isLoading ? (
            <>
              {/* Loading spinner */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
                  <div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-current animate-spin"
                    style={{ borderTopColor: "#10B981" }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <>
              {getIcon()}
              <h3 className="text-xl font-bold text-secondary-300 mb-3">
                {title}
              </h3>
              <p className="text-black-100 mb-6">{message}</p>
              <button
                onClick={onClose}
                className="bg-primary-300 text-white px-6 py-3 rounded-lg hover:bg-primary-300/90 font-medium transition-colors"
              >
                Got it!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
