import Experiencia from "../../components/Experiencia/Experiencia";

export default function Homepage() {
  return (
    <>
      <div className="texto-apresentacao">
        <h1>Yuri Andrade</h1>

        <h2 className="texto-dinamico">Imaginando e inovando coisas na internet.</h2>

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
