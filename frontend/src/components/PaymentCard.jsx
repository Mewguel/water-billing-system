import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "../assets/QRPayment.png";

const PaymentCard = ({ amount }) => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const validTypes = ["image/png", "image/jpeg", "image/bmp"];
      if (validTypes.includes(fileType)) {
        setFile(selectedFile);
        setIsFileValid(true);
      } else {
        setFile(null);
        setIsFileValid(false);
        alert("Invalid file type. Only PNG, JPG, and BMP are allowed.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Receipt Submitted!");
    navigate("/paymentsuccess");
  };

  amount = 500;

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center px-6 py-4">
        <p className="text-lg font-semibold text-center">
          Centennial Water Resource Venture Corporation
        </p>
        <img
          className="w-full h-64 object-contain mb-4"
          src={QRCode}
          alt="QR Code"
        />
        <h1 className="text-xl font-bold mb-2">
          {amount > 0 ? `₱ ${amount.toFixed(2)}` : "₱ 0.00"}
        </h1>
        <h2 className="text-xl font-semibold mb-2">Payment Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Open GCash App</li>
          <li>Scan the QR Code</li>
          <li>Input the billing amount</li>
          <li>Confirm Transaction</li>
          <li>Upload the Receipt and Submit</li>
        </ol>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Receipt
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/bmp"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          className={`mt-4 px-4 py-2 rounded bg-blue-500 text-white ${
            isFileValid ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFileValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PaymentCard;
