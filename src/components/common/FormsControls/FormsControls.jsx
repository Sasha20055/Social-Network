import React from "react";
import s from "./FormsControls.module.sass";
import { Field, reduxForm } from 'redux-form';

export const Textarea = ({ input, meta, ...props }) => {
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

export const Input = ({ input, meta: {touched, error}, ...props }) => {
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

export const createForm = (name, component, type, placeholder="", validators=[], props = {}) => {
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