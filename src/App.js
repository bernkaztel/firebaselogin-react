import React, { Component } from "react";
import "./App.css";
import APIcontainer from "./components/APIcontainer";
import VisitWall from "./components/VisitWall";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./firebaseConfig";
import * as firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = { isLoggedIn: false };
  }

  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => {
        this.setState({ isLoggedIn: true });
        console.log(user);
      });
  }

  logOut(){
    firebase
    .auth()
    .signOut()
    .then(() =>{
      this.setState({isLoggedIn: false})
    })
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {

      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar loginStatus={this.state.isLoggedIn} logIn={this.logIn} logOut={this.logOut} />
        <Switch>
          <Route path="/" exact component={APIcontainer} />
          <Route path="/book" component={VisitWall} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
