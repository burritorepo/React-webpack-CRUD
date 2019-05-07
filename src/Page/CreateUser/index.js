import React, { Component } from 'react';

import {
  CreateUser
} from './Container/createUser/index'

import './create.scss';

export class PageCreate extends Component {
  render() {
    return (
      <div>
        <CreateUser />
      </div>
    );
  }
}
