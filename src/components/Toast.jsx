import { useEffect } from "react";

const Toast = ({ message, type = "info", visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="toast toast-center toast-middle z-50">
      <div className={`alert alert-${type.toString()} text-${type.toString()}-content font-semibold`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
