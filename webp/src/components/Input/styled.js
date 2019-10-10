import s from "styled-components";

export const TextInput = s.input`
  &:focus {
    box-shadow: 0 0 3px rgba(25, 205, 255, .27)
  }
  width: 100%
  border-radius: 5px
  padding: 10px
  margin-top: 10px
  margin-bottom: 20px
  border: 1px solid rgba(25, 25, 25, .1)
`;

export const Label = s.label`
  color: #333
  font-weight: bold
`;
