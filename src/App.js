import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const posicoes = [
    {
      nome: "Goleiro",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Defensor",
      corPrimaria: "#02CFFA",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Meio-Campo",
      corPrimaria: "#A6D157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Ataque",
      corPrimaria: "#E06869",
      corSecundaria: "#FDE7E8",
    },
  ];

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
