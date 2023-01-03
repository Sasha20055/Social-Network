import React from "react";
import s from './Login.module.sass';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.login}>
        <Field name={"login"} component={"input"} type={"text"} placeholder={"login"}/>
      </div>
      <div className={s.password}>
        <Field name={"password"} component={"input"} type={"text"} placeholder={"password"}/>
      </div>
      <div className={s.rememberMe}>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
      </div>
      <div className={s.submit}>
        <button>Submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return <div>
    <h1>
      LOGIN
    </h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default Login