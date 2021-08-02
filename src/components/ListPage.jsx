import React, { useState } from "react";
import DATATESODEV from "../mockData.json";

import ReactPaginate from "react-paginate";

function ListPage() {
  const [filter, setFilter] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  let dataSearch = DATATESODEV.data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(dataSearch.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = dataSearch
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((val) => {
      return (
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
      );
    });

  const searchText = (event) => {
    //console.log(dataSearch);
    setFilter(event.target.value);
  };

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
          style={{ backgroundColor: "#4F75C2" }}
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
                  <tbody>{displayUsers}</tbody>
                </table>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={
                    "bg-white px-4 py-6 w-6/12 mx-auto flex items-center justify-between border-t border-gray-200 "
                  }
                  previousClassName={
                    "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }
                  nextClassName={
                    "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  }
                  disabledClassName={"paginationDisabled"}
                  activeClassName={
                    "bg-indigo-50 border-indigo-500 text-indigo-600  px-4 py-2 border text-sm font-medium"
                  }
                ></ReactPaginate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPage;
