import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './app'
import Page from './page'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/:name" component={Page} />
    </Route>
  </Router>
), document.getElementById('root'))

