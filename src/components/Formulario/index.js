import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [posicao, setPosicao] = useState("");
  const [nomePosicao, setNomePosicao] = useState("");
  const [corPosicao, setCorPosicao] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      imagem,
      posicao,
    });
    setNome("");
    setPosicao("");
    setImagem("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <Campo
          aoAlterado={(valor) => setNome(valor)}
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o Nome"
        />

        <Campo
          aoAlterado={(valor) => setImagem(valor)}
          valor={imagem}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={posicao}
          aoAlterado={(valor) => setPosicao(valor)}
          obrigatorio={true}
          label="Posição"
          posicoes={props.posicoes}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarPosicao({ nome: nomePosicao, cor: corPosicao });
        }}
      >
        <h2>Preencha os dados para adicionar uma nova posição.</h2>
        <Campo
          aoAlterado={(valor) => setNomePosicao(valor)}
          valor={nomePosicao}
          obrigatorio
          label="Posição"
          placeholder="Digite a Posição"
        />
        <Campo
          type="color"
          aoAlterado={(valor) => setCorPosicao(valor)}
          valor={corPosicao}
          obrigatorio
          label="Cor"
          placeholder="Digite a cor da posição."
        />
        <Botao>Adicionar Posição</Botao>
      </form>
    </section>
  );
};

export default Formulario;
