import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  console.log(props);
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.posicoes.map((posicao, index) => (
          <option key={posicao}>{posicao}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
