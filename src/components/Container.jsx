import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
const Container = () => {
  const { nanoid } = require("nanoid");

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note!",
    },
    {
      id: nanoid(),
      text: "This is my second Note!",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
    },
    {
      id: nanoid(),
      text: "This is my third Note!",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const handleAddNote = (text) => {
    console.log(text);
    const newNote = {
      id: nanoid(),
      text: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log(newNotes);
  };

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // LocalStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <Header />
      <Body
        notes={notes}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default Container;
