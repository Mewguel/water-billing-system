import React, { useState, useEffect } from "react";
import Table from "../../components/Table";

// TEST ONLY DELETE LATER
const users = [
  {
    id: 1,
    name: "Ibanez, Marlon C.",
    email: "ibanez@gmail.com",
    username: "marlonIbanez",
    address: "Blk39 L1 Southville Subd. Timbao",
  },
  {
    id: 2,
    name: "Purificacion, Nora S.",
    email: "purificacion@gmail.com",
    username: "puriNora",
    address: "Blk1 L9 St. Joseph Village",
  },
  {
    id: 3,
    name: "Villanueva, Marlon",
    email: "villanuevaMarlon@gmail.com",
    username: "villMarlon",
    address: "Blk16 L11 Timbao",
  },
  {
    id: 4,
    name: "Edano, Fernando",
    email: "edano@gmail.com",
    username: "edanoFernando",
    address: "Blk74 L11 La Solidaridad-2A",
  },
];

const ManageUser = () => {
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
            onClick={openModal}
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

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(users);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full py-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2">Manage Users</h1>
      </div>
      <Table data={userData} columns={userColumns} />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Update User</h2>
            <div className="flex flex-row">
              <p className="mb-4">Name:</p>
              <input type="text" placeholder="Name" className="mb-4 ml-2" />
            </div>
            <div className="flex flex-row">
              <p className="mb-4">Email:</p>
              <input type="text" placeholder="Email" className="mb-4 ml-2" />
            </div>
            <div className="flex flex-row">
              <p className="mb-4">Address:</p>
              <input type="text" placeholder="Address" className="mb-4 ml-2" />
            </div>

            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-red-500 dark:hover:bg-red-600
                focus:outline-none dark:focus:ring-red-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUser;
