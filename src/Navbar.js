import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'
import firebaseApp from './firebase/Firebase';

class Navbar extends Component {
  constructor(props) {
    const user = firebaseApp.auth().currentUser
    super(props);
    this.signout = this.signout.bind(this);
    this.state = { user: user }

  }
  signout() {
    firebaseApp.auth().signOut().then(function () {
      console.log("sign out succesful");
      hashHistory.push('/login');
    }, function (error) {
      console.log("an error happened");
    });
  }
  render() {
    var loginButton;
    var signupButton;
    if (this.props.loggedin) {
      loginButton = (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-uppercase text-success" style={{ fontWeight: 'bold' }} href="#">React & Firebase App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.signout}><button className="btn btn-danger btn-sm" >Logout</button></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      <div>
      </div>
    }

    if (!this.props.loggedin) {
      signupButton = (
        <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-uppercase text-success" style={{ fontWeight: 'bold' }} href="#">React & Firebase App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Log In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      <div>
      </div>
    }
    return (
      <div className="Navbar">
        {loginButton}
        {signupButton}
      </div>
    );
  }
}

export default Navbar;
