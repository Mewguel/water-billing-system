import React from "react";
// todo::add pagination

const Table = ({ data, columns }) => {
  const formattedDate = new Date().toLocaleDateString("en-US");

  return (
    <div className="min-h-screen h-full bg-white p-10">
      <div className="lg:min-w-[1022px] xl:min-w-[1230px] 2xl:min-w-[1530px]">
        <div className="flex items-center justify-center">
          <table className="sm:inline-table w-full flex flex-row sm:bg-white  overflow-hidden ">
            <thead className="text-black">
              <tr
                className={`bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0`}
              >
                {columns?.map((column, index) => (
                  <th
                    className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none"
                    key={index}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="flex flex-col sm:table-row mb-2 sm:mb-0"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5"
                    >
                      {column.render
                        ? column.render(item[column.accessor], item)
                        : item[column.accessor]}
                    </td>
                  ))}
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
