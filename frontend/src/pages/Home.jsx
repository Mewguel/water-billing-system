import { useState, useEffect } from "react";
import api from "../api";

import Bill from "../components/Bill";

import "../styles/Home.css";

const Home = () => {
  const [bills, setBills] = useState([]);
  const [account_holder, setAccountHolder] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [customer_address, setAddress] = useState("");
  const [prev_reading, setPrevReading] = useState(0);
  const [current_reading, setCurrentReading] = useState(0);
  const [period_start, setPeriodStart] = useState(Date.now());
  const [period_end, setPeriodEnd] = useState(Date.now());
  const [penalty, setPenalty] = useState(0.0);

  useEffect(() => {
    getBills();
  }, []);

  const getBills = () => {
    api
      .get("/api/bills/")
      .then((res) => res.data)
      .then((data) => {
        setBills(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };

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

  const createBill = (e) => {
    e.preventDefault();
    api
      .post("/api/bills/", {
        account_holder,
        account_number,
        customer_address,
        prev_reading,
        current_reading,
        period_start,
        period_end,
        penalty,
      })
      .then((res) => {
        if (res.status == 201) {
          alert("Bill Created!");
        } else {
          alert("Bill Failed to Create!");
        }
      })
      .catch((error) => {
        alert(error);
      });
    getBills();
  };

  return (
    <div>
      <div>
        <h2>Bills</h2>
        {bills.map((bill) => (
          <Bill bill={bill} onDelete={deleteBill} key={bill.id} />
        ))}
      </div>
      <h2>Create Bills</h2>
      <form onSubmit={createBill}>
        <label htmlFor="accountHolder">Account Holder: </label>
        <br />
        <input
          type="account_holder"
          id="account_holder"
          name="account_holder"
          onChange={(e) => setAccountHolder(e.target.value)}
          value={account_holder}
          required
        />
        <label htmlFor="account_number">Account Number: </label>
        <br />
        <input
          id="account_number"
          name="account_number"
          value={account_number}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        ></input>
        <label htmlFor="customer_address">Customer Address: </label>
        <br />
        <textarea
          id="customer_address"
          name="customer_address"
          value={customer_address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
        <label htmlFor="prev_reading">Previous Reading: </label>
        <br />
        <input
          id="prev_reading"
          name="prev_reading"
          value={prev_reading}
          onChange={(e) => setPrevReading(e.target.value)}
          required
        ></input>
        <label htmlFor="current_reading">Current Reading: </label>
        <br />
        <input
          id="current_reading"
          name="current_reading"
          value={current_reading}
          onChange={(e) => setCurrentReading(e.target.value)}
          required
        ></input>
        <label htmlFor="period_start">Billing Period Start: </label>
        <br />
        <input
          id="period_start"
          name="period_start"
          value={period_start}
          type="date"
          onChange={(e) => setPeriodStart(e.target.value)}
          required
        ></input>
        <label htmlFor="period_end">Billing Period End: </label>
        <br />
        <input
          id="period_end"
          name="period_end"
          value={period_end}
          type="date"
          onChange={(e) => setPeriodEnd(e.target.value)}
          required
        ></input>
        <label htmlFor="penalty">Penalty: </label>
        <br />
        <input
          id="penalty"
          name="penalty"
          value={penalty}
          type="number"
          onChange={(e) => setPenalty(e.target.value)}
          required
        ></input>

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
