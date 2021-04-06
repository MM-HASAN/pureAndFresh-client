import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NOMatch from "./Components/NOMatch/NOMatch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NOMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
