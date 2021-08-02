import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DATATESODEV from "../mockData.json";

function ListPage() {
  const [filter, setFilter] = useState("");

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


  return (
    <div className="container mx-auto">
      <div className="flex">
        <img className="w-60 p-4" src="../img/tesodev.jpeg" />

        <input
          class="shadow appearance-none border rounded h-14 w-screen mt-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={filter}
          onChange={searchText.bind()}
        />
        {/* {console.log("tesodata", DATATESODEV.data[0][2])} */}

        <button
          className="w-40 mt-9 h-10 text-white  mx-3"
          style={{ backgroundColor: "#204080" }}
        >
          Search
        </button>
      </div>
      <div className="">
        <div className="block p-24 w-22">
          <div className="-my-2  sm:-mx-6 lg:-mx-18">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden">
                <table className="min-w-full divide-y mt-3 ">
                  <tbody>
                    {dataSearch.map((val) => (
                      <tr className="hover:bg-gray-400 cursor-pointer ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
