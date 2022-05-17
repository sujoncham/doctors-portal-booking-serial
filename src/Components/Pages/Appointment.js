import React, { useState } from 'react';
import AppointmentBanner from './AppointmentSection/AppointmentBanner';
import AvailableAppointment from './AppointmentSection/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;