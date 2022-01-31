import Login from "../../components/login/login";
import "./login-pages.css";
import { useAuth0 } from "@auth0/auth0-react";


function LoginPages() {
  const { isLoading, isAuthenticated } = useAuth0();
  console.log(isAuthenticated)
  return (
    <div className={isLoading ? "containerOne" : null}>
        <Login />
    </div>
  );
}

export default LoginPages;
