import "./Jogador.css";

const Jogador = ({ nome, imagem, posicao }) => {
  return (
    <div className="jogador">
      <div className="cabecalho">
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
