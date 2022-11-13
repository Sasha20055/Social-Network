import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/dialogs/*' element={
              <Dialogs
                dialogsData={props.state.dialogsData} />} />

            <Route path='/profile/*' element={
              <Profile
                profileData={props.state.profileData}
                dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
