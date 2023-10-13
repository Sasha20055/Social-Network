import React from 'react';
import s from './SendingMessage.module.sass';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { accountType, userType } from '../../../../types/types';

type SendingFormPropsType = {
  handleSubmit: any
  nameForm?: string
}

const SendingMessageForm: React.FC<SendingFormPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.sendingMessageForm}>
      <Field name={props.nameForm} component={Textarea} type={"text"} placeholder={"Введите сообщение..."} />
      <button className={s.sendBtn}></button>
    </form>
  )
}

const DialogReduxForm = reduxForm<{}, SendingMessagePropsType>({ form: 'dialog' })(SendingMessageForm)

type SendingMessagePropsType = {
  sendMessage: (userId: number, message: []) => void
  chatWith: Array<userType>
  nameForm?: any
}

const SendingMessage: React.FC<SendingMessagePropsType> = (props) => {
  let nameForm = 'message'
  const onSubmit = (formData: any) => {
    props.sendMessage(props.chatWith[0].id, formData.message)
  }
  return (
    //@ts-ignore
    <DialogReduxForm onSubmit={onSubmit} chatWith={props.chatWith} nameForm={nameForm} />
  )
}

export default SendingMessage