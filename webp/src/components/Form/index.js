import React, { useState, useCallback, useContext } from "react";

import { FormContainer, Submit } from "./styled";

import notesContext from "../../context/notes";

import Input from "../Input";

function Form() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const ctx = useContext(notesContext);

  const changeInput = useCallback(({ target }) => {
    if (target.dataset.key === "title") {
      setTitle(target.value);
    } else if (target.dataset.key === "note") {
      setNote(target.value);
    }
  });

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    ctx.setNotes([
      ...ctx.notes,
      {
        title,
        note
      }
    ]);
    setNote("");
    setTitle("");
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        value={title}
        placeholder="Example Title"
        label="Title"
        onChange={changeInput}
        data-key="title"
      />
      <Input
        value={note}
        placeholder="Example Note..."
        label="Note"
        onChange={changeInput}
        data-key="note"
      />
      <Submit children="Add Note" />
    </FormContainer>
  );
}

export default Form;
