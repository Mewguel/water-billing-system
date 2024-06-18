import React from "react";
// todo::add pagination
const products = [
  {
    id: 1,
    Category: "Electronics",
    Company: "Apple",
    Product: "iPhone 13",
    Description: "The latest iPhone with advanced features",
    Price: 999,
  },
  {
    id: 2,
    Category: "Clothing",
    Company: "Nike",
    Product: "Running Shoes",
    Description: "High-quality running shoes for athletes",
    Price: 89,
  },
  {
    id: 3,
    Category: "Books",
    Company: "Penguin Books",
    Product: "The Great Gatsby",
    Description: "Classic novel by F. Scott Fitzgerald",
    Price: 12,
  },
  {
    id: 4,
    Category: "Home Appliances",
    Company: "Samsung",
    Product: "Smart Refrigerator",
    Description: "Refrigerator with smart features and spacious design",
    Price: 14,
  },
];
const Table = ({ headers }) => {
  return (
    <div className="min-h-screen h-full bg-white p-10">
      <div className="lg:min-w-[1022px] xl:min-w-[1230px] 2xl:min-w-[1530px]">
        <div className="flex items-center justify-center">
          <table className="sm:inline-table w-full flex flex-row sm:bg-white  overflow-hidden ">
            <thead className="text-black">
              {products?.map((data, index) => (
                <tr
                  className={`bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${
                    index == 0 ? "sm:flex" : "sm:hidden"
                  }`}
                  key={index}
                >
                  {headers?.map((data, index) => (
                    <th
                      className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none"
                      key={index}
                    >
                      {data}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="flex-1 sm:flex-none">
              {products?.map((data, index) => (
                <tr
                  className="flex flex-col sm:table-row mb-2 sm:mb-0"
                  key={index}
                >
                  <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5">
                    {data?.id}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                    {data?.Category}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                    {data?.Company}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    {"$" + data?.Price}
                  </td>
                  <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                         font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                         dark:bg-blue-600 dark:hover:bg-blue-700
                         focus:outline-none dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none rounded-lg
                         text-white bg-red-700 hover:bg-red-800
                         dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900
                         focus:ring-4 focus:ring-red-300 
                         font-medium text-sm 
                         px-5 py-2.5 me-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
