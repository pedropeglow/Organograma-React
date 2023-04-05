import "./Jogador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Jogador = ({ nome, imagem, posicao, corDeFundo, aoDeletar }) => {
  return (
    <div className="jogador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={aoDeletar}
      ></AiFillCloseCircle>
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="Imagem de jogador"></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{posicao}</h5>
      </div>
    </div>
  );
};

export default Jogador;
