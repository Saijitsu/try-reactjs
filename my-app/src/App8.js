import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

  }

  fetchURL(url) {
    if (url) {
      fetch('https://reqres.in/api/' + url)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.setState({ posts: result.data });
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
            posts.map((post) => (<li key={post.id}> {post.last_name} </li>))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;


// https://reactjs.org/docs/faq-ajax.html