import React from 'react';
import s from './SendingMessage.module.sass';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator } from '../../../../utilities/validation';



const SendingMessageForm = (props) => {
  const maxLength30 = maxLengthCreator(100)
  return(
    <form onSubmit={props.handleSubmit}>
        <Field name={props.nameForm} component={Input} type={"text"} placeholder={"message"} />
        <button>Send</button>
    </form>
  )
}


const DialogReduxForm = reduxForm({form: 'dialog'})(SendingMessageForm)


const SendingMessage = (props) => {
  let nameForm = `message${props.chatWith.length > 0 && props.chatWith[0].id}` 
  const onSubmit = (formData) => {
    // видит formData  но не видит nameForm console.log(formData.nameForm)

    //props.sendMessage(props.chatWith.length > 0 ? props.chatWith[0].id : props.profile.userId, formData.nameForm)
  }

  return (
    <div className={s.sendingMessage}>
      <DialogReduxForm onSubmit={onSubmit} chatWith={props.chatWith} nameForm={nameForm}/>
    </div>
  )
}

export default SendingMessage