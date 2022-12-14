import React from "react";
import Header from './Header';
import axios from 'axios';
import { connect } from "react-redux";
import { setUserData } from '../../redux/authReducer'
import { headerAPI } from "../../api/api";


class HeaderComponent extends React.Component {
  componentDidMount() {
    headerAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let {email, id, login} = data.data
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