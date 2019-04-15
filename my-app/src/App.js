import React, { Component } from 'react';
// import logo from './logo.svg';
import yoshi from './yoshi.gif';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Menu/>
          <img src={yoshi} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.nintendo.fr/Jeux/Nintendo-Switch/Yoshi-s-Crafted-World-1233953.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yoshi Crafted World here!
          </a>
          <Login/>
          <Button/>
        </header>
      </div>
    );
  }
}

export default App;

class Login extends Component {
  render() {
    return (
      <div>
      <form className="Login">
        <label htmlFor= "login">Super login : </label>
        <input type="text" id="login" name="user_login"/>
        <label htmlFor="password"> Password to enter : </label>
        <input type="text" id="password" name="user_password"/>
      </form></div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div className="button">
      <button type="submit">Do the stuff!</button>
      </div>
    )
  }
}