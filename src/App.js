import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'




function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderComponent />
        <NavbarContainer />
        <div className="content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
