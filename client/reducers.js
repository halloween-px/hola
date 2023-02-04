import { combineReducers } from 'redux'
import { servicesReducer } from './modules/services/redux/reducers'
import { paramsReducer } from './modules/paramsInfo/redux/reducers'

// COMBINED REDUCERS
const reducers = {
  services: servicesReducer,
  paramsInfo: paramsReducer
}

export default combineReducers(reducers)