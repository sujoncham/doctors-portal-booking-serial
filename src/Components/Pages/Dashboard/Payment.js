import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0ndhIcKywkuGHWCujTFl3VGBGJvnKhkty3VHv64xPJOLJCYjIzNifStjHabpQlM9uEMerJDbZgxNzOBnnCHWmX00FYzO04Sx"
);

const Payment = () => {
  const { payId } = useParams();

  const url = `https://doctors-portal-server-81lp.onrender.com/booking/${payId}`;
  const { data: appointment, isLoading } = useQuery(["booking", payId], () =>
    fetch(url, {
      method:'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div  className="flex justify-center items-center mt-20">
      <div>
      <h2 className="text-2xl font-bold">Patient Id: {payId}</h2>
        <div className="w-75 max-w-md bg-base-100 shadow-xl p-10 mb-10">
          <p>Hello, {appointment.patientName}</p>
          <h1 className="text-2xl font-bold">
            you are taking {appointment.treatment} this service.
          </h1>
          <p>date - {appointment.date}</p>
          <p>Time - {appointment.slot}</p>
          <p className="py-6">
            You have to pay for this service ${appointment.price}
          </p>
        </div>
        <div className="card w-75 max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm appointment={appointment}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
