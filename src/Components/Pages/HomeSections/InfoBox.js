import React from "react";
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import InfoBoxInner from "./InfoBoxInner";

const ThreeBox = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 px-20 text-white">
      <InfoBoxInner title="Opening Hours" description="We open our service at 8.00am" bgclassName="bg-gradient-to-r from-secondary to-primary" img={Clock}></InfoBoxInner>
      <InfoBoxInner title="Visit Our Locations" description="South Carolina, SC-152, US" bgclassName="bg-accent" img={Marker}></InfoBoxInner>
      <InfoBoxInner title="Contact Us Now" description="+01747441451" bgclassName="bg-gradient-to-r from-secondary to-primary" img={Phone}></InfoBoxInner>
    </div>
  );
};

export default ThreeBox;
