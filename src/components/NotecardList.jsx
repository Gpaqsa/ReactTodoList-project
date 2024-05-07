import React, { useState } from "react";
import Note from "./Note";
import { IoIosAddCircle } from "react-icons/io";
import PopupWindow from "./PopUpWindows";

const NotecardList = ({ notes, handleDeleteNote, handleAddNote }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="notes-lists flex justify-center	 flex-col">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
        />
      ))}

      <section className="relative left-[450px]">
        <button onClick={togglePopup}>
          <IoIosAddCircle className="w-12 h-12 text-purple-800" />
        </button>

        <PopupWindow
          togglePopup={togglePopup}
          showPopup={showPopup}
          handleAddNote={handleAddNote}
        />
      </section>
    </div>
  );
};
export default NotecardList;
