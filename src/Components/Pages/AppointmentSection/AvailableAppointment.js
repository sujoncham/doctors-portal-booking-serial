import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  // const formatDate = format(date, 'PP');

  const {isLoading, data:services, refetch} = useQuery(['available'], ()=>fetch(`https://doctors-portal-server-81lp.onrender.com/available`)
      .then((res) => res.json()))

      if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
 

  return (
    <div className="appoint-available">
      <h3 className="p-10 text-center text-3xl text-slate-800">
        Appointments Date Available: {format(date, 'PP')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-20 mb-20 text-white">
        {services?.map((service) => <AppointmentService
         key={service._id}
         service={service}
          setTreatment={setTreatment}
          date={date}
          ></AppointmentService>)}
      </div>
      {treatment && <BookingModal date={date} refetch={refetch} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
