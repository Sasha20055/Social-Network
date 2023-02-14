import React from 'react';
import s from './Person.module.sass';
import { createForm } from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utilities/validation';
import style from '../../common/FormsControls/FormsControls.module.sass';



const PersonDataForm = React.memo((props) => {
  const maxLength30 = maxLengthCreator(15)
  const maxLength100 = maxLengthCreator(100)

  return (
    <form className={s.info} onSubmit={props.handleSubmit}>
      <div>
        <b>Name</b>:
        {createForm('fullName', Input, 'text', 'name...', [required, maxLength30])}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createForm('lookingForAJob', Input, 'checkbox')}
      </div>
      <div>
        <b>Looking for a job description</b>:
        {createForm('lookingForAJobDescription', Input, 'text', 'Description to a job...', [required, maxLength100])}
      </div>
      <div>
        <b>About me</b>:
        {createForm('aboutMe', Input, 'text', 'Smth about you...', [required, maxLength100])}
      </div>
      <div className={s.contacts}><b>Contacts</b>: {Object.keys(props.profile.contacts)
        .map(key => {
          return <div className={s.contacts}>
            <b>{key} : {createForm('contacts.' + key, Input, 'text', key + '...')}</b>
          </div>
        })}</div>
      <div>
      {props.error && <div className={style.commonError}>{props.error}</div>}
        <button>Confirm</button>
      </div>
    </form>)
})

const PersonDataFormReduxForm = reduxForm({ form: 'personEdit'})(PersonDataForm)


export default PersonDataFormReduxForm;