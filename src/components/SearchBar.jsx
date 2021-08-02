import React, { useState } from "react";
import DATATESODEV from "../mockData.json";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const [filter, setFilter] = useState("");
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const searchText = (event) => {
    console.log(dataSearch);
    setFilter(event.target.value);
  };

  let dataSearch = DATATESODEV.data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  // console.log(dataSearch);

  return (
    <div className="items-center justify-center flex-1 h-full p-2">
      <input
        className="shadow appearance-none border rounded w-full py-3 px-64 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={filter}
        onChange={searchText.bind()}
      />
      {/* {console.log("tesodata", DATATESODEV.data[0][2])} */}

      <button
        className="w-60 mt-4 h-10 text-white  mx-3"
        style={{ backgroundColor: "#204080" }}
      >
        Search
      </button>

      <div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-52">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y mt-3 divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-16 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataSearch.slice(0, visible).map((val) => (
                      <tr key={val} className="hover:bg-gray-400 cursor-pointer ">
                        <td className="px-6  py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {val[0]}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[1]}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[2]}
                        </td>
                        <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[3]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <NavLink to="/listpage">
                  <button onClick={showMore} className="pt-4 mb-4">
                    {dataSearch.length === 0 ? (
                      <p className="text-gray-400">Not Found</p>
                    ) : (
                      <p>Show More..</p>
                    )}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
