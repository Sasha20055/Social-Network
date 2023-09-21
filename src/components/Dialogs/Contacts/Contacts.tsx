import React from 'react'
import s from './Contacts.module.sass';
import Contact from './Contact/Contact';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utilities/validation';

type ContactsPropsType = {
  users: Array<any>
  getProfile: (profileId: number) => void
  user: any
  YourId: number
  findPerson: (name: string) => void
}

const Contacts = React.memo<ContactsPropsType>((props) => {
  const onSubmit = (formData: any) => {
    props.findPerson(formData.nameContact)
  }

  return (
    <div className={s.contactsBlock}>
      <div className={s.findFriend}>
        <FindContactReduxForm onSubmit={onSubmit} />
      </div>
      <div className={s.contacts}>
        {(props.user && props.user.userId != props.YourId) &&
          <Contact key={props.user.userId} nickName={props.user.fullName}
            id={props.user.userId} ava={props.user.photos.small}
            newMessagesCount={props.user.newMessagesCount}
            lastActivity={props.user.lastUserActivityDate} />}
        {props.users.map(user => <Contact key={user.id}
          newMessagesCount={user.newMessagesCount} nickName={user.userName}
          id={user.id} ava={user.photos.small} lastActivity={user.lastUserActivityDate} />)
        }
      </div>
    </div>
  )
})

type FindContactPropsType = {
  handleSubmit: any
}

const FindContactForm: React.FC<FindContactPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.contactFormBlock}>
      <Field name={"nameContact"} component={Input} type={"text"} placeholder={"Имя пользователя"} validate={[required]} />
      <button className={s.contactBtn}>Найти</button>
    </form>
  )
}

const FindContactReduxForm = reduxForm({ form: 'FindPerson' })(FindContactForm)


export default Contacts