import React from 'react';
import s from './SendingMessage.module.sass';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator } from '../../../../utilities/validation';


const maxLength300 = maxLengthCreator(50)

const SendingMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.sendingMessageForm}>
      <Field name={props.nameForm} component={Textarea} type={"text"} placeholder={"message"}  />
      <button className={s.sendBtn}></button>
    </form>
  )
}


const DialogReduxForm = reduxForm({ form: 'dialog' })(SendingMessageForm)


const SendingMessage = (props) => {
  let nameForm = 'message'
  const onSubmit = (formData) => {
    props.sendMessage(props.chatWith.length > 0 && props.chatWith[0].id, formData.message)
  }

  return (
    <DialogReduxForm onSubmit={onSubmit} chatWith={props.chatWith} nameForm={nameForm} />
  )
}

export default SendingMessage