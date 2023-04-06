import Jogador from "../Jogador";
import "./Posicao.css";
import hexToRgba from "hex-to-rgba";

const Posicao = ({ posicao, jogadores, mudarCor, aoDeletar }) => {
  console.log(posicao);
  return jogadores.length > 0 ? (
    <section
      className="posicao"
      style={{ backgroundColor: hexToRgba(posicao.cor, "0.6") }}
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, posicao.id)}
        value={posicao.cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: posicao.cor }}>{posicao.nome}</h3>
      <div className="posicoes">
        {jogadores.map((jogador) => {
          return (
            <Jogador
              corDeFundo={posicao.cor}
              jogador={jogador}
              key={jogador.nome}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Posicao;
