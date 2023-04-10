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
    favorito: false,
    nome: "Neymar",
    imagem:
      "https://conteudo.cbf.com.br/cdn/thumbs/250x0/202211/20221121154220_923.jpeg",
    posicao: "Ataque",
  };
  const [jogadores, setJogadores] = useState([jogador]);

  const aoNovoJogadorAdicionado = (jogador) => {
    jogador.id = uuidv4();
    setJogadores([...jogadores, jogador]);
  };

  function deletarJogador(id) {
    setJogadores(jogadores.filter((jogador) => jogador.id !== id));
  }

  function resolverFavorito(id) {
    setJogadores(
      jogadores.map((jogador) => {
        if (jogador.id === id) jogador.favorito = !jogador.favorito;
        return jogador;
      })
    );
  }

  function mudarCorDaPosicao(cor, id) {
    setPosicoes(
      posicoes.map((posicao) => {
        if (posicao.id === id) {
          posicao.cor = cor;
        }
        return posicao;
      })
    );
  }

  function cadastrarPosicao(novaPosicao) {
    setPosicoes([...posicoes, { ...novaPosicao, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarPosicao={cadastrarPosicao}
        posicoes={posicoes.map((posicao) => posicao.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {posicoes.map((posicao) => (
        <Posicao
          jogadores={jogadores.filter(
            (jogador) => jogador.posicao === posicao.nome
          )}
          aoFavoritar={resolverFavorito}
          key={posicao.nome}
          posicao={posicao}
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
