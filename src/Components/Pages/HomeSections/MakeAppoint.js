import React from "react";
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import ButtonPrimary from "../../../SharedButton/ButtonPrimary";


const MakeAppoint = () => {
  return (
    <div style={{
        background: `url(${appointment})`
        }} className="hero mb-20">
      <div className="hero-content flex-col lg:flex-row text-white">
        <img src={doctor} className="lg:max-w-lg rounded-lg mt-[-120px] mb-[-18px]" alt="" />
        <div className="max-w-sm">
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
