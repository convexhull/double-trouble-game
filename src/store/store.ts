import { createStore, combineReducers, applyMiddleware } from "redux";

//For async action creators
import ReduxThunk from "redux-thunk";

//For using redux dev tools
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers
import gameReducer from "./game/reducer";
import globalReducer from "./global/reducer";
import loadingStateReducer from "./loadingState/reducer";
import errorStateReducer from "./errorState/reducer";

export const rootReducer = combineReducers({
    gameState: gameReducer,
    globalState: globalReducer,
    loadingState: loadingStateReducer,
    errorState: errorStateReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
