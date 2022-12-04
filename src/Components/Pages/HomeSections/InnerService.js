import React from "react";

const InnerService = ({data}) => {
    
    const {title, para, img} = data;

  return (
    <div className="card w-96 bg-base-100 border-2 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default InnerService;
