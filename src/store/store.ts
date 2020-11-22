import { createStore, combineReducers, applyMiddleware } from 'redux';


//For async action creators
import ReduxThunk from 'redux-thunk';


//For using redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';


//import reducers
import gameReducer from './game/reducer';



const rootReducer = combineReducers({
    gameState: gameReducer
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));



export type RootState = ReturnType<typeof rootReducer>;

export default store;