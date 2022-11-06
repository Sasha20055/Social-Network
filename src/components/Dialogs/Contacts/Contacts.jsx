import s from './Contacts.module.sass';
import Contact from './Contact/Contact'

const Contacts = (props) => {

  const dialogs = props.dialogsData
  .map(dialog => <Contact nickName={props.dialogsData[0].name} id={dialog.id} ava={dialog.ava}/>)

  return (
    <div className={s.contacts}>
      { dialogs }
    </div>
  )
}

export default Contacts