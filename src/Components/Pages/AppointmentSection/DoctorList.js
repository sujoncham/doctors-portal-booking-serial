import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const DoctorList = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatDate = format(date, 'PP');

  const {isLoading, data:booked, refetch} = useQuery(['available', formatDate], ()=>fetch(`http://localhost:5000/available?date=${formatDate}`)
      .then((res) => res.json()))

      if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
 

  return (
    <div className="appoint-available">
      <h3 className="px-20 text-center text-3xl text-primary">
        Appointment Date Available:{format(date, 'PP')}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 px-20 mb-20 text-white">
        {booked.map((book) => <AppointmentService
         key={book._id}
          book={book}
          setTreatment={setTreatment}
          date={date}
          refetch={refetch}
          ></AppointmentService>)}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default DoctorList;
