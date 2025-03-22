import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  loading,
  ...props
}) => {
  return (
    <button
      className={`p-[10px] rounded-[5px] bg-blue-600 flex items-center justify-center ${className}`}
      {...props}
      disabled={loading}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
