import "./login.css";
import Comunicacion from "../../assets/img/comunicacion.jpg";
import facebook from "../../assets/iconsRedes/facebbok.png";
import google from "../../assets/iconsRedes/google.png";
import twiter from "../../assets/iconsRedes/twiter.png";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <div className="container ">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <div className="containerLogin">
          <div className="NavBarLogin">
            <div className="TextPrincipalContainer">
              <h3 className="TextPrincipal">Darklau</h3>
            </div>
            {/* {isAuthenticated ? (
              <div className="textNewUser">
                <p className="TextUp" onClick={() => logout()}>
                  SALIR
                </p>
              </div>
            ) : null} */}
          </div>
          <div className="FormLogin">
            <div className="FormImg">
              <img src={Comunicacion} alt="" className="imgComunicacion" />
            </div>
            <div className="FormInput">
              <div className="FormTitulo">
                <h1 className="textBack">Bienvenido de nuevo!</h1>
                <h5 className="textCon">Iniciar sesión para continuar</h5>
              </div>
              <div className="FormButton">
                <div className="FormButtonIniciar">
                  <button
                    onClick={() => loginWithRedirect()}
                    className="btnLogin"
                  >
                    Iniciar Seccion
                  </button>
                </div>
              </div>
              <div className="FormRedes">
                <p className="tituloPrincipalRedes">Redes Sociales</p>
                <div className="containerIconRedes">
                  <img src={google} alt="" className="imgRedes" />
                  <img src={facebook} alt="" className="imgRedes" />
                  <img src={twiter} alt="" className="imgRedes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
