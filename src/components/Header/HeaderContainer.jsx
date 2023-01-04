import React from "react";
import Header from './Header';
import { connect } from "react-redux";
import { Auth, logout } from '../../redux/authReducer'


class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.Auth()
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps, { Auth, logout })(HeaderComponent)