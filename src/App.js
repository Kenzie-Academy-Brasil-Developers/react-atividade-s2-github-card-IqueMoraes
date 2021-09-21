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
  const [conditional, setConditional] = useState("");
  const [cardList, setCardList] = useState([
    {
      owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      },
      id: 10270250,
      name: "react",
      html_url: "https://github.com/facebook/react",
    },
    {
      owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      },
      id: 10270250,
      name: "react",
      html_url: "https://github.com/facebook/react",
    },
    {
      owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
      },
      id: 10270250,
      name: "react",
      html_url: "https://github.com/facebook/react",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <DivInput>
          <Input
            conditional={conditional}
            setConditional={setConditional}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

          <Button
            inputValue={inputValue}
            setInputValue={setInputValue}
            setConditional={setConditional}
            setCardList={setCardList}
            cardList={cardList}
          />
          {conditional && (
            <AlertParagraph>Atenção! Campo de busca vazio.</AlertParagraph>
          )}
        </DivInput>
        {/* <div> */}
        <GitHub conditional={conditional} cardList={cardList} />
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
