import "./Jogador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Jogador = ({ jogador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(jogador.id);
  }

  const propsFavorito = {
    size: 25,
    onclick: favoritar,
  };

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
        <div className="favoritar">
          {jogador.favorito ? (
            <AiFillHeart
              {...propsFavorito}
              color="#ff0000"
              onClick={favoritar}
            />
          ) : (
            <AiOutlineHeart {...propsFavorito} onClick={favoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Jogador;
