import "../styles/Bill.css";
import { monthNames, RATE } from "../constants/Constants";

const Bill = ({ bill, onDelete }) => {
  const billingPeriodStart = new Date(bill.period_start);
  const billingPeriodEnd = new Date(bill.period_end);

  const dueDate = new Date(
    billingPeriodEnd.getFullYear(),
    billingPeriodEnd.getMonth(),
    billingPeriodEnd.getDate() + 17
  );

  const consumption = bill.current_reading - bill.prev_reading;
  const waterAmount = RATE * consumption;
  const waterTax = waterAmount * 0.02;
  const SCF = 0.0; // TODO:: SCF
  const seniorDiscount = 0.0; // TODO:: Senior Disc
  const arrears = 0.0; //TODO:: total of all previous bills
  const overPayment = 0.0; //TODO:: overpayment
  const amountDue = 0.0; //TODO:: amountDue

  return (
    <div className="bill-container w-4/5 mx-auto ">
      <div className="grid grid-cols-10">
        <div className="account-info-container grid grid-rows-2 col-span-3 border-2">
          <p className="font-bold text-2xl border-2 pl-2">
            {bill.account_holder}
          </p>
          <p className="font-normal text-wrap text-lg border-2 pl-2">
            {bill.customer_address}
          </p>
        </div>

        <div className="grid grid-cols-4 col-span-7 auto-rows-[50px] border-2 items-center content-center">
          {/* Headers */}
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-xl pl-2">Current Reading</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-xl pl-2">Previous Reading</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-xl pl-2">Consumption</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-xl pl-2">Billing Month</p>
          </div>
          {/* end of Headers */}

          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">{bill.current_reading}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">{bill.prev_reading}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">{consumption}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-normal">
              {monthNames[billingPeriodStart.getMonth()]}
            </p>
          </div>
        </div>

        <div className="breakdown-container grid grid-cols-8 col-span-10 auto-rows-[50px] border-2">
          {/* Headers */}
          <div className="border-2 flex items-center justify-center h-full">
            <p className="flex font-bold text-lg px-2">Billing Period</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg px-2">Water</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg px-2">Tax</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lgpx-2">SCF</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold px-2 text-wrap">Senior Discount</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg px-2">Arrears</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg px-2">Over Payment</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg px-2">Amount Due</p>
          </div>

          {/* End of headers */}
          {/* Grid Data */}
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-xs px-2">
              {billingPeriodStart.toLocaleDateString("en-US")} -{" "}
              {billingPeriodEnd.toLocaleDateString("en-US")}
            </p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-semibold text-xs px-2">{waterAmount}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {waterTax.toFixed(2)}
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {SCF}
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {seniorDiscount}
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {arrears}
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {overPayment}
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            {amountDue}
          </div>
        </div>

        <div className="breakdown-container grid grid-cols-4 col-span-10 auto-rows-[50px] border-2">
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg pl-2">Account#</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg pl-2">Due Date</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg pl-2">Penalty</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="font-bold text-lg pl-2">Amount After Due Date</p>
          </div>

          <div className="border-2 flex items-center justify-center h-full">
            <p className="pl-2">{bill.account_number}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="pl-2">{dueDate.toDateString("en-US")}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="pl-2">{bill.penalty}</p>
          </div>
          <div className="border-2 flex items-center justify-center h-full">
            <p className="pl-2">9999</p>
          </div>
        </div>
      </div>

      <button className="delete-button m-1" onClick={() => onDelete(bill.id)}>
        Delete
      </button>
    </div>
  );
};

export default Bill;
