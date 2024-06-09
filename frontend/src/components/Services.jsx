import React from "react";
import advisory from "../assets/advisory.png";
import invoice from "../assets/invoice.png";
import warning from "../assets/warning.png";
import feedback from "../assets/feedback.png";
import payment from "../assets/payment.png";

const Services = () => {
  return (
    <div className="card container flex flex-col items-center m-5 rounded">
      <h2 className="text-4xl font-bold m-5">Services</h2>
      <div className="services container flex flex-row items-center justify-center gap-10   ">
        <div className="flex flex-col items-center bg-yellow-300 rounded-md">
          <img className="w-28 h-28 p-2" src={advisory} alt="advisory"></img>
          <span className="text-lg font-medium"> Advisory </span>
        </div>
        <div className="flex flex-col items-center bg-yellow-300 rounded-md">
          <img className="w-28 h-28 p-2" src={invoice} alt="invoice"></img>
          <span className="text-lg font-medium"> Invoice </span>
        </div>
        <div className="flex flex-col items-center bg-yellow-300 rounded-md">
          <img className="w-28 h-28 p-2" src={warning} alt="warning"></img>
          <span className="text-lg font-medium"> Notice </span>
        </div>
        <div className="flex flex-col items-center bg-yellow-300 rounded-md">
          <img className="w-28 h-28 p-2" src={feedback} alt="feedback"></img>
          <span className="text-lg font-medium"> Feedback </span>
        </div>
        <div className="flex flex-col items-center bg-yellow-300 rounded-md">
          <img className="w-28 h-28 p-2" src={payment} alt="payment"></img>
          <span className="text-lg font-medium"> Payment </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
