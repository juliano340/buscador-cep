import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";

import api from "./Services/Api";

import "./style.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      alert("Ops... Erro ao buscar informações!");
      setInput("");
      
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP para consultar..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <BiSearchAlt2 size={20} color="#eee" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main id="main" className="main" style={{display:'flex'}}>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}</span>
        </main>
      )}

      
        <footer className="footer">
          <a className="footer-link" href="https://www.juliano340.com">
            <p>juliano340.com</p>
          </a>
        </footer>
      

      
    </div>
  );
}

export default App;
