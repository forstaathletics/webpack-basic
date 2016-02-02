import { Map } from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'react-router-redux'

import makeStore, { addReducer, addMiddleware } from './store'
import App, { AboutPage, ContactPage } from './app'

addReducer('routing', routeReducer)
addMiddleware(syncHistory(browserHistory))
const store = makeStore({'page': Map({'header': Map({'title': 'Forsta - Basic Webpack'})})})

var routes = (
  <Route component={App} path='/'>
    <Route component={AboutPage} path='/about' />
    <Route component={ContactPage} path='/contact' />
  </Route>
)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <Router history={browserHistory} routes={routes} />
      </div>
    </Provider>
  </div>
  ,
  document.getElementById('root')
)
