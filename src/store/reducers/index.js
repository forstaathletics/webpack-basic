import { combineReducers } from 'redux'
import { Map } from 'immutable'

var reducerMap = Map()

export function pageReducer (state = Map(), action) {
  switch (action.type) {
    case 'UPDATE_PAGE_INFO':
      return state.merge(action.payload)
  }
  return state
}

export function addReducer (name, reducer) {
  reducerMap = reducerMap.set(name, reducer)
}

addReducer('page', pageReducer)

export default () => combineReducers(reducerMap.toJS())
