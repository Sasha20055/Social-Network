import React from 'react'
import s from './Contacts.module.sass';
import Contact from './Contact/Contact';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utilities/validation';


const Contacts = React.memo((props) => {
  const onSubmit = (formData) => {
    props.getProfile(formData.idPerson)
  }
  
  return (
    <div className={s.contacts}>
      <div className={s.findFriend}>
        <FindContactReduxForm onSubmit={onSubmit} />
      </div>
      {(props.user && props.user.userId != props.YourId) && <Contact key={props.user.id} nickName={props.user.fullName} id={props.user.userId} ava={props.user.photos.small} />}
      {props.users.map(user => <Contact key={user.id} nickName={user.userName} id={user.id} ava={user.photos.small} />)}
    </div>
  )
})

const FindContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"idPerson"} component={Input} type={"text"} placeholder={"id of person"} validate={[required]} />
      <button>Write</button>
    </form>
  )
}

const FindContactReduxForm = reduxForm({ form: 'FindPerson' })(FindContactForm)


export default Contacts