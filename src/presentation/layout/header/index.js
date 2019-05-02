import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import './header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar is-warning has-background-grey has-text-black">
          <div className="navbar-brand">
            <NavLink to="/">
              Logo
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <NavLink to="/create" className="navbar-item" activeClassName="is-active">
                Create user
                </NavLink>

              <NavLink to="/users" className="navbar-item" activeClassName="is-active">
                Users
                </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
