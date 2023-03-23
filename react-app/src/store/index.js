import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import discover from "./discover";
import like from "./like";
import profile from "./profile";
import questionReducer from "./question";
import pictureReducer from "./picture";
import matchesReducer from "./match";
const rootReducer = combineReducers({
	session,
	discover,
	like,
	profile,
	questionReducer,
	pictureReducer,
	matchesReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
	enhancer = applyMiddleware(thunk);
} else {
	const logger = require("redux-logger").default;
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
	return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
