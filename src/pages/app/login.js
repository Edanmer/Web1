import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login: []
    }
  }

  handleLogin = (evt) => {
    evt.preventDefault();
    axios.post('http://api-empleos.net:8080/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((objResponse) => {
        console.log(JSON.stringify(objResponse, null, 2));
        localStorage.setItem("login", JSON.stringify(objResponse.data));
        window.location = "/";
      })
      .catch((objError) => {
        console.log("ERROR" + JSON.stringify(objError, null, 2));
      })
  }

  render() {
    return (
      <div className="container">
        <section id="login">
          <div className="card card-container">
            <h2 className='login_title text-center'>Login</h2>
            <hr />

            <form className="form-signin">
              <span id="reauth-email" className="reauth-email"></span>
              <p className="input_title">Email</p>
              <input type="text" id="inputEmail" className="login_box" placeholder="Email" required autoFocus 
                value={this.state.email}
                onChange={(evt) => { this.setState({ email: evt.target.value }) }} />
              <p className="input_title">Password</p>
              <input type="password" id="inputPassword" className="login_box" placeholder="******" required 
                value={this.state.password}
                onChange={(evt) => { this.setState({ password: evt.target.value }) }}/>
              <button className="btn btn-lg btn-primary" type="submit" 
                onClick={(evt) => this.handleLogin(evt) }>Login</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default login;