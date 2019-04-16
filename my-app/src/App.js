import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
    };

    this.setArray = this.setArray.bind(this);
    this.forceUpdateFunction = this.forceUpdateFunction.bind(this);
  }

  setArray(){
    // let item = [" Fraise ", " Kiwi "];
    // let myArray = this.state.data.slice();
    // myArray.push(item);

    // this.setState({data:myArray});

    this.setState({data: ["Fraise","Kiwi"]});
  }

  forceUpdateFunction(){
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1> API Components </h1>
        <p>La methode setState() est utilisée pour mettre à jour l'état d'un composant</p>
        <span> {this.state.data} </span>
        <button onClick={this.setArray}>Set Array</button>

        <p> La methode forceUpdate() est utilisée pour forcer manuellement à mettre à jour l'état d'un composant</p>

        <span>Nombre Aléatoire: {Math.random()} </span>
        <button onClick={this.forceUpdateFunction}> ForceUpdate </button>

      </div>
    );
  }
}

export default App;