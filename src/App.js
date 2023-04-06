import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Posicao from "./components/Posicao";

function App() {
  const [posicoes, setPosicoes] = useState([
    {
      id: uuidv4(),
      nome: "Goleiro",
      cor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      nome: "Defensor",
      cor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      nome: "Meio-Campo",
      cor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      nome: "Ataque",
      cor: "#7fff5c",
    },
  ]);

  const jogador = {
    id: uuidv4(),
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

  function mudarCorDaPosicao(cor, id) {
    setPosicoes(
      posicoes.map((posicao) => {
        console.log(posicoes);
        if (posicao.id === id) {
          posicao.cor = cor;
        }
        return posicao;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        posicoes={posicoes.map((posicao) => posicao.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {posicoes.map((posicao) => (
        <Posicao
          jogadores={jogadores.filter(
            (jogador) => jogador.posicao === posicao.nome
          )}
          key={posicao.nome}
          mudarCor={mudarCorDaPosicao}
          nome={posicao.nome}
          id={posicao.id}
          corPrimaria={posicao.corPrimaria}
          cor={posicao.cor}
          aoDeletar={deletarJogador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
