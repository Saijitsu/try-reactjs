import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Entrez du texte...'
    };

    this.updateText = this.updateText.bind(this);

  }

  // findDom(){
  //   let myDiv = document.getElementById('myDiv');
  //   ReactDOM.findDOMNode(myDiv).style.color = 'green';
  // }

  updateText(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        {/* <h1> API Components: Manipulation des DOM via la fonction findDOMNode() </h1>
        <div id="myDiv"> Are you okay? </div>
        <button onClick={this.findDom}> FIND DOM </button> */}

        <h1> Formulaire de saisie avec React </h1>
        {/* <input onChange ={this.updateText} type="text" value={this.state.text} />
        <p> {this.state.text} </p> */}
        <p>But: utiliser les formulaires du composant enfant </p>
        <p>La methode onChange déclanchera une mise à jour de l'état qui sera transmise à la valeur d'entrée enfant et restitué à l'écran</p>
        <p> Chaque fois que nous devons mettre à jour l'état à partir d'un composant enfant, nous devons transmettre
          la fonction qui gérera la mise à jour updateText() en tant que props formStateProp()</p>
        <Forms formDataProp={this.updateText} formStateProp={this.state.text} />
        {/* formDataProp: /propriété 1 correspond aux données insérées ou à la valeur par défaut le cas échéant */}
        {/* formStateProp: /propriété 2 affiche le contenu textuel */}
      </div>
    );
  }
}

class Forms extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.formDataProp} type="text" value={this.props.formStateProp} />
        <p> {this.props.formStateProp} </p>
      </div>
    );
  }
}
export default App;