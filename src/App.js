import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.sass';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer'
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { connect } from "react-redux";
import { initializedApp } from "./redux/appReducer";
import { Provider } from "react-redux";
import store from './redux/Store';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Settings = React.lazy(() => import('./components/Settings/SettingsContainer'))




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
      <div className="wrapper">
        <NavbarContainer />
        <div className="content">
          <React.Suspense fallback={<div>Load...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to={`/profile/${this.props.userId}`} />} />
              <Route path='/dialogs/:userId' element={<DialogsContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </React.Suspense>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  userId: state.auth.userId
})

const AppContainer = compose(
  connect(mapStateToProps, { initializedApp }),
  withRouter,
)(App);


const AppMain = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default AppMain;