import React, { Component } from "react";
import { Button, Input } from "../components/utils";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  //Authorization protocol
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  //typical form with credential requirements
  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="Form1" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="user-box">
            <label htmlFor="LoginForm__user_name">
              <br />{" "}
            </label>
            <Input
              className="un"
              required
              name="user_name"
              id="LoginForm__user_name"
              placeholder="username"
            />
          </div>
          <br />
          <div className="user-box">
            <label htmlFor="LoginForm__password">
              <br />{" "}
            </label>
            <Input
              className="pass"
              required
              name="password"
              type="password"
              id="LoginForm__password"
              placeholder="password"
            />
          </div>
          <br />
          <Button className="submit" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
