import { SearchButton } from "../stylesTags/ButtonStyled";

export default function Button({
  inputValue,
  setInputValue,
  setCardImage,
  setCardList,
  cardList,
  setError,
}) {
  function CleanInput() {
    setInputValue("");
  }

  function handleSearch() {
    fetch(`https://api.github.com/repos/${inputValue}`)
      .then((res) => res.json())
      .then((res) => {
        setCardList([res]);
        setError("");
        setCardImage(res.owner.avatar_url);
      })
      .catch((error) => setError(error));

    CleanInput();
  }

  return (
    <>
      {inputValue === "" ? (
        <SearchButton
          style={{ backroundColor: "gray", cursor: "not-allowed" }}
          disabled={true}
        >
          Campo vazio. Digite para pesquisar.
        </SearchButton>
      ) : (
        <SearchButton disabled={false} onClick={() => handleSearch()}>
          Pesquisar
        </SearchButton>
      )}
    </>
  );
}
