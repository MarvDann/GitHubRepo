import React from 'react'
import GitRepoSearch from './GitRepoSearch/GitRepoSearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GitRepoDetails from './GitRepoSearch/GitRepoDetails/GitRepoDetails'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/details/:owner/:repo">
          <GitRepoDetails />
        </Route>
        <Route path="/">
          <GitRepoSearch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
