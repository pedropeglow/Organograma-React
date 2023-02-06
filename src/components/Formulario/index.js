import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const posicoes = ["Goleiro", "Defesa", "Meio Campo", "Ataque"];

  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [posicao, setPosicao] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("form foi submetido", nome, posicao, imagem);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <CampoTexto
          aoAlterado={(valor) => setNome(valor)}
          valor={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o Nome"
        />

        <CampoTexto
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
          posicoes={posicoes}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
