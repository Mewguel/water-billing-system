import React, { useEffect, useState } from "react";
import Table from "../../components/Table";

// TEST ONLY DELETE LATER
const bills = [
  {
    id: 1,
    AccountHolder: "Electronics",
    AccountNumber: "Apple",
    BillingDate: "iPhone 13",
    UploadedReceipt: "The latest iPhone with advanced features",
    AmountDue: 999,
  },
  {
    id: 2,
    AccountHolder: "Clothing",
    AccountNumber: "Nike",
    BillingDate: "Running Shoes",
    UploadedReceipt: "High-quality running shoes for athletes",
    AmountDue: 89,
  },
  {
    id: 3,
    AccountHolder: "Books",
    AccountNumber: "Penguin Books",
    BillingDate: "The Great Gatsby",
    UploadedReceipt: "Classic novel by F. Scott Fitzgerald",
    AmountDue: 12,
  },
  {
    id: 4,
    AccountHolder: "Home Appliances",
    AccountNumber: "Samsung",
    BillingDate: "Smart Refrigerator",
    UploadedReceipt: "Refrigerator with smart features and spacious design",
    AmountDue: 14,
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
