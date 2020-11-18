import { combineReducers } from 'redux'
import { usersReducer } from './reducers/users_reducer.js'

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;