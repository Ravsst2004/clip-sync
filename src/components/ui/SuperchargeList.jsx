const SuperchargeList = ({ title, description, img }) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img src={img} alt={title} className="mb-6" />
      <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">{title}</h5>
      <p className="max-w-md text-grayishBlue">{description}</p>
    </div>
  );
};

export default SuperchargeList;
