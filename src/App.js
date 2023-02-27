import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

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
      <Time nome="Goleiro" />
      <Time nome="Defensor" />
      <Time nome="Meio-Campo" />
      <Time nome="Ataque" />
    </div>
  );
}

export default App;
