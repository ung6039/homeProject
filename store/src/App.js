import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router,Switch,Route }from "react-router-dom";
import Header from "./conponent/Header";
import Home from "./conponent/Home";

function App() {
  return (
      <Header/>
   <Router>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          {/!*<Route path={"/news"} component={FoodNews}/>*!/}
          {/!*<Route path={"/gs25"} component={GS25}/>*!/}
          {/!*<Route path={""} compoent={RecommendFood}/>*!/}
          {/!*<Route path={"/"} component={CateFoodList}/>*!/}
        </Switch>
      </Router>*/
  );
}

export default App;
