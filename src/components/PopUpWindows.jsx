import React, { useState } from "react";

function PopupWindow({ togglePopup, showPopup, handleAddNote }) {
  const [newNote, setNewNote] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const applyNewNote = () => {
    handleAddNote(newNote);
    togglePopup();
    setNewNote("");
  };
  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg w-[500px] h-[289px]">
            <div className="popup-content">
              <h2 className="text-2xl font-bold mb-4">New Note</h2>
              <input
                type="text"
                name="note"
                id="newNote"
                placeholder=" Input your note..."
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={newNote}
              />
              <button
                className="absolute top-0 right-0 mr-4 mt-3 text-gray-600 hover:text-gray-800"
                onClick={togglePopup}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="flex justify-between relative top-20">
                <button
                  onClick={togglePopup}
                  className="border border-purple-800 p-2 rounded  text-purple-800 ocus:outline-none w-[120px] h-[38px] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={applyNewNote}
                  className="border border-purple-800 p-2 rounded  bg-purple-800 text-white ocus:outline-none w-[120px] h-[38px] cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupWindow;
