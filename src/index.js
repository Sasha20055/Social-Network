import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, updateNewPostText} from './redux/state';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
