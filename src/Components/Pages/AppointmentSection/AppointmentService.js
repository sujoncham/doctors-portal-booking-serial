import { format } from 'date-fns';
import React from 'react';

const AppointmentService = ({service, date, setTreatment}) => {
    const {title, slots, price} = service;
    return (
        <div className="card  lg:max-w-lg shadow-xl bg-slate-800 mb-20">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{format(date, "PP")}</p>
              <p>
                {
                slots.length > 0 
                ? <span>{slots[0]}</span>
                : <span className="text-red-500">
                    No slots available. Try another
                  </span>
                }
              </p>

              <p>
                {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                available
              </p>
              <p>Visit: ${price}</p>
              <div className="card-actions">
                <label
                  htmlFor="booking-modal"
                  disabled={slots.length === 0}
                  className="btn btn-sm btn-accent"
                  onClick={()=>setTreatment(service)}
                >
                  Book Appointment
                </label>
              </div>
            </div>
          </div>
    );
};

export default AppointmentService;