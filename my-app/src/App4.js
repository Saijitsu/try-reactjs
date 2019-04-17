import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Entrez du texte...'
    };

    this.updateText = this.updateText.bind(this);

  }

  updateText(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">

        <h1> Formulaire de saisie avec React </h1>

        <p>But: utiliser les formulaires du composant enfant </p>

        <p>La methode onChange déclanchera une mise à jour de l'état qui sera transmise à la valeur d'entrée enfant et restitué à l'écran</p>
        <p> Chaque fois que nous devons mettre à jour l'état à partir d'un composant enfant, nous devons transmettre
          la fonction qui gérera la mise à jour updateText() en tant que props formStateProp()</p>

        <Forms formDataProp={this.updateText} formStateProp={this.state.text} />
        
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