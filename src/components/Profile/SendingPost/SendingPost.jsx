import s from './SendingPost.module.sass';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utilities/validation';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30)

const SendingPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"postText"} component={Textarea} type={"text"} placeholder={"your news..."} validate={[required, maxLength30]}/>
      <button>Send</button>
    </form>
  )
}

const SendingPostReduxForm = reduxForm({form: "SendingPost"})(SendingPostForm)

const SendingPost = (props) => {
  const onSubmit = (formData) => {
    props.actionAddPost(formData.postText)
  }
  return (
    <div className={s.sendPost}>
      <SendingPostReduxForm onSubmit={onSubmit}/>
    </div>
  )
}



export default SendingPost