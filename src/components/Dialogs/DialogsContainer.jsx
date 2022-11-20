import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import Dialogs from "./Dialogs"
import { actionAddMessage, actionOnPostChangeMessage } from '../../redux/dialogsReducer';


/*<div className={s.wrapper}>
<Contacts accounts={props.dialogsData.accounts} />
<Chat
  messageData={props.dialogsData.messages}
  newMessageText={props.dialogsData.newMessageText} 
  dispatch={props.dispatch} />
</div>*/

const DialogsContainer = (props) => {
  let accounts = props.store.getState().dialogsPage.accounts
  let messageData = props.store.getState().dialogsPage.messages
  let newMessageText = props.store.getState().dialogsPage.newMessageText

  const message = () => {
    props.store.dispatch(actionAddMessage())
  }
  const messageChange = (text) => {
    props.store.dispatch(actionOnPostChangeMessage(text))
  }


  return (
    <Dialogs
      accounts={accounts}
      messageData={messageData}
      newMessageText={newMessageText}
      dispatch={props.store.dispatch}
      message={message}
      messageChange={messageChange}
    />
  )
}

export default DialogsContainer