import React, { Component } from 'react';

export default class UserNotLogged extends Component {
  render() {
    return (
      
      <button className="btn btn-success m-2" onClick={this.props.loginFunction}>Regístrate</button>
    )
  }
}
