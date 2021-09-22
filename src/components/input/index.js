import { SearchInput } from "../stylesTags/InputStyled";

export default function Input({ inputValue, setInputValue }) {
  return (
    <>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Digite o nome do repositório"
      />
    </>
  );
}
