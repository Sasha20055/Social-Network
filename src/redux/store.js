import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store