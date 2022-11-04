import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

const Dialogs = () => {
  return (
    <div className={s.wrapper}>
      <Contacts />
      <Chat />
    </div>
  )
}

export default Dialogs