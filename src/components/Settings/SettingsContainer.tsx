import React from "react";
import Settings from './Settings'
import { connect } from "react-redux"
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { UpdateStatus, savePhoto, getProfile, saveProfile } from "../../redux/profileReducer";
import { profileType } from "../../types/types";
import { appStateType } from "../../redux/Store";



type mapStateToPropsType = {
  profile: profileType,
  userId: number,
}

type mapDispatchToPropsType = {
  getProfile: any,
  UpdateStatus: any,
  savePhoto: any,
  saveProfile: any,
}

type mapOwnProps = {

}

type PropsType = {
  profile: profileType,
  userId: number,
  getProfile: (userId: number) => void,
  UpdateStatus: any,
  savePhoto: any,
  saveProfile: any,
}


class SettingsCont extends React.Component<PropsType> {

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

let mapStateToProps = (state: appStateType) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  }
}

export default compose(
  connect(mapStateToProps, { UpdateStatus, savePhoto, getProfile, saveProfile }),
  withAuthRedirect,
      // @ts-ignore
)(SettingsCont)
