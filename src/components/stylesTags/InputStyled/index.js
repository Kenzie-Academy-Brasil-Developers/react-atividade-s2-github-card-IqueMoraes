import styled from "styled-components";

export const SearchInput = styled.input`
  flex-grow: 7;
  padding: 10px;
  height: 40px;
  /* min-width: 30%; */
  background-color: rgb(219, 248, 191);
  color: rgb(25, 54, 12);
  font-size: 18px;
  font-weight: bold;
  border: 3px solid rgb(163, 248, 102);
  border-right: none;
  border-radius: 10px 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    border: 3px solid rgb(163, 160, 79);
  }
  &::active {
    background-color: rgb(131, 134, 79);
  }
  &::placeholder {
    color: rgb(77, 100, 46, 0.6);
    font-size: 14px;
  }
  &::focus {
    border: 3px solid rgb(25, 54, 12);
    outline: none;
    font-weight: normal;
    font-size: 20px;
  }
`;
