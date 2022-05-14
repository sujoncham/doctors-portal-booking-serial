import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const DoctorList = ({ date }) => {
  const [booked, setBooked] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatDate = format(date, 'PP');
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formatDate}`)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [formatDate]);

  return (
    <div className="appoint-available">
      <h3 className="px-20 text-center text-3xl text-primary">
        Appointment Date Available:{" "}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20 px-20 mb-20 text-white">
        {booked.map((book) => <AppointmentService
         key={book._id}
          book={book}
          setTreatment={setTreatment}
          date={date}
          ></AppointmentService>)}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default DoctorList;
