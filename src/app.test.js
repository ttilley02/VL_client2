import React from "react";
import ReactDOM from "react-dom";
import AddNote from "./routes/AddNote";
import Card from "./components/Card";
import Features from "./components/Features";
import LanguageChoice from "./components/LanguageChoice";
import LoginForm from "./components/LoginForm";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import RegistrationForm from "./components/RegistrationForm";
import UserCards from "./components/UserCards";
import ValidationError from "./components/ValidationError";
import CardListPage from "./routes/CardListPage";
import LandingPage from "./routes/LandingPage";
import LoginPage from "./routes/LoginPage";
import NotFoundPage from "./routes/NotFoundPage";
import RegPage from "./routes/RegPage";
import { shallow } from "enzyme";


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
  shallow(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("PrivateRoute renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  shallow(<PrivateRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("PublicOnly renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  shallow(<PublicOnlyRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("RegistrationForm renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("UserCards renders without crashing", () => {
  const testCard = {
    id: 190,
    spa_content: "anaranjado (adj)",
    eng_content: "orange",
    date_created: "2020-08-17T12:15:06.580Z",
    difficulty: "b",
    note:"look! I am a test!"
  };
  const index = 2;
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  shallow(<UserCards           
    key={index}
    card={testCard}
    note={testCard.note}
   />, div);
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

it("RegPage renders without crashing", () => {
  //DOM element to render the component into, then rendering component.Then unmounting afterwards
  const div = document.createElement("div");
  ReactDOM.render(<RegPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
