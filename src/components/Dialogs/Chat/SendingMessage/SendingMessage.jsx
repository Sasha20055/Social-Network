import React from 'react';
import s from './SendingMessage.module.sass';
import { Field, reduxForm } from 'redux-form'


const SendingMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field name={"message"} component={"input"} type={"text"} placeholder={"message"}/>
        <button>Send</button>
    </form>
  )
}

const DialogReduxForm = reduxForm({form: 'dialog'})(SendingMessageForm)

const SendingMessage = (props) => {
  const onSubmit = (formData) => {
    props.message(formData.message)
  }

  return (
    <div className={s.sendingMessage}>
      <DialogReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default SendingMessage