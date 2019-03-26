import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import About from "./components/about.component";
import Rules from "./components/rules.component";
//import "./components/style.css";
import "./App.css";
import logo from "./logo.png";
import topTitle from "./topTitle.png";

class App extends Component {
  render() {
    return (
<div id="everything">

<Router>
        <div className="container general">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">main</Link>
            <Link to="/about" className="navbar-brand">about</Link>
            <Link to="/rules" className="navbar-brand">rules</Link>
            
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
    
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <img src={topTitle} class="topimg centered-flex" width="1110" height="170" alt="bestseller" />
          <p class="explanation centerflex">I'm trying to make a novel, please write something to continue the story, the more people participate the better.</p>
          <Route path="/" exact component={CreateTodo}/>
          <Route path="/about"  exact component={About}/>
          <Route path="/rules"  exact component={Rules}/>
  
        </div>
      </Router>
    
      </div>
    );
  }
}

export default App;