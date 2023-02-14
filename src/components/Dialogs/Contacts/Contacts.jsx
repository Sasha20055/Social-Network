import React from 'react'
import s from './Contacts.module.sass';
import Contact from './Contact/Contact'

const Contacts = React.memo((props) => {
  const dialogs = props.accounts
  .map(dialog => <Contact key={dialog.id} nickName={props.accounts[0].name} id={dialog.id} ava={dialog.ava}/>)

  return (
    <div className={s.contacts}>
      { dialogs }
    </div>
  )
})

export default Contacts