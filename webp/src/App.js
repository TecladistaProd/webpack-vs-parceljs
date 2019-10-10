import React, { useState, useCallback, useEffect } from "react";

import s, { createGlobalStyle } from "styled-components";

import notesContext from "./context/notes";
import { setJson, getJson } from "./helpers/localStorage";

import Form from "./components/Form";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let nt = getJson("notes") || [];

    if (nt.length > 0) setNotes(nt);
  }, []);

  const handleNotes = useCallback(value => {
    setJson("notes", value);
    setNotes(value);
  });

  return (
    <notesContext.Provider value={{ notes, setNotes: handleNotes }}>
      <h1 className="title">My Notes</h1>
      <Form />
      <NotesList>
        {notes.map((i, k) => (
          <Note data-key={k} note={i.note} title={i.title} key={k} />
        ))}
      </NotesList>
      <GStyle />
    </notesContext.Provider>
  );
}

const GStyle = createGlobalStyle`
 * {
  padding: 0
  margin: 0
  outline: 0
  border: none
  text-decoration: none
  box-sizing: border-box
 }
 body {
   background: #62458d
   color: #fff
   padding: 2rem 1rem
   font-family: Arial, Helvetica, sans-serif
 }
 .title {
   text-align: center
 }
`;

const NotesList = s.div`
 width: 100%
 display: flex
 align-items: center
 flex-wrap: wrap
`;

export default App;
