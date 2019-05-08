import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import './assets/styles/main.scss';

import {
  Header,
  Main,
  Footer,
} from './common';

export function App() {
  return (
    <div className="Wrapper">
      <Router>
        <Header />
        <Main>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}
