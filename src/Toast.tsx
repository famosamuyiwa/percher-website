import { useState, useEffect, useCallback } from "react";

export type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger drop-in animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = useCallback(() => {
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 400);
  }, [onRemove, toast.id]);

  useEffect(() => {
    const timer = setTimeout(handleRemove, 4000);
    return () => clearTimeout(timer);
  }, [handleRemove]);

  const getToastClass = () => {
    const baseClass =
      "px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white text-sm font-medium min-w-[300px] transform transition-all duration-400 ease-out";

    const typeClass = {
      success: "bg-green-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500",
    }[toast.type];

    let animationClass = "";
    if (isLeaving) {
      animationClass = "-translate-y-full opacity-0 scale-95";
    } else if (isVisible) {
      animationClass = "translate-y-0 opacity-100 scale-100";
    } else {
      animationClass = "-translate-y-full opacity-0 scale-90";
    }

    return `${baseClass} ${typeClass} ${animationClass}`;
  };

  const getIcon = () => {
    const iconMap = {
      success: "check_circle",
      error: "error",
      warning: "warning",
      info: "info",
    };

    return (
      <span className="material-symbols-rounded text-xl">
        {iconMap[toast.type]}
      </span>
    );
  };

  return (
    <div className={getToastClass()}>
      {getIcon()}
      <span className="flex-1">{toast.message}</span>
      <button
        onClick={handleRemove}
        className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
      >
        <span className="material-symbols-rounded text-lg">close</span>
      </button>
    </div>
  );
}

export function ToastManager() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Expose methods globally
  useEffect(() => {
    const showToast = (message: string, type: ToastType = "info") => {
      const id = Date.now().toString();
      const newToast: Toast = { id, message, type };
      setToasts((prev) => [...prev, newToast]);
    };

    // Expose methods to window
    Object.assign(window, {
      showToast,
      showSuccess: (message: string) => showToast(message, "success"),
      showError: (message: string) => showToast(message, "error"),
      showWarning: (message: string) => showToast(message, "warning"),
      showInfo: (message: string) => showToast(message, "info"),
    });
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
}

export default ToastManager;
