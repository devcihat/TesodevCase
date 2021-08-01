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
    <div class="h-screen max-w-2xl mx-auto">
      <div class="flex">
        <div class="mx-auto flex ">
          <div class="w-auto h-auto">
            <div class="flex-1 h-full">
              <div class="flex items-center justify-center flex-1 h-full p-2  rounded-full">
                <div class="relative">
                  <img className="h-64" src="../img/tesodev.jpeg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-8">
        <div class="mx-auto ">
          <div class="w-auto h-auto">
            <div class=" h-full">
              <SearchBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
