import React, { useState, useEffect } from "react";
import Table from "../../components/Table";

// TEST ONLY DELETE LATER
const users = [
  {
    id: 1,
    name: "Electronics",
    email: "Apple",
    username: "iPhone 13",
    address: "The latest iPhone with advanced features",
  },
  {
    id: 2,
    name: "Clothing",
    email: "Nike",
    username: "Running Shoes",
    address: "High-quality running shoes for athletes",
  },
  {
    id: 3,
    name: "Books",
    email: "Penguin Books",
    username: "The Great Gatsby",
    address: "Classic novel by F. Scott Fitzgerald",
  },
  {
    id: 4,
    name: "Home Appliances",
    email: "Samsung",
    username: "Smart Refrigerator",
    address: "Refrigerator with smart features and spacious design",
  },
];

const userColumns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  {
    header: "Username",
    accessor: "username",
  },
  {
    header: "Address",
    accessor: "address",
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
          Update
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
          Delete
        </button>
      </>
    ),
  },
];

const ManageUser = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(users);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full py-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2">Manage Users</h1>
      </div>
      <Table data={userData} columns={userColumns} />
    </>
  );
};

export default ManageUser;
