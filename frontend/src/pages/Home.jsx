import CreateBillForm from "../components/Forms/CreateBillForm.jsx";
import BillsView from "../components/Forms/BillsView.jsx";

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <BillsView />
      <CreateBillForm />
    </>
  );
};

export default Home;
