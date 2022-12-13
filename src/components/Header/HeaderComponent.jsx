import React from "react";
import Header from './Header';
import axios from 'axios';
import { connect } from "react-redux";
import { setUserData } from '../../redux/authReducer'


class HeaderComponent extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {email, id, login} = response.data.data
          this.props.setUserData(id, email, login)
        }
      })
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

export default connect(mapStateToProps, { setUserData })(HeaderComponent)