import React from "react";
import DeleteIcon from "./trashIcon.png";
import EditIcon from "./EditIcon.png";

const Note = ({ id, text, handleDeleteNote }) => {
  return (
    <div className="flex items-center justify-between p-4  border-gray-300 rounded-md shadow-sm mb-4 w-[750px]">
      <label className="flex items-center">
        <input type="checkbox" name="item3" className="mr-2 w-8 h-8" />
        <span className="text-lg">{text}</span>
        <span className="text-gray-500 ml-2">#{id}</span>
      </label>
      <button
        className="text-red-500 hover:text-red-700"
        // onClick={}
      >
        <img src={EditIcon} alt="Edit Icon" />
      </button>

      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleDeleteNote(id)}
      >
        <img src={DeleteIcon} alt="Delete Icon" />
      </button>
    </div>
  );
};

export default Note;
