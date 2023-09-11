import React from "react";
import Settings from './Settings'
import { connect } from "react-redux"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { UpdateStatus, savePhoto, getProfile, saveProfile } from "../../redux/profileReducer";






class SettingsCont extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.userId)
  }

  render() {
    if (this.props.profile) {
      return (
        <Settings
          {...this.props}
        />
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  }
}

export default compose(
  connect(mapStateToProps, { UpdateStatus, savePhoto, getProfile, saveProfile }),
  withAuthRedirect,
)(SettingsCont)
