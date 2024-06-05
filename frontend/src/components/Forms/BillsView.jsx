import { useState, useEffect } from "react";

import api from "../../api.js";
import { getBills } from "../../util/Util.js";

import Bill from "../Bill.jsx";

const BillsView = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBills({ setBills });
  }, []);

  const deleteBill = (id) => {
    api
      .delete(`/api/bills/delete/${id}`)
      .then((res) => {
        if (res.status == 204) {
          alert(`Bill with ${id} has been successfully deleted.`);
        } else {
          alert(`Failed to delete Bill # ${id}`);
        }
        getBills();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <h2 className="font-bold text-lg">View Bills</h2>
      </div>
      {bills.map((bill) => (
        <Bill bill={bill} onDelete={deleteBill} key={bill.id} />
      ))}
    </>
  );
};

export default BillsView;
