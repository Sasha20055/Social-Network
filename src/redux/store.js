import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer.js"
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import { compose } from "redux"; 


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const store = createStore( 
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__         // Для расширения в браузере redux
      ? window.__REDUX_DEVTOOLS_EXTENSION__()   // Для расширения в браузере redux
      : (noop) => noop)                         // Для расширения в браузере redux   
);

window.__store__ = store

export default store