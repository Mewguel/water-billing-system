import React from "react";
import Table from "../../components/Table";

const headers = ["ID", "Name", "Email", "Billing Date", "Receipt", "Actions"];

const ManageBills = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full py-5">
        <h1 className="text-xl sm:text-2xl font-medium mb-2">Manage Bills</h1>
      </div>
      <Table headers={headers} />
    </>
  );
};

export default ManageBills;
