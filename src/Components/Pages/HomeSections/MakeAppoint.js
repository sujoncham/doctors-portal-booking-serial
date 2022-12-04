import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import ButtonPrimary from "../../../SharedButton/ButtonPrimary";

const MakeAppoint = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className=""
    >
      <div className="flex flex-col lg:flex-row justify-between items-center px-20">
         <div className="w-[100%] lg:w-[50%]">
            <img src={doctor} className="w-[100%] rounded-lg" alt="" />
         </div>
         <div className="w-[100%] lg:w-[50%] text-white">
            <p>Appointment</p>
            <h1 className="text-3xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default MakeAppoint;
