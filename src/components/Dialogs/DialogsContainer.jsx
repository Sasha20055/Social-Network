import {connect} from "react-redux"
import { actionAddMessage, actionOnPostChangeMessage } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return{
    accounts: state.dialogsPage.accounts,
    messageData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    message: () => {
      dispatch(actionAddMessage())
    },
    messageChange: (text) => {
      dispatch(actionOnPostChangeMessage(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer