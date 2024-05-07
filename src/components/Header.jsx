import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelection = (event) => {
    const selectedItemValue = event.target.value;
    setSelectedItem(selectedItemValue);
  };

  return (
    <div className=" p-4">
      <h1 className="text-3xl font-bold">TODO LIST</h1>
      <section className="mt-4">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="  Search note..."
            className="border border-purple-800 rounded-md p-2 w-[750px] focus:outline-none focus:border-purple-800"
          />
          <CiSearch className="text-gray-500 text-4xl relative right-10" />
          <select
            value={selectedItem}
            onChange={handleItemSelection}
            className="border border-purple-800 p-2 rounded  bg-purple-800 text-white ocus:outline-none w-[120px] h-[38px] cursor-pointer	"
          >
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <MdOutlineDarkMode className="border border-purple-800 p-2 rounded m-4 bg-purple-800 text-white ocus:outline-none w-[50px] h-[38px] cursor-pointer	" />
        </div>

        <div className="mt-4"></div>
      </section>
    </div>
  );
};

export default Header;