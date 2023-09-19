import React from "react";
import { connect } from "react-redux"
import Navbar from "./Navbar";
import { logout } from '../../redux/authReducer'
import { appStateType } from "../../redux/Store";

type mapDispatchToPropsType = {
  logout: () => void
}

type mapStateToPropsType = {
  userId: number | null
  isAuth: boolean | null
  login: string | null
}

type mapOwnPropsType = {}

type PropsType = {
  userId: number | null
  isAuth: boolean | null
  login: string | null
  logout: () => void
}

class NavbarComponent extends React.Component<PropsType> {

  render() {
    return (
      <Navbar {...this.props} />
    )
  }
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => {
  return {
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, mapOwnPropsType, appStateType>(mapStateToProps, { logout })(NavbarComponent)