import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer'



function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderComponent />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
