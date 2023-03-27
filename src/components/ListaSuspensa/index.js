import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.posicoes.map((posicao, index) => (
          <option key={posicao}>{posicao}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
