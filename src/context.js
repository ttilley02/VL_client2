import React from "react";

//placeholder to minimize prop usafe.
const Context = React.createContext({
  cards: [],
  currentUser: {}
});

export default Context;
