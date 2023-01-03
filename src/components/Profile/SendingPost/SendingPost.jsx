import s from './SendingPost.module.sass';
import React from 'react';
import { Field, reduxForm } from 'redux-form'



const SendingPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"postText"} component={"input"} type={"text"} placeholder={"your news..."} />
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