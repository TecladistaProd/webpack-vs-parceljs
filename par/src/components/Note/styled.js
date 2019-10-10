import s from "styled-components";

export const Card = s.div`
  * {
    word-break: break-all
  }
  background: #fff
  padding: 1rem
  color: #235a9a
  border-radius: 5px
  width: 300px
  height: 200px
  margin-top: 20px
  margin-right: 20px
  display: flex
  flex-direction: column
  justify-content: space-between
  box-shadow: 2px 3px 1px rgba(25, 25, 25, .5), 0 0 10px rgba(25, 25, 25, .2)
`;

export const Title = s.h2``;

export const NoteText = s.p``;

export const Button = s.button`
  padding: 7px
  background: #ddd
  border-radius: 5px
  color: #333
  &:hover {
    box-shadow: 0 0 2px 1px rgba(25, 25, 25, .2)
  }
`;
