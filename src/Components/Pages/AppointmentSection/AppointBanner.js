import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Chair from '../../../assets/images/chair.png';

const AppointBanner = ({date, setDate}) => {
  
  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, 'PP')}.</p>;
  // }
  return (
    <div className="hero min-h-screen mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={Chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            // footer={footer}
          />
          <p>You have selected : {format(date, 'PP')}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
