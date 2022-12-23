import { combineReducers } from 'redux'
import { servicesReducer } from './modules/services/redux/reducers'

// COMBINED REDUCERS
const reducers = {
  services: servicesReducer
}

export default combineReducers(reducers)