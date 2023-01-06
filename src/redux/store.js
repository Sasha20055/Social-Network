import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store