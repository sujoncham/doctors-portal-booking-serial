import React from "react";

const InfoBoxInner = ({img, title, description, bgClass}) => {
  return (
    <div className={`hero bg-accent rounded ${bgClass}`}>
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxInner;
