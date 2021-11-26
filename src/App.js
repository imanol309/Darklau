import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPages from "./pages/LoginPages/login-pages";
import HomePages from "./pages/HomePages/home-pages";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Switch>
        <Route
          path="/home"
          exact
          render={() => {
            return isAuthenticated ? <HomePages /> : <LoginPages />;
          }}
        />
        <Route path="/" exact>
          <LoginPages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
