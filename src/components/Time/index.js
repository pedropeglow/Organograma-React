import Jogador from "../Jogador";
import "./Time.css";

const Time = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="posicoes">
        {props.jogadores.map((jogador) => (
          <Jogador
            key={jogador.nome}
            nome={jogador.nome}
            posicao={jogador.posicao}
            imagem={jogador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
