import { ToastType } from "../SimpleToast";

declare global {
  interface Window {
    showToast: (message: string, type?: ToastType) => void;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
    showInfo: (message: string) => void;
  }
}

export {};
