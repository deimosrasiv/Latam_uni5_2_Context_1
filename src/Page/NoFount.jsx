import { Link } from "react-router-dom";

const NoFount = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-5 col-md-6 align-self-center">
          <img
            className="rounded mx-auto d-block"
            src="../public/Noo404.png"
            align="center"
          />
        </div>

        <div className="col-sm-5 col-md-6 align-self-center">
          <strong>
            Awww ... No llores. Es sólo un error 404.
            <p></p>
            Lo que buscas puede haber sido desplazado en la memoria a largo
            plazo.{" "}
          </strong>
          <Link to="/">Volver al Home</Link>
        </div>
      </div>
    </div>
  );
};
export default NoFount;
