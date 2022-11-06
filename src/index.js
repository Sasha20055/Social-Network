import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
  { id: 1, message: 'Testing props on comments!', likes: '15' },
  { id: 2, message: 'Hello props!!!', likes: '5' },
  { id: 3, message: 'Everybody is coming here)', likes: '23' }
];

const messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Wafsdfadf asdf sda adsafadsf asdf' },
  { id: 3, message: 'FSDF sdfasd dafsdf adf' },
  { id: 4, message: 'Sadfdsa adsfasd ' },
];

const dialogsData = [
  { id: 1, name: 'Mr Ben', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
  { id: 2, name: 'Mom', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
  { id: 3, name: 'Pap', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
  { id: 4, name: 'Gurry', ava: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
  { id: 5, name: 'GrandMother', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messageData={messageData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
