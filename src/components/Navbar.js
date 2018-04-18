import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserLogin from './menu/UserLogin';
import UserNotLogged from './menu/UserNotLogged';

export default class Navbar extends Component {
  
  render() {
    let ButtonToShow;
    if(this.props.loginStatus){
      ButtonToShow = <UserLogin  state={this.props.loginStatus} logoutFunction={this.props.logOut}/>;
    } else{
      ButtonToShow= <UserNotLogged  state={this.props.loginStatus} loginFunction={this.props.logIn} />
    }

    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <button className="btn m-2">
          <Link to="/">Home</Link>
        </button>
        <button className="btn m-2">
          <Link to="/book">Libro de Visitas</Link>
        </button>
        {ButtonToShow}

      </nav>
    );
  }
}
