import Banner from "./components/Banner";
import CampoTexto from "./components/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o Nome" />
      <CampoTexto label="Posição" placeholder="Digite a Posição" />
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
