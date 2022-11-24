import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <Contacts accounts={props.accounts} />
      <Chat
        messageData={props.messageData}
        newMessageText={props.newMessageText}
        message={props.message}
        messageChange={props.messageChange}
      />
    </div>
  )
}

export default Dialogs