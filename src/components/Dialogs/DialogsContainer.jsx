import { connect } from "react-redux"
import { actionAddMessage } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux"


let mapStateToProps = (state) => {
  return {
    accounts: state.dialogsPage.accounts,
    messageData: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}


export default compose(
  connect(mapStateToProps, { actionAddMessage }),
  withAuthRedirect
)(Dialogs)