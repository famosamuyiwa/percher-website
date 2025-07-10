interface LoaderModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

function LoaderModal({
  isOpen,
  size = "lg",
  color = "#00BFFF",
}: LoaderModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Content */}
      <div className="text-center">
        {/* Loading spinner */}
        <div className="flex justify-center mb-6">
          <div className={`relative ${sizeClasses[size]}`}>
            <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-current animate-spin"
              style={{ borderTopColor: color }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoaderModal;
