import React, { useState } from "react";
import SearchBar from "./SearchBar";
import DATATESODEV from "../mockData.json";

const HomeComp = () => {


 
  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if(searchTerm !== "") {
  //     const newTesodev = DATATESODEV.data.filter((tesoData) => {
  //      return Object.values(tesoData).join("").toLowerCase().includes(searchTerm.toLowerCase())
  //     })
  //     setSearchResults(newTesodev)
  //   }
  //   else {
  //     setSearchResults(DATATESODEV.data)
  //   }
  // };

  return (
    <div className="h-screen max-w-2xl mx-auto">
      <div className="flex">
        <div className="mx-auto flex ">
          <div className="w-auto h-auto">
            <div className="flex-1 h-full">
              <div className="flex items-center justify-center flex-1 h-full p-2  rounded-full">
                <div className="relative">
                  <img className="h-64" src="../img/tesodev.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="mx-auto ">
          <div className="w-auto h-auto">
            <div className=" h-full">
              <SearchBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
