import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import './header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar has-background-grey" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" width={112} height={28} />
            </a>
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-end">
              <NavLink to="/create" className="navbar-item" activeClassName="is-active">
                Create user
            </NavLink>
              <NavLink to="/users" className="navbar-item" activeClassName="is-active">
                Users
            </NavLink>
            </div>
          </div>
        </nav>
      </header >

    );
  }
}
