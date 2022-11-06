import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <Contacts dialogsData={props.dialogsData}/>
      <Chat messageData={props.messageData}/>
    </div>
  )
}

export default Dialogs