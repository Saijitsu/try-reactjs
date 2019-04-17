import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 0
    }
    this.setNumero = this.setNumero.bind(this);
  }
  setNumero() {
    this.setState({ data: this.state.data + 1 })
  }

  render() {
    return (
      <div className="App">
        <h1> Cycle de vie des Composants </h1>
        <p> Dans cet exemple on a initialisé notre data à zeo et avec le bouton on va
          mettre à jour le state via la fonction setNumero. Tous les cycles de vie seront
        implementé dans le composant enfant Content </p>
        <button onClick={this.setNumero}> Incrémentation</button>
        <Content dataProp={this.state.data} />
      </div>)
  }
}

class Content extends Component {
  componentWillMount() {
    console.log('component Will Mount');
  }

  componentDidMount() {
    console.log('component Did Mount');
  }

  componentWillReceiveProps(nProps) {
    console.log('component Will Receive Props', nProps);
  }

  shouldComponentUpdate(nProps, nState) {
    return true
    // return true + console.log('should Component Update Props: ', nProps, 'should Component Update State: ', nState = true)
  }

  componentWillUpdate(nextProps, nextState) {
     console.log ('Component Will Update')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log ('Component Did Update')
 }

 componentWillUnmount(){
  console.log ('component Will Unmount')
 } 

  render() {
    return (
      <div>
        <h5> {this.props.dataProp}</h5>
      </div>
    );
  }
}

export default App;

// // Lifecycle Methods

// // componentWillMount is executed before rendering, on both the server and the client side.

// // componentDidMount is executed after the first render only on the client side.This is where
//  AJAX requests and DOM or state updates should occur.This method is also used for integration with other 
//  JavaScript frameworks and any functions with delayed execution such as setTimeout or setInterval.We are using
//   it to update the state so we can trigger the other lifecycle methods.

// // componentWillReceiveProps is invoked as soon as the props are updated before another render is called.
// We triggered it from setNewNumber when we updated the state.

// // shouldComponentUpdate should return true or false value.This will determine if the component
//  will be updated or not.This is set to true by default.If you are sure that the component doesn't 
//  need to render after state or props are updated, you can return false value.

// // componentWillUpdate is called just before rendering.

// // componentDidUpdate is called just after rendering.

// // componentWillUnmount is called after the component is unmounted from the dom.We are unmounting our component in main.js.

// // In the following example, we will set the initial state in the constructor function.The setNewnumber is 
// used to update the state.All the lifecycle methods are inside the Content component.