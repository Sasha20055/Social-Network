import React, {useState} from "react";
import { connect } from "react-redux"
import { listOfMessages, sendMessage, deleteForMe, allDialogs, SetPageSize, messageToSpam, listOfNewMessages, SetCurrentPage, startChatting } from '../../redux/dialogsReducer';
import { getProfile } from "../../redux/profileReducer";
import Dialogs from "./Dialogs";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}



class DialogsCont extends React.Component {
  
  startTheDialog() {
    const userId = this.props.match.params.userId
    if (userId != null) {
      this.props.startChatting(userId, this.props.currentPage, this.props.pageSize)
    }
  }

  componentDidMount() {
    this.props.getProfile(this.props.YourId)
    this.props.listOfNewMessages()
    this.props.allDialogs()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let isFriend = false
      this.props.users.map(user => user.id == this.props.match.params.userId ? isFriend = true : null)
      if(isFriend && this.props.profile.userId != this.props.YourId) {
        this.props.getProfile(this.props.YourId)
      }
      this.startTheDialog()
    }
  }

  render() {
    return (<>
      <Dialogs
        {...this.props}
      />
    </>)
  }
}

let mapStateToProps = (state) => {
  return {
    chatWith: state.dialogsPage.chatWith,
    users: state.dialogsPage.accounts,
    messageData: state.dialogsPage.messages,
    user: state.profilePage.profile,
    YourId: state.auth.userId,
    profile: state.profilePage.profile,
    currentPage: state.dialogsPage.currentPage,
    totalMessageCount: state.dialogsPage.totalMessageCount,
    pageSize: state.dialogsPage.pageSize,
    newMessages: state.dialogsPage.newMessages,
    portionCount: state.dialogsPage.portionCount
  }
}


export default compose(
  connect(mapStateToProps,
    {
      listOfMessages, sendMessage,
      deleteForMe, getProfile,
      allDialogs, SetPageSize,
      messageToSpam, listOfNewMessages,
      SetCurrentPage, startChatting
    }),
  withRouter,
  withAuthRedirect
)(DialogsCont)