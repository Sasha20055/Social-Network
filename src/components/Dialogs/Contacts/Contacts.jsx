import React from 'react'
import s from './Contacts.module.sass';
import Contact from './Contact/Contact';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utilities/validation';


const Contacts = React.memo((props) => {
  const onSubmit = (formData) => {
    props.findPerson(formData.nameContact)
  }

  return (
    <div className={s.contactsBlock}>
      <div className={s.findFriend}>
        <FindContactReduxForm onSubmit={onSubmit} />
      </div>
      <div className={s.contacts}>
        {(props.user && props.user.userId != props.YourId) && <Contact key={props.user.id} nickName={props.user.fullName} id={props.user.userId} ava={props.user.photos.small} />}
        {props.users.map(user => <Contact key={user.id} newMessagesCount={user.newMessagesCount} nickName={user.name ? user.name : user.userName} id={user.id} ava={user.photos.small} lastActivity={user.lastUserActivityDate} />)}
      </div>
    </div>
  )
})

const FindContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.contactFormBlock}>
      <Field name={"nameContact"} component={Input} type={"text"} placeholder={"Имя пользователя"} validate={[required]} />
      <button className={s.contactBtn}>Найти</button>
    </form>
  )
}

const FindContactReduxForm = reduxForm({ form: 'FindPerson' })(FindContactForm)


export default Contacts