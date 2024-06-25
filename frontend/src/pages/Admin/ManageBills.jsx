import React, { useEffect, useState } from "react";
import Table from "../../components/Table";

// TEST ONLY DELETE LATER
const bills = [
  {
    id: 1,
    AccountHolder: "Ibanez, Marlon C.",
    AccountNumber: "39-12-3901",
    BillingDate: "04/05/24 - 05/03/24",
    UploadedReceipt: "The latest iPhone with advanced features",
    AmountDue: 426.4,
  },
  {
    id: 2,
    AccountHolder: "Purificacion, Nora S.",
    AccountNumber: "01-12-0109",
    BillingDate: "04/06/24 - 05/04/24",
    UploadedReceipt: "High-quality running shoes for athletes",
    AmountDue: 3089.6,
  },
  {
    id: 3,
    AccountHolder: "Villanueva, Marlon",
    AccountNumber: "16-2A-1611",
    BillingDate: "04/06/24 - 05/02/24",
    UploadedReceipt: "Classic novel by F. Scott Fitzgerald",
    AmountDue: 4207.5,
  },
  {
    id: 4,
    AccountHolder: "Edano, Fernando",
    AccountNumber: "74-12-7411",
    BillingDate: "04/06/24 - 05/05/24",
    UploadedReceipt: "Refrigerator with smart features and spacious design",
    AmountDue: 645.86,
  },
];

const billColumns = [
  { header: "ID", accessor: "id" },
  { header: "Account Holder", accessor: "AccountHolder" },
  { header: "Account Number", accessor: "AccountNumber" },
  {
    header: "Billing Date",
    accessor: "BillingDate",
    render: (value) => new Date(value).toLocaleDateString("en-US"),
  },
  {
    header: "Amount Due",
    accessor: "AmountDue",
    render: (value) => `₱${value}`,
  },
  {
    header: "Uploaded Receipt",
    accessor: "UploadedReceipt",
    render: () => <img alt="Receipt" />,
  },
  {
    header: "Actions",
    accessor: "actions",
    render: () => (
      <>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
              font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
              dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none dark:focus:ring-blue-800"
        >
          Mark Paid
        </button>
        <button
          type="button"
          className="focus:outline-none rounded-lg
              text-white bg-red-700 hover:bg-red-800
              dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
              focus:ring-4 focus:ring-red-300 
              font-medium text-sm 
              px-5 py-2.5 me-2 mb-2"
        >
          Reject
        </button>
      </>
    ),
  },
];

const ManageBills = () => {
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    setBillData(bills);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full py-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2">Manage Bills</h1>
      </div>
      <Table data={billData} columns={billColumns} />
    </>
  );
};

export default ManageBills;
