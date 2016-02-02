import { Map } from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'react-router-redux'

import makeStore, { addReducer, addMiddleware } from './store'
import App from './app'

addReducer('routing', routeReducer)
addMiddleware(syncHistory(browserHistory))
const store = makeStore({'page': Map({'header': Map({'title': 'Forsta - Basic Webpack'})})})

// Use an async getCompoenent to use code splitting
var routes = (
  <Route component={App} path='/'>
    <Route path='/about'
        getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./about').default)
          })
        }}
    />
    <Route path='/contact'
        getComponent={(location, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./contact').default)
          })
        }}
    />
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
