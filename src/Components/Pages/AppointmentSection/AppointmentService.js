import { format } from 'date-fns';
import React from 'react';

const AppointmentService = ({book, date, setTreatment}) => {
    const {title, slots} = book;
    return (
        <div className="card w-96 shadow-xl bg-primary mb-20">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{format(date, "PP")}</p>
              <p>
                {slots.length > 0 ? (
                  <span>{slots[0]}</span>
                ) : (
                  <span className="text-red-500">
                    No slots available. Try another
                  </span>
                )}
              </p>
              <p>
                {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                available
              </p>
              <div className="card-actions">
                <label
                  htmlFor="booking-modal"
                  disabled={slots.length === 0}
                  className="btn btn-sm btn-accent"
                  onClick={()=>setTreatment(book)}
                >
                  Book Appointment
                </label>
              </div>
            </div>
          </div>
    );
};

export default AppointmentService;