import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {
  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
    </div>
  );
}

export default App;
