import styled from "styled-components";

export const DivGithubCard = styled.div`
  width: 80%;
  height: 95px;
  margin: 10px 0;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(219, 248, 191);
  border: 1px solid rgb(163, 248, 102);
  border-radius: 10px;
  color: rgb(25, 54, 12);
  box-sizing: border-box;

  h2 {
    font-weight: normal;
    font-size: 22px;
  }
  a {
    font-size: 18px;
    color: rgb(77, 100, 46, 0.6);
    text-decoration: none;
  }
  a:hover {
    color: rgb(77, 100, 46, 1);
  }
`;
