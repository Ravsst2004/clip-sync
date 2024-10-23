import React from "react";

const FeaturesList = ({ title, description }) => {
  return (
    <div>
      <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">{title}</h5>
      <p className="max-w-md text-grayishBlue">{description}</p>
    </div>
  );
};

export default FeaturesList;
