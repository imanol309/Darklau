import "./login.css";
import Comunicacion from '../../assets/img/comunicacion.jpg'
import facebook from '../../assets/iconsRedes/facebbok.png'
import google from '../../assets/iconsRedes/google.png'
import twiter from '../../assets/iconsRedes/twiter.png'
import {useAuth0} from '@auth0/auth0-react'

function Login() {

const {loginWithRedirect, logout } = useAuth0()


  return (
    <div className="container">
      <div className="containerLogin">
        <div className="NavBarLogin">
          <div className="TextPrincipalContainer">
            <h3 className="TextPrincipal">Darklau</h3>
          </div>
          <div className="textNewUser">
            <p className="textUser">New User?</p>
            <p className="TextUp">Sign Up</p>
          </div>
        </div>
        <div className="FormLogin">
          <div className="FormImg">
            <img src={Comunicacion} alt="" className="imgComunicacion"/>
          </div>
          <div className="FormInput">
            <div className="FormTitulo">
              <h1 className="textBack">Welcome Back!</h1>
              <h5 className="textCon">Login to continue</h5>
            </div>
            <div className="containerForm">
              <input type="text" className="inputGmail" placeholder="usename11@gmail.com"/>
              <input type="password" className="inputPassword" placeholder="Enter Password" />
            </div>
            <div className="FormButton">
              <button onClick={() => loginWithRedirect()} className="btnLogin">LOGIN</button>
              <button onClick={() => logout()} className="btnPassword">FORGET PASSWORD?</button>
            </div>
            <div className="FormRedes">
              <p className="tituloPrincipalRedes">Login With</p>
              <div className="containerIconRedes">
                <img src={google} alt="" className="imgRedes" />
                <img src={facebook} alt="" className="imgRedes"/>
                <img src={twiter} alt="" className="imgRedes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
