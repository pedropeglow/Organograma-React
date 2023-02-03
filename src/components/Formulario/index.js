import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const posicoes = ["Goleiro", "Defesa", "Meio Campo", "Ataque"];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <CampoTexto label="Nome" placeholder="Digite o Nome" />
        <CampoTexto label="Posição" placeholder="Digite a Posição" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Posição" posicoes={posicoes} />
      </form>
    </section>
  );
};

export default Formulario;
