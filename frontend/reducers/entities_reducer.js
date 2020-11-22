import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import serversReducer from './servers_reducer'

// const entitiesReducer = combineReducers({
//   users: usersReducer
// });

// export default entitiesReducer;

export default combineReducers({
    users: usersReducer,
    servers: serversReducer
});
  