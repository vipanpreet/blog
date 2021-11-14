import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { postsReducer } from "./posts/postsReducer";
import { userLoginReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  postsState: postsReducer,
  auth: userLoginReducer,
});

const middleware = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
