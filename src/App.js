import { useState } from "react";
import "./App.css";

/**componentes */
import Button from "./components/button";
import Input from "./components/input";
import GitHub from "./components/DisplayCards";

/**componentes estilizados */
import { AlertParagraph } from "./components/stylesTags/AlertParagraph";
import { DivInput } from "./components/stylesTags/DivInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cardImage, setCardImage] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <DivInput>
          <Input inputValue={inputValue} setInputValue={setInputValue} />

          <Button
            inputValue={inputValue}
            setInputValue={setInputValue}
            setCardImage={setCardImage}
            setCardList={setCardList}
            cardList={cardList}
            setError={setError}
          />

          {error ? (
            <AlertParagraph>Repositório não encontrado.</AlertParagraph>
          ) : (
            <GitHub cardImage={cardImage} cardList={cardList} />
          )}
        </DivInput>
      </header>
    </div>
  );
}

export default App;
