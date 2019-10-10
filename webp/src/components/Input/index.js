import React, { useRef, useCallback } from "react";

import { TextInput, Label } from "./styled";

function Input({ placeholder, value, onChange, label, "data-key": key }) {
  const handleFocus = useCallback(() => inputRef.current.focus());
  const inputRef = useRef();
  return (
    <>
      <Label onClick={handleFocus} children={label} />
      <TextInput
        ref={inputRef}
        data-key={key}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
