import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Hi noob!'
    };
    this.clearMyInput = this.clearMyInput.bind(this);
    this.inputUpdateState = this.inputUpdateState.bind(this);
  }

  clearMyInput() {
    this.setState({ data: '' });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    ReactDOM.findDOMNode(this.refs.myInput).style.backgroundColor = "red";
  }

  inputUpdateState(event) {
    this.setState({ data: event.target.value })
  }

  render() {

    return (
      <React.Fragment>
        <div className="App">
          <h1>Ref. React Js</h1>
          <p>La référence ref est utilisée pour renvoyer une référence à l'élément </p>
          <input type="text" value={this.state.data} ref="myInput" onChange={this.inputUpdateState} />
          <button onClick={this.clearMyInput}>Cliquer</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
