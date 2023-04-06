import Jogador from "../Jogador";
import "./Posicao.css";
import hexToRgba from "hex-to-rgba";

const Posicao = (props) => {
  console.log(props);
  return props.jogadores.length > 0 ? (
    <section
      className="posicao"
      style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}
    >
      <input
        onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        value={props.cor}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
      <div className="posicoes">
        {props.jogadores.map((jogador) => {
          return (
            <Jogador
              corDeFundo={props.cor}
              key={jogador.nome}
              nome={jogador.nome}
              posicao={jogador.posicao}
              imagem={jogador.imagem}
              aoDeletar={props.aoDeletar}
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
