import styled from "styled-components";

export const SearchButton = styled.button`
  flex-grow: 3;
  padding: 10px;
  height: 40px;
  /* min-width: 30%; */
  background-color: rgb(163, 201, 86);
  color: white;
  font-weight: bold;
  border: 3px solid rgb(163, 248, 102);
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 3px solid rgb(163, 160, 79);
  }
  &::active {
    background-color: rgb(131, 134, 79);
  }
`;
