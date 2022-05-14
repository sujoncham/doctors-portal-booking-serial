import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, title, slots } = treatment;
  const [user] = useAuthState(auth);
  const formateDate = format(date, "PP");

  const handleSubmitBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const bookData = {
      treatmentId: _id,
      treatment: title,
      date: formateDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    const url = `http://localhost:5000/booking`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookData)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          toast(`added data successfully, ${formateDate} at ${slot}`)
          
        } else{
          toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`);
        }

        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-primary px-8">
            Booking for: {title}
          </h3>
          <form onSubmit={handleSubmitBooking}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Booking Date</span>
                </label>
                <input
                  type="text"
                  value={format(date, "PP")}
                  className="input input-bordered"
                  readOnly
                  disabled
                />
              </div>
              <select
              name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="enter phone"
                  className="input input-bordered"
                  autoComplete="nope"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email || ""}
                  className="input input-bordered"
                  readOnly
                  disabled
                />
              </div>
              
                  <input type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" value='Booked' />
         

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
