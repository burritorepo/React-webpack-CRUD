// REACT
import React from "react";
// TO USE SWITCH, REDIRECT AND ROUTE
import { Route, Redirect, Switch } from "react-router-dom";
// IMPORT COMPONENT TO DISPLAY FROM CREATE USER PAGE
import { PageCreateUser } from '../Page'

function Routes() {
  return (
    <Switch>
      <Route path = "/create" component = { PageCreateUser } />
      <Redirect exact from = "/" to = "/users" />
    </Switch>
  )
}

export {
  Routes
}
