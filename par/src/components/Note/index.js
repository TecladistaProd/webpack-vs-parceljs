import React, { useCallback, useContext } from "react";

import { Card, Title, NoteText, Button } from "./styled";

import noteContext from "../../context/notes";

function Note({ title, note, "data-key": key }) {
  const removeNote = useCallback(() => {
    let nNotes = [...ctx.notes];
    nNotes.splice(key, 1);

    ctx.setNotes(nNotes);
  });

  const ctx = useContext(noteContext);
  return (
    <Card>
      <Title>{title}</Title>
      <NoteText>{note}</NoteText>
      <Button onClick={removeNote}>REMOVE</Button>
    </Card>
  );
}

export default Note;
