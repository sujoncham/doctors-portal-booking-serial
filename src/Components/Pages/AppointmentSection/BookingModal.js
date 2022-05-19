import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, title, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const formateDate = format(date, "PP");

  const handleSubmitBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: title,
      date: formateDate,
      slot,
      price,
      patient: user?.email,
      patientName: user?.displayName,
      phone: event.target.phone.value,
    };

    const url = `http://localhost:5000/booking`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          toast(`added data successfully, ${formateDate} at ${slot}`)
          
        } else{
          toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`);
        }
        
        refetch();
        
      });
      setTreatment(null);
      
     
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2" > ✕</label>
          <h3 className="text-primary text-xl text-center px-8">  Booking for: {title} </h3>

          <form onSubmit={handleSubmitBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

            <input type="text" value={format(date, "PP")}  className="input w-full max-w-xs" readOnly disabled />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                  {slots.map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
            <input type="text" name='name' value={user?.displayName || ""}  className="input w-full max-w-xs" readOnly disabled />
            <input type="text" name='email' value={user?.email || ""} className="input w-full max-w-xs" readOnly disabled />
            
            <input type="text" name="phone" placeholder="Enter phone" className="input input-bordered w-full max-w-xs" autoComplete="nope" />

            <input type="submit" value='Booked' className="btn btn-primary w-full max-w-xs" />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
