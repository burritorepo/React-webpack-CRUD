import React, { Component } from 'react';

import {
  CreateUser
} from '../../containers/createUser/index'

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
