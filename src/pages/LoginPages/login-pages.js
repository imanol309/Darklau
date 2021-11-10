import Login from "../../components/login/login";
import "./login-pages.css";
import { useAuth0 } from "@auth0/auth0-react";


function LoginPages() {
  const { isLoading } = useAuth0();

  return (
    <div className={isLoading ? "containerOne" : null}>
        <Login />
    </div>
  );
}

export default LoginPages;
