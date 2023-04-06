import Jogador from "../Jogador";
import "./Posicao.css";

const Posicao = (props) => {
  return props.jogadores.length > 0 ? (
    <section
      className="posicao"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="posicoes">
        {props.jogadores.map((jogador) => {
          return (
            <Jogador
              corDeFundo={props.corPrimaria}
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
