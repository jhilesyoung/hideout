import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducers';
import modalReducer from './modal_reducer';
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    modal: modalReducer,
});

export default rootReducer;