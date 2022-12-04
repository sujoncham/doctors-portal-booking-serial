import React from "react";
import treatment from "../../../assets/images/treatment.png";
import ButtonPrimary from "../../../SharedButton/ButtonPrimary";

const DentalCare = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-col lg:flex-row justify-between items-center px-20">
        <div className="w-[100%] lg:w-[50%]">
          <img src={treatment} className="w-[80%] rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="w-[100%] lg:w-[50%]">
          <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
