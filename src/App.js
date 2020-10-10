import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact></Route>
          <Route path="/programmes" exact></Route>
          <Route path="/notices" exact></Route>
          <Route path="/gallery" exact></Route>
          <Route path="/contact" exact></Route>
          <Route path="/application-form" exact></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
