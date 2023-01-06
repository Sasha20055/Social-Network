import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.sass';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { connect } from "react-redux";
import { initializedApp } from "./redux/appReducer"


export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}


export class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp()
  }

  render() {

    if (!this.props.initialized) {
      return <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    }

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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializedApp }),
  withRouter,
)(App);
