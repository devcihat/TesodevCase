import React, { useState, useRef } from "react";
import DATATESODEV from "../mockData.json";

function SearchBar(props) {

  const [filter,setFilter] = useState('')

  const searchText = (event) => {
    setFilter(event.target.value)
  }

  let dataSearch = DATATESODEV.data.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })
  console.log(dataSearch)

  return (
    <div class="items-center justify-center flex-1 h-full p-2">
      <input
        class="shadow appearance-none border rounded w-full py-3 px-64 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={filter}
        onChange={searchText.bind(this)}
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
                    {dataSearch.slice(0, 3).map((val) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {val[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[2]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {val[3]}
                        </td>
                        <p></p>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
