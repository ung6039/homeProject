import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./conponent/Header";
import Home from "./conponent/Home";
import GS25 from "./conponent/GS25";
import CU from "./conponent/CU"
import Emart24 from "./conponent/Emart24"
import News from "./conponent/News"
import Board from "./conponent/Board"
import {Provider} from "react-redux";
import store from './store/Store'
import {BrowserRouter as Router,Switch,Route }from "react-router-dom";

function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          {/*<Route path={"/news"} component={News}/>*/}
          <Route path={"/gs25"} component={GS25}/>
          <Route path={"/cu"} compoent={CU}/>
          <Route path={"/emart24"} component={Emart24}/>
          {/*<Route path={"/board"} component={Board}/>*/}
        </Switch>
      </Router>
      </Provider>
  );
}

export default App;
