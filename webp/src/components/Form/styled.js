import s from "styled-components";

export const FormContainer = s.form`
  max-width: 700px
  background: #fff
  margin: 20px auto
  border-radius: 10px
  padding: 1.5rem
  color: #333
`;

export const Submit = s.button`
  padding: 10px
  border-radius: 5px
  margin-top: 10px
  width: 100%
  background: #9d2fcf
  color: #fff
  font-weight: bold
  font-size: 17px
  text-transform: uppercase
  transition: all 250ms ease-in-out
  &:hover {
    opacity: .8
  }
`;
