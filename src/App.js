import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget'

class App extends Component {
  constructor() {
    super();
    this.state = {
        user: {}
    };
    this.handleLogIn = this.handleLogIn.bind(this);
	  netlifyIdentity.on("login", user =>{
		  console.log(user);
		  this.setState({user});
	  });
	  netlifyIdentity.on("init", user =>{
		  console.log(user);
		  this.setState({user});
	  });
	  netlifyIdentity.on("logout", user => this.setState({}));
  }

  handleLogIn () {
    netlifyIdentity.open()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

          <button onClick={this.handleLogIn} >Log in with netlify</button>
        </div>
      </div>
    );
  }
}

export default App;
