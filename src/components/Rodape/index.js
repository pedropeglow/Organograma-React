import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://github.com/pedropeglow" target="_blank">
              <img src="./images/github.png" alt="Imagem do Github"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedro-peglow/" target="_blank">
              <img
                src="./images/linkedin.png"
                alt="Imagem do Linkedin
            "
              ></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p>Desenvolvido por Pedro</p>
      </section>
    </footer>
  );
};

export default Rodape;
