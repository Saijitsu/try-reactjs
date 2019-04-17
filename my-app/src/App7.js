import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

  }

  fetchURL(url) {
    //   let self = this; // this global
    if (url) {
      fetch('https://jsonplaceholder.typicode.com/' + url)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.setState({ posts: result });
          // self.setState({posts: result});
        })
    }
  }

  componentDidMount() {
    this.fetchURL('users');
  }

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <div className="App">
          <h1>Exemple de fetch ajax avec React</h1>
          {
            posts.map((post) => (<li key={post.id}> {post.name} </li>))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;


// https://reactjs.org/docs/faq-ajax.html