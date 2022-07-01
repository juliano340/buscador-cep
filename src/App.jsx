import { useState } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';

import './style.css';

function App() {
  
  const [input, setInput] = useState('');

  return (

    <div className="container">
    
      <h1 className='title'>Buscador de CEP</h1>
    
      <div className="containerInput">
    
        <input 
        type="text" 
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch">
          <BiSearchAlt2 size={20} color="#eee"/>
        </button>
    
      </div>

      <main className='main'>

        <h2>CEP: 91510490</h2>

        <span>Rua teste</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila João Pessoa</span>
        <span>Porto Alegre - RS</span>

      </main>
    
    </div>
  );
}

export default App;
