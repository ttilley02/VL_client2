import React, { Component } from "react";
import { Button, Input } from "../components/utils";
import AuthApiService from "../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, nick_name, user_name, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
      .then((user) => {
        full_name.value = "";
        nick_name.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    //Standard Reg Form
    const { error } = this.state;
    return (
      <div class="container">
        <p class="sign" align="center">
          Register
        </p>
        <form className="Form1" onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="full_name">
            <label htmlFor="RegistrationForm__full_name"></label>

            <Input
              required
              className="un"
              name="full_name"
              type="text"
              id="RegistrationForm__full_name"
              placeholder="Full Name"
            />
          </div>

          <div className="user_name">
            <label htmlFor="RegistrationForm__user_name"></label>

            <Input
              className="un"
              name="user_name"
              type="text"
              required
              id="RegistrationForm__user_name"
              placeholder="username"
            />
          </div>

          <div className="nick_name">
            <label htmlFor="RegistrationForm__user_name"></label>

            <Input
              className="un"
              name="nick_name"
              type="text"
              id="RegistrationForm__nick_name"
              placeholder="nick name"
            />
          </div>

          <div className="password">
            <label htmlFor="RegistrationForm__password"></label>

            <Input
              className="pass"
              name="password"
              type="password"
              required
              id="RegistrationForm__password"
              placeholder="Password"
            />
          </div>

          <br />
          <Button className="submit" type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
