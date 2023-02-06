import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const posicoes = ["Goleiro", "Defesa", "Meio Campo", "Ataque"];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o Nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Posição"
          placeholder="Digite a Posição"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Posição" posicoes={posicoes} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
