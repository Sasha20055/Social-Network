import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {
  if (!props.isAuth) return <Navigate to='/login' />

  return (
    <div className={s.wrapper}>
      <Contacts accounts={props.accounts} />
      <Chat
        messageData={props.messageData}
        newMessageText={props.newMessageText}
        message={props.actionAddMessage}
        messageChange={props.actionOnPostChangeMessage}
      />
    </div>
  )
}

export default Dialogs