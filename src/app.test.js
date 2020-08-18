import React from "react";
import ReactDOM from "react-dom";
import AddNote from "../src/components/AddNote";
import Card from "../src/components/Card";
import Features from "../src/components/Features";
import LanguageChoice from "../src/components/LanguageChoice";
import LoginForm from "../src/components/LoginForm";
import Nav from "../src/components/Nav";
import PrivateRoute from "../src/components/PrivateRoute";
import PublicOnlyRoute from "../src/components/PublicOnlyRoute";
import RegistrationForm from "../src/components/RegistrationForm";
import UserCards from "../src/components/UserCards";
import ValidationError from "../src/components/ValidationError";
import CardListPage from "../src/routes/CardListPage";
import LandingPage from "../src/routes/LandingPage";
import LoginPage from "../src/routes/LoginPage";
import NotFoundPage from "../src/routes/NotFoundPage";
import ProfilePage from "../src/routes/ProfilePage";
import RegPage from "../src/routes/RegPage";
import { shallow } from "enzyme";

it("AddNote renders without crashing", () => {
  const testCard = {
    id: 190,
    spa_content: "anaranjado (adj)",
    eng_content: "orange",
    date_created: "2020-08-17T12:15:06.580Z",
    difficulty: "b"
  };
  const index = 2;
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  shallow(<AddNote key={index} card={testCard} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Card renders without crashing", () => {
  const testCard = {
    id: 190,
    spa_content: "anaranjado (adj)",
    eng_content: "orange",
    date_created: "2020-08-17T12:15:06.580Z",
    difficulty: "b"
  };
  const index = 2;
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<Card key={index} card={testCard} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Features renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("LanguageChoice renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<LanguageChoice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("LoginForm renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Nav renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("PrivateRoute renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<PrivateRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("PublicOnly renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<PublicOnlyRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("RegistrationForm renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("UserCards renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<UserCards />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("ValidationError renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<ValidationError />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("CardListPage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<CardListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("LandingPage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("LoginPage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<LoginPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("NotFoundPage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<NotFoundPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("ProfilePage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<ProfilePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("RegPagerenders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<RegPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
