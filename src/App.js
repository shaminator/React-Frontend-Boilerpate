import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import ReactGA from 'react-ga'
import { CreateBrowserHistory } from 'history'

import { Site } from './pages'




const App = (props) => {

  return (
    <Fragment>
      <Helmet>
        <title>FEED</title>
      </Helmet>
      <BrowserRouter basename='/'>
        <Switch>
          <Route exact path='/' component={Site} />
          <Route exact path='/feed' component={Site} />
          <Route exact path='/studio' component={Site} />
          <Route exact path='/feed/:uid' component={Site} />
          <Route exact path='/studio/:uid' component={Site} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;


// <Route exact path='/projects/:uid' component={Project} />