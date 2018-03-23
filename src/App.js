import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import Map from './components/Map'
const Auth = new AuthService();

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to artMAP {this.props.user.username}</h2>
        </div>
        <Map/>
        <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);
