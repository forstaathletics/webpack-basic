
import { List } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer, { addReducer } from './reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

// Default middlewares
var middleWares = List.of(promiseMiddleware, thunk)

// Easily add middlware from outside the module
export function addMiddleware (mw) {
  middleWares = middleWares.push(mw)
  return middleWares
}

// Create our store with middleware
var getCreateStore = function (mw) {
  return applyMiddleware(...mw.toJS())(createStore)
}

// Look for the Redux Devtools Chrome extension and compose
// a new getCreateStore() if it exists and we're not in production
if (process.env.NODE_ENV !== 'production') {
  getCreateStore = function (mw) {
    return compose(
      applyMiddleware(...mw.toJS()),
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension() : f => f
    )(createStore)
  }
}

// Convenience export
export { addReducer }

// Our makeStore wrapper
export default function makeStore (initial = {}) {
  let cs = getCreateStore(middleWares)
  return cs(reducer(), initial)
}
