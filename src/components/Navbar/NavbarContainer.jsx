import React from "react";
import { connect } from "react-redux"
import Navbar from "./Navbar";
import { logout } from '../../redux/authReducer'

class NavbarComponent extends React.Component {

  render() {
    return (
      <Navbar {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { logout })(NavbarComponent)