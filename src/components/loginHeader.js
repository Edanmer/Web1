import React, { PureComponent } from 'react';
import '../pages/app/main.css';

class LoginHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userData: []
    }
  }

  componentDidMount() {
    let data = localStorage.getItem("login");
    console.log(JSON.stringify(data,null,2));
    if (data === null) {
      this.setState({ isLoggedIn: false });
    }
    else {
      this.setState({ isLoggedIn: true, userData: JSON.parse(data) });
    }
  }

  renderText = () => {
    if (this.state.isLoggedIn) {
      return (
        <h3>You are logged in </h3>
      )
    }
    else {
      return (
        <h3>You are not logged in. <span><a href="/login">Log In Here!</a></span></h3>
      )
    }
  }

  render() {
    return (
        <div className="navbar navbar-light bg-dark justify-content-center text-white">
          {this.renderText()}
        </div>
    )
  }
}

export default LoginHeader;