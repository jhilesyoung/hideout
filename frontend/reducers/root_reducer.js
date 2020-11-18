import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducers";
import sessionReducer from "./session_reducer";


const rootReducer = coombineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
})

export default rootReducer;