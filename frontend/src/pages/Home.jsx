import { useState, useEffect } from "react";
import api from "../api";

import Bill from "../components/Bill";
import CreateBillForm from "../components/Forms/CreateBillForm.jsx";
import { getBills } from "../util/Util.js";

import "../styles/Home.css";

const Home = () => {
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
    <div>
      <div>
        <h2>Bills</h2>
        {bills.map((bill) => (
          <Bill bill={bill} onDelete={deleteBill} key={bill.id} />
        ))}
      </div>
      <CreateBillForm />
    </div>
  );
};

export default Home;
