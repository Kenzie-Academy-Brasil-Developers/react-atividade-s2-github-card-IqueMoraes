import { SearchInput } from "../stylesTags/InputStyled";

export default function Input({
  conditional,
  setConditional,
  inputValue,
  setInputValue,
}) {
  return (
    <>
      <SearchInput
        // className={conditional}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setConditional("");
        }}
        placeholder="Digite o nome do repositório"
      />
      {/* <input
        className={conditional}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          //   console.log(e.target.value);
        }}
        placeholder="Digite o nome do repositório"
      /> */}
    </>
  );
}