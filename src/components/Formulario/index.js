import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do Jogador</h2>
        <CampoTexto label="Nome" placeholder="Digite o Nome" />
        <CampoTexto label="Posição" placeholder="Digite a Posição" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
