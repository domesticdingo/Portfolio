import React from 'react';
//import { Route, Switch } from 'react-router-dom';

//Components
import { GlobalStyle } from "./components/Styles";
import Homepage from "./components/Home";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Homepage />
    </main>
  );
}

export default App;
