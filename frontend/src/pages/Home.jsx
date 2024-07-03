import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateBillForm from "../components/Forms/CreateBillForm.jsx";
import BillsView from "../components/Forms/BillsView.jsx";

import api from "../api.js";

import "../styles/Home.css";

const checkAdminStatus = async () => {
  const res = await api.get("api/check-admin-status/");
  return res.data;
};

const Home = () => {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const userStatus = await checkAdminStatus();
        setIsUserAdmin(userStatus.is_admin);

        if (!userStatus.is_admin) {
          navigate("/profile");
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    fetchAdminStatus();
  }, []);

  if (isUserAdmin) {
    return (
      <>
        <BillsView />
        <CreateBillForm />
      </>
    );
  }

  return null;
};

export default Home;
