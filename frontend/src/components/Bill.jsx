import React from "react";
import "../styles/Bill.css";

const Bill = ({ bill, onDelete }) => {
  const formattedDate = new Date(bill.created_at).toLocaleDateString("en-US");

  return (
    <div className="bill-container w-4/5 mx-auto">
      <div className="grid grid-cols-10">
        <div className="account-info-container grid grid-rows-2 col-span-3 border-2">
          <p className="font-bold text-2xl border-2 pl-2">
            {bill.account_holder}
          </p>
          <p className="font-normal text-wrap text-lg border-2 pl-2">
            {bill.customer_address}
          </p>
        </div>

        <div className="grid grid-cols-4 col-span-7 auto-rows-[50px] border-2 items-center content-center">
          <p className="font-bold text-xl border-2 pl-2">Current Reading</p>
          <p className="font-bold text-xl border-2 pl-2">Previous Reading</p>
          <p className="font-bold text-xl border-2 pl-2">Consumption</p>
          <p className="font-bold text-xl border-2 pl-2">Billing Month</p>

          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">3307</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">3291</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">16</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">May</p>
          </div>
        </div>

        <div className="breakdown-container grid grid-cols-8 col-span-10 auto-rows-[50px] border-2">
          <p className="font-bold text-lg border-2 pl-2">Billing Period</p>
          <p className="font-bold text-lg border-2 pl-2">Water</p>
          <p className="font-bold text-lg border-2 pl-2">Tax</p>
          <p className="font-bold text-lg border-2 pl-2">SCF</p>
          <p className="font-bold border-2 pl-2 text-wrap">Senior Discount</p>
          <p className="font-bold text-lg border-2 pl-2">Arrears</p>
          <p className="font-bold text-lg border-2 pl-2">Over Payment</p>
          <p className="font-bold text-lg border-2 pl-2">Amount Due</p>
        </div>

        <div className="breakdown-container grid grid-cols-5 col-span-10 auto-rows-[50px] border-2">
          <p className="font-bold text-lg border-2 pl-2">Account#</p>
          <p className="font-bold text-lg border-2 pl-2 text-wrap">Meter#</p>
          <p className="font-bold text-lg border-2 pl-2">Due Date</p>
          <p className="font-bold text-lg border-2 pl-2">Penalty</p>
          <p className="font-bold text-lg border-2 pl-2">
            Amount After Due Date
          </p>
          <p className="border-2 pl-2">{bill.account_number}</p>
          <p className="border-2 pl-2">{formattedDate}</p>
        </div>
      </div>

      <button className="delete-button m-1" onClick={() => onDelete(bill.id)}>
        Delete
      </button>
    </div>
  );
};

export default Bill;
