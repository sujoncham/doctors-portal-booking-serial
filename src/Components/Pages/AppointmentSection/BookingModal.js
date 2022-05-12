import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { title, slots } = treatment;

    const handleSubmitBooking = () =>{
        
    }

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
          <h3 className="text-primary px-8">Booking for: {title}</h3>
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
                />
              </div>
              <select name="timeSlot" className="select select-bordered w-full max-w-xs">
                  {
                      slots.map(slot => <option value={slot}>{slot}</option>)
                  }
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="enter name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="enter phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Booked</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
