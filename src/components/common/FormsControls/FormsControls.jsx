import React from "react";
import s from "./FormsControls.module.sass"

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

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...props} className={s.textarea} />
      </div>
      {hasError && <span className={s.someError}>{meta.error}</span>}
    </div>
  )
}