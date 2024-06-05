import api from "../api";

/**
 * Fetches bills and sets the bills state.
 * @param {Function} setBills - The state setter function for bills.
 */
export const getBills = ({ setBills }) => {
  api
    .get("/api/bills/")
    .then((res) => res.data)
    .then((data) => {
      setBills(data);
    })
    .catch((error) => {
      console.error("Error fetching bills:", error);
      alert("Failed to fetch bills. Please try again later.");
    });
};
