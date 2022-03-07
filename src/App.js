import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

//components
import Country from "./components/Country";
import Navbar from "./components/Navbar";
import About from "./components/About";
import  "./Media.css"

function App() {
  const url = "https://restcountries.com/v2/all";

  const { data: coutries, error, isPending } = useFetch(url);

  return (
    <Router>
      <Navbar />
      {isPending && <div>Loading ...</div>}
      {error && <div> {error}</div>}
      <Switch>
        <Route exact path="/">
          <Country coutries={coutries} />
        </Route>
        <Route path="/country/:name">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
