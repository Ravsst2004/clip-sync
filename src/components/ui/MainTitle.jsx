const MainTitle = ({ children, className }) => {
  return (
    <h3
      className={`mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl ${className}`}
    >
      {children}
    </h3>
  );
};

export default MainTitle;
