//react 16.0.0 boilerplate
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        <a href="/auth/google">Sign In With Google</a>
      </div>
    );
  }

}


export default App;
