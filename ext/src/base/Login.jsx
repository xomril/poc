import { response } from "express";
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
        email: null,
        password: null,
        login: false,
        store: null
    }
  }

  login() {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(this.state)
    }).then((response)=> {
        console.log('res')
    })
  }
  render() {
    return (
        <div>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <br />
          <input
            type="text"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <br />
          <button onClick={()=>{this.login()}}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;
