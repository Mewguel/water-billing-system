import React from "react";
import { useState, useEffect } from "react";

import SuccessIcon from "../assets/success.png";
import { useNavigate } from "react-router-dom";

import LoadingIndicator from "../components/LoadingIndicator";

const PaymentSuccess = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container flex flex-col justify-center items-center m-5 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="font-semibold m-5">Payment Successful</h2>
      <img src={SuccessIcon} alt="Payment Success" className="w-36 mt-5" />
      <h6 className="flex flex-col justify-center items-center mt-10 mb-5">
        Payment will be posted within
        <br />
        <span className="font-semibold">1-3 business days</span>
      </h6>
      <LoadingIndicator />
      <p className="text-gray-600 text-center font-medium mt-2 mb-5">
        Returning: <span className="font-semibold">{countdown}</span>
      </p>
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800
        focus:outline-none focus:ring-4 focus:ring-blue-300 
        font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-5
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Return Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
