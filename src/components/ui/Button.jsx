const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`p-4 px-8 rounded-full shadow-lg  duration-200 hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
