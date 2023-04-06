import "./Jogador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Jogador = ({ jogador, corDeFundo, aoDeletar }) => {
  return (
    <div className="jogador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(jogador.id)}
      ></AiFillCloseCircle>
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={jogador.imagem} alt="Imagem de jogador"></img>
      </div>
      <div className="rodape">
        <h4>{jogador.nome}</h4>
        <h5>{jogador.posicao}</h5>
      </div>
    </div>
  );
};

export default Jogador;
