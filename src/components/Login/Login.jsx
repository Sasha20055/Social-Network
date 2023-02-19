import React from "react";
import s from './Login.module.sass';
import { Navigate } from 'react-router'
import { reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utilities/validation';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import style from '../common/FormsControls/FormsControls.module.sass';
import {createForm} from '../common/FormsControls/FormsControls';


const LoginForm = (props) => {
  const maxLength30 = maxLengthCreator(30)
  return (
    <form onSubmit={props.handleSubmit}>
      {createForm("email", Input, "text", "login", [required, maxLength30])}
      {createForm("password", Input, "password", "password", [required, maxLength30])}
      {createForm("rememberMe", Input, "checkbox")}

      {props.error && <div className={style.commonError}>{props.error}</div>}

      {props.captchaURL && <img src={props.captchaURL}/>}
      {props.captchaURL && createForm("captcha", Input, "text", "captcha", [required])}
      <div className={s.submit}>
        <button>Submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />
  }

  return <div>
    <h1>
      LOGIN
    </h1>
    <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
  </div>
}

const mapDispatchToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
  captchaURL: state.auth.captchaURL
})

export default connect(mapDispatchToProps, { login })(Login)