import React from "react"
import { Navigate } from 'react-router-dom'
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Container) => {
  class RedirectComponent extends React.Component{
    render() {
      if (!this.props.isAuth) return <Navigate to='/login' />

      return <Container {...this.props} />
    }    
  }
  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
}
