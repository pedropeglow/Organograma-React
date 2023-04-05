import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
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

  const jogador = {
    nome: "Neymar",
    imagem:
      "https://conteudo.cbf.com.br/cdn/thumbs/250x0/202211/20221121154220_923.jpeg",
    posicao: "Ataque",
  };
  const [jogadores, setJogadores] = useState([jogador]);

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  };

  function deletarJogador() {
    console.log("deletando jogador");
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        posicoes={posicoes.map((posicao) => posicao.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {posicoes.map((posicao) => (
        <Time
          jogadores={jogadores.filter(
            (jogador) => jogador.posicao === posicao.nome
          )}
          key={posicao.nome}
          nome={posicao.nome}
          corPrimaria={posicao.corPrimaria}
          corSecundaria={posicao.corSecundaria}
          aoDeletar={deletarJogador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
