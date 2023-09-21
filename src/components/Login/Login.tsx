import React from "react";
import s from './Login.module.sass';
import { Navigate } from 'react-router'
import { reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utilities/validation';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import style from '../common/FormsControls/FormsControls.module.sass';
import { createForm } from '../common/FormsControls/FormsControls';
import { appStateType } from "../../redux/Store";

type mapStateToPropsType = {
  isAuth: boolean | null
  userId: number | null
  captchaURL: string | null
}

type mapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

type mapOwnPropsType = {
}

type LoginPropsType = {
  isAuth: boolean | null
  userId: number | null
  captchaURL: string | null
  login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

type LoginFormPropsType = {
  handleSubmit: any
  error: any
  captchaURL: string | null
}

const Login: React.FC<LoginPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />
  }

  return <div className={s.body}>
    <h1>
      Авторизация
    </h1>
    <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    <div className={s.reg}>
      <a href="https://social-network.samuraijs.com/signUp">Зарегистрироваться</a>
    </div>
  </div>
}

type LoginFormReduxPropsType = {
  captchaURL: string | null
  handleSubmit?: any
  error?: any
}

const LoginForm: React.FC<LoginFormReduxPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.loginForm}>
      {createForm("email", Input, "text", "login", [required])}
      {createForm("password", Input, "password", "password", [required])}
      {props.captchaURL && <img src={props.captchaURL} />}
      {props.captchaURL && createForm("captcha", Input, "text", "captcha", [required])}
      <div className={s.submit}>
        <button>Войти</button>
      </div>
      <div className={s.rememberMeBlock}>
        {createForm("rememberMe", Input, "checkbox")}
        <p>Запомнить меня</p>
      </div>


      {props.error && <div className={style.commonError}>{props.error}</div>}
    </form>
  )
}


const LoginReduxForm = reduxForm<{}, LoginFormReduxPropsType>({ form: 'login' })(LoginForm)


const mapStateToProps = (state: appStateType) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
  captchaURL: state.auth.captchaURL
})

export default connect<mapStateToPropsType, mapDispatchToPropsType, mapOwnPropsType, appStateType>(mapStateToProps, { login })(Login)