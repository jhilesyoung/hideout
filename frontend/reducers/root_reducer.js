import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducers';
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
});

export default rootReducer;