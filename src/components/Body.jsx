import React from "react";
import NotecardList from "./NotecardList";

const Body = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="body flex justify-center">
      <section>
        <NotecardList
          notes={notes}
          handleDeleteNote={handleDeleteNote}
          handleAddNote={handleAddNote}
        />
      </section>
    </div>
  );
};

export default Body;
