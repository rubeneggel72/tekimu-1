import React, { Component } from "react";
import "../styles/App.css";
import NavBar from "../components/NavBar";
import "materialize-css/dist/css/materialize.min.css";
import AuthService from "../services/AuthService";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { BackgroundAdd } from "../components/Background";
import ErrorToast from "../services/ErrorToastService";
import * as actionCreators from "../actions/user-actions";
import Logo from "../assets/heart-anim.gif";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      pwd: "",
      loginError: "",
      pwdError: "",
      loginValid: false,
      pwdValid: false,
      responseToPost: ""
    };
    this.Auth = new AuthService();
    this._isMounted = false;
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row login-register-page">
          <div className="col a12 m6" id="login-box">
            <div className="login-header">
              A unos pocos clicks del {" "}
              <span className="logo-header-love">
                Am
                <img
                  className="login-love-logo"
                  src={Logo}
                  alt="Logo on login"
                />
                r
              </span>
            </div>
            <div className="card-panel center">
              <i className="medium material-icons">account_box</i>
              <span className="title-page">Ingresar</span>
              <div className="card-panel">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <i className="material-icons prefix input-icons">
                      person_outline
                    </i>
                    <input
                      type="text"
                      name="name"
                      id="user-login"
                      autoComplete="username"
                      value={this.state.login}
                      onChange={this.handleChange}
                      onKeyUp={this.validateLogin}
                      required
                    />
                    <div className="login-error">{this.state.loginError}</div>
                    <label htmlFor="user-login">Nick o Email</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix input-icons">
                      lock_outline
                    </i>
                    <input
                      type="password"
                      name="pwd"
                      id="pwd-login"
                      autoComplete="current-password"
                      value={this.state.pwd}
                      onChange={this.handleChange}
                      onKeyUp={this.validatePwd}
                      required
                    />
                    <div className="login-error">{this.state.pwdError}</div>
                    <label htmlFor="pwd-login">Contraseña</label>
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    value="Login"
                    className="btn"
                    disabled={!this.state.loginValid || !this.state.pwdValid}
                  />
                </form>
                <p className="register-login-link link-left">
                  Olvidaste tu contraseña?{" "}
                  <NavLink className="pink-link" to="/users/forgot-password">
                    Presiona aqui
                  </NavLink>
                </p>
                <p className="register-login-link link-right">
                  Aún no tienes una cuenta?{" "}
                  <NavLink className="pink-link" to="/users/register">
                    Registrate
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Redirect user if already logged in
  componentDidMount() {
    this._isMounted = true;
    BackgroundAdd();
    if (this.Auth.loggedIn()) {
      ErrorToast.auth.userAlreadyLogged();
      this.props.history.replace("/");
    }
  }

  // Checking username or email format is valid
  validateLogin = () => {
    let loginError = "";
    let regexLogin = /^[a-zA-Z0-9]*-?[a-zA-Z0-9]*$/;
    let regexEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

    if (
      !this.state.login.match(regexLogin) &&
      !this.state.login.match(regexEmail)
    ) {
      loginError = "Por favor ingresa Nick/Email válido";
    } else if (this.state.login === "") {
      loginError = "Nick/Email no puede quedar vacío";
    } else if (this.state.login.length > 30) {
      loginError = "Nick/Email debe tener menos de 30 caracteres";
    }

    if (loginError) {
      this._isMounted && this.setState({ loginValid: false });
    } else if (this.state.login !== "") {
      this._isMounted && this.setState({ loginValid: true });
    }

    this._isMounted && this.setState({ loginError });
  };

  // Checking password format is valid
  validatePwd = () => {
    let pwdError = "";

    if (this.state.pwd.length < 8 || this.state.pwd.includes(" ")) {
      pwdError = "Por favor ingresa una contraseña válida";
    } else if (this.state.pwd.length > 30) {
      pwdError = "Contraseña debe tener menos de 30 caracteres";
    }

    if (pwdError) {
      this._isMounted && this.setState({ pwdValid: false });
    } else if (this.state.pwd) {
      this._isMounted && this.setState({ pwdValid: true });
    }

    this._isMounted && this.setState({ pwdError });
  };

  // On user input change, update states
  handleChange = e => {
    const isLogin = e.target.name === "name";
    const isPwd = e.target.name === "pwd";

    if (isLogin) {
      this._isMounted && this.setState({ login: e.target.value });
    }

    if (isPwd) {
      this._isMounted && this.setState({ pwd: e.target.value });
    }
  };

  // On user button submit, execute this
  handleSubmit = async e => {
    e.preventDefault();
    Axios.post("/users/login", {
      login: this.state.login.toLowerCase(),
      pwd: this.state.pwd
    })
      .then(res => {
        this._isMounted && this.setState({ responseToPost: res.status });
        localStorage.setItem("Token", res.data["token"]);
        this.props.getUserData(res.data["username"]);
        this.props.history.push("/");
      })
      .catch(err => {
        ErrorToast.custom.error(err.response["data"]["message"], 3000);
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
}

const mapStateToProps = state => {
  return {
    userConnectedData: state.user.data,
    userConnectedStatus: state.user.status
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Login);
