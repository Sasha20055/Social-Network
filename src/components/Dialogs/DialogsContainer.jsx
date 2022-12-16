import {connect} from "react-redux"
import { actionAddMessage, actionOnPostChangeMessage } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return{
    accounts: state.dialogsPage.accounts,
    messageData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, {actionOnPostChangeMessage, actionAddMessage})(Dialogs)

export default DialogsContainer