import React, { Component } from 'react';
// import logo from './logo.svg';
// import yoshi from './yoshi.png';
// import Menu from './Menu';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Je suis un Header!",
      headerTest: "Je suis un second Header!"
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <h2>{this.props.dataProps}</h2>
        <h2>{this.props.contentProps}</h2>
        <Header headerProps = {this.state.header} />
        <Header headerProps = {this.state.headerTest} />
        <Header headerProps = "Static props from header component!" />


      </div>
    );
  }
}

App.defaultProps = {
  contentProps:"Je suis du contenu"
}

class Header extends Component{

  render(){
    return(
      <h2>{this.props.headerProps}</h2>
    );
  }
}

export default App;



/* class App extends Component {

  // Constructeur
  constructor() {
    super();

    this.state = {
      header: "entete de page",
      content: "contenu de la page",
      data: [
        {
          "id": 0,
          "name": "Grenat",
          "age": 21
        },
        {
          "id": 1,
          "name": "Rubis",
          "age": 32
        },
        {
          "id": 1,
          "name": "Jade",
          "age": 26
        }
      ]
    }

    // methode
    this.getInfos = () => {
      alert("Hello Yoshi!")
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Menu />
          <header className="App-header">

            <h1> Les stats avec React </h1>
            <p> {this.state.header} </p>
            <p> {this.state.content}</p>
            <button onClick={this.getInfos}> Cliquez ici</button>

            <div>
              <h1> Lesprops avec React </h1>
              <table>
                <tbody>
                  {this.state.data.map((value, i) => <TableRow data={value} key={i} />)}
                </tbody>
              </table>
            </div>
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
            <Login />
            <SubmitButton />
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

class Login extends Component {
  render() {
    return (
      <div>
        <form className="Login">
          <label htmlFor="login">Super login : </label>
          <input type="text" id="login" name="user_login" />
          <label htmlFor="password"> Password to enter : </label>
          <input type="text" id="password" name="user_password" />
        </form></div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    return (
      <div className="button">
        <button type="submit">Do the stuff!</button>
      </div>
    )
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
}
*/