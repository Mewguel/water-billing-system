import React from "react";
import Table from "../../components/Table";

const headers = ["ID", "Name", "Email", "Address", "Meter Number", "Actions"];

const ManageUser = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full py-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2">Manage Users</h1>
      </div>
      <Table headers={headers} />
    </>
  );
};

export default ManageUser;
