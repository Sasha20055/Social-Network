import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <Contacts accounts={ props.dialogsData.accounts }/>
      <Chat messageData={ props.dialogsData.messages }/>
    </div>
  )
}

export default Dialogs