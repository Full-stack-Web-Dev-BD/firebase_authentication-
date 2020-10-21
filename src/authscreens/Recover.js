import React, { Component } from 'react';
import * as firebase from 'firebase';

class Recover extends Component {
	constructor(props) {
    	super(props);
    	this.state = {email: ""};
    	//
    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();

	    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Email sent.
        alert("Please check your email "+email+" for instructions ");
        window.location.href='/'
      }, function(error) {
        alert("sorry an error has occured, Please try again")
        window.location.href='/'

      });
  }
  render() {
    return (
      <div className="Login">
        <h1>Forgot password</h1>
        <div className="col-md-4"></div>
        <div className="form-group col-md-4">
          <form onSubmit={this.handleSubmit}>
          	<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<br/>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Recover;
