import React from 'react';
import s from './SendingMessage.module.sass';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../../utilities/validation';



const SendingMessageForm = (props) => {
  const maxLength30 = maxLengthCreator(30)
  return(
    <form onSubmit={props.handleSubmit}>
        <Field name={"message"} component={Input} type={"text"} placeholder={"message"} validate={[required, maxLength30]}/>
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