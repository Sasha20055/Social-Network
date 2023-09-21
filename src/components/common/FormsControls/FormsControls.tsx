import React from "react";
import s from "./FormsControls.module.sass";
import { Field } from 'redux-form';

type TextareaPropsType = {
  input: any
  meta: any
}

export const Textarea: React.FC<TextareaPropsType> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} {...props} className={s.textarea} />
      </div>
      {hasError && <span className={s.someError}>{meta.error}</span>}
    </div>
  )
}

type InputPropsType = {
  input: any
  meta: any
}

export const Input: React.FC<InputPropsType> = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...props} className={s.input} />
      </div>
      {hasError && <span className={s.someError}>{error}</span>}
    </div>
  )
}

export const createForm = (name: string, component: any, type: string, placeholder = "", validators: Array<any> = [], props = {}) => {
  return (<div className={`s.${name}`}>
    <Field
      name={name}
      component={component}
      type={type}
      placeholder={placeholder}
      validate={validators}
      {...props}
    />
  </div>)
}