import { SearchButton } from "../stylesTags/ButtonStyled";

export default function Button({
  inputValue,
  setInputValue,
  setConditional,
  setCardList,
  cardList,
  setError,
}) {
  function CleanInput() {
    setInputValue("");
    setConditional("");
  }

  function handleSearch() {
    if (inputValue === "") {
      return setConditional("empty");
    }

    fetch(`https://api.github.com/repos/${inputValue}`)
      .then((res) => res.json())
      .then((res) => setCardList([...cardList, res]))
      .catch((error) => setError(error));

    CleanInput();
  }

  return (
    <>
      <SearchButton onClick={() => handleSearch()}>Pesquisar</SearchButton>
    </>
  );
}
