import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './assets/styles/main.scss';

import {
  Header,
  Main,
  Footer,
} from './presentation/layout';

import {
PageCreate,
PageUsers
} from './presentation/pages'

export function App() {
  return (
    <div className="Wrapper">
      <Router>
        <Header />
        <Main>
          <Route exact path="/" component={PageUsers} /> 
          <Route path="/users" component={PageUsers} />
          <Route path="/create" component={PageCreate} />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}
