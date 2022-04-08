import logo from "../../assets/logo.svg";
import { useState } from "react";
import "./styles.css"

const Header = ({ showProducts }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="headerDiv">
      <img className="logo" src={logo} alt="logo"></img>
      <div className="inputButtonDiv">
      <input className="inputPesquisa"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <button className="buttonPesquisar"
        onClick={() => {
            showProducts(inputValue);
            setInputValue("");
        }}
      >
        Pesquisar
      </button>
      </div>
    </div>
  );
};

export default Header;
