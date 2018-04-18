import React, { Component } from 'react';

export default class UserLogin extends Component {
  render() {
    return (
      <button className="btn btn-danger m-2" onClick={this.props.logoutFunction} >Cerrar sesión</button>
    )
  }
}
