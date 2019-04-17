import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      texte: '',
      tasks: [
        "Task1",
        "Task2",
        "Task3",
        "Task4",
        "Task5",
        "Task6",
        "Task7",
        "Task8"
      ]
    }
    this.addTask = this.addTask.bind(this);
    // For a given function, creates a bound function that has the same body as
    //  the original function. The this object of the bound function is associated 
    //  with the specified object, and has the specified initial parameters.
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/bind#Description
  }

  onChange = (event) => {
    this.setState({ texte: event.target.value })
  }

  addTask(event) {
    event.preventDefault();
    // let item = this.state.texte;
    // let myArray = this.state.tasks.slice();
    // myArray.push(item)
    this.setState({
      texte: '',
      // tasks: myArray
      tasks: [...this.state.tasks, this.state.texte]
      // Le Spread opérateur en ES6 
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition#Syntaxe
      // [...objetIterable, 4, 5, 6] => Littéraux de tableaux
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1> Afficher une liste des tâches depuis un composant Task </h1>
          <form onSubmit={this.addTask}>
            <input type="text" value={this.state.texte} onChange={this.onChange}></input>
            <button> Ajouter </button>
          </form>
          {this.state.tasks.map((t, i) => <TaskList key={i} taskProp={t} />)}
        </div>
      </React.Fragment>
    );
  }
}

class TaskList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>{this.props.taskProp}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default App;