import React from "react";
import { connect } from "react-redux"
import {
  listOfMessages, sendMessage, deleteForMe, allDialogs,
  SetPageSize, messageToSpam, listOfNewMessages, SetCurrentPage,
  startChatting, moreMessages, findPerson
} from '../../redux/dialogsReducer';
import { getProfile } from "../../redux/profileReducer";
import Dialogs from "./Dialogs";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { accountType, messageType, profileType } from "../../types/types";
import { appStateType } from "../../redux/Store";

export function withRouter(Children: any) {
  return (props: any) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

type mapStateToPropsType = {
  chatWith: Array<accountType>,
  users: Array<any> | null,
  messageData: Array<messageType>,
  user: any,
  YourId: number | null,
  profile: profileType | null,
  currentPage: number | null,
  totalMessageCount: number | null,
  pageSize: number | null,
  newMessages: number | null,
  portionCount: number | null
}

type mapDispatchToPropsType = {
  listOfMessages: (userId: number, currentPage: number | null,
    pageSize: number | null) => void,
  sendMessage: (userId: number, message: []) => void,
  deleteForMe: (messageId: string) => void,
  getProfile: (profileId: number) => void,
  allDialogs: () => void,
  SetPageSize: (pageSize: number) => void,
  messageToSpam: (messageId: string) => void,
  listOfNewMessages: () => void,
  SetCurrentPage: (currentPage: number) => void,
  startChatting: (userId: number, currentPage: number, pageSize: number) => void,
  moreMessages: (userId: number, currentPage: number,
    pageSize: number, messages: Array<messageType>) => void,
  findPerson: (name: string) => void
}

type mapOwnPropsType = {}

type PropsType = {
  chatWith: Array<accountType>,
  users: Array<any>,
  messageData: Array<messageType>,
  user: any,
  YourId: number,
  profile: profileType,
  currentPage: number,
  totalMessageCount: number | null,
  pageSize: number,
  newMessages: Array<messageType>,
  portionCount: number,
  match: any,
  listOfMessages: (userId: number, currentPage: number | null,
    pageSize: number | null) => void,
  sendMessage: (userId: number, message: []) => void,
  deleteForMe: (messageId: string) => void,
  getProfile: (profileId: number) => void,
  allDialogs: () => void,
  SetPageSize: (pageSize: number) => void,
  messageToSpam: (messageId: string) => void,
  listOfNewMessages: () => void,
  SetCurrentPage: (currentPage: number) => void,
  startChatting: (userId: number, currentPage: number,
    pageSize: number) => void,
  moreMessages: (userId: number, currentPage: number, pageSize: number,
    messages: Array<messageType>) => void,
  findPerson: (name: string) => void
}

class DialogsCont extends React.Component<PropsType> {

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

  componentDidUpdate(prevProps: any, prevState: appStateType, snapshot: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      let isFriend = false
      this.props.users.map(user => user.id == this.props.match.params.userId ? isFriend = true : null)
      if (isFriend && this.props.profile.userId != this.props.YourId) {
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

let mapStateToProps = (state: appStateType) => {
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
  connect
    <mapStateToPropsType, mapDispatchToPropsType, mapOwnPropsType, appStateType>(mapStateToProps,
      {
        listOfMessages, sendMessage,
        deleteForMe, getProfile,
        allDialogs, SetPageSize,
        messageToSpam, listOfNewMessages,
        SetCurrentPage, startChatting,
        moreMessages, findPerson
      }),
  withRouter,
  withAuthRedirect
)(DialogsCont)