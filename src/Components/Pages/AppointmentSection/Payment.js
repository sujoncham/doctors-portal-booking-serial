import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {payId} = useParams();
    return (
        <div>
            <h2 className="text-2xl font-bold">Patient Id: {payId}</h2>
        </div>
    );
};

export default Payment;