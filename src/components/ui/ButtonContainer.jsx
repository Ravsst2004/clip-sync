const ButtonContainer = ({ children }) => {
  return (
    <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
      {children}
    </div>
  );
};

export default ButtonContainer;
