import Experiencia from "../../components/Experiencia/Experiencia";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <>
      <div className="texto-apresentacao">
        <h1>Yuri Andrade</h1>

        <p className="texto-dinamico">
          <h2>Imaginando e inovando coisas na internet.</h2>
        </p>

        <p>
          Profissional desenvolvedor de software Frontend viciado em
          simplicidade, requinte, simetria e perfeição.
        </p>
      </div>

      <div className="experiencia">
        <Experiencia />
      </div>
    </>
  );
}
