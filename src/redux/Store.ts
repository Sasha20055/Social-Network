import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer, reducer } from 'redux-form';
import { compose } from "redux"; 


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

type reducersType = typeof reducers
export type appStateType = ReturnType<reducersType>


// @ts-ignore
const store = createStore( 
  reducers,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__   // Для расширения в браузере redux
    // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION__()   // Для расширения в браузере redux
    // @ts-ignore
      : (noop) => noop)                         // Для расширения в браузере redux   
);
// @ts-ignore
window.__store__ = store

export default store