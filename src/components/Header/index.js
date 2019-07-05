import React, { Component } from "react";
import "./Header.css";

import logo from "../../assets/logo.png";
import account from "../../assets/icon-account.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} />
        <span>
          <h3>My profile</h3>
          <img src={account} />
        </span>
      </header>
    );
  }
}
