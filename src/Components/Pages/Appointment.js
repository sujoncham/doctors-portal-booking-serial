import React, { useState } from 'react';
import AppointBanner from './AppointmentSection/AppointBanner';
import DoctorList from './AppointmentSection/DoctorList';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <DoctorList date={date} setDate={setDate}></DoctorList>
        </div>
    );
};

export default Appointment;