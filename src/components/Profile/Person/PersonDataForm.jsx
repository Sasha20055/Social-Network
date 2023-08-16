import React from 'react';
import s from './Person.module.sass';
import { createForm } from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utilities/validation';
import style from '../../common/FormsControls/FormsControls.module.sass';



const PersonDataForm = React.memo((props) => {

  const maxLength30 = maxLengthCreator(50)
  const maxLength100 = maxLengthCreator(100)

  return (
    <div className="div">
      <form className={s.info} onSubmit={props.handleSubmit}>
        <div>
          {createForm('fullName', Input, 'text', 'name...', [required, maxLength30])}
        </div>
        <div>
          {createForm('lookingForAJob', Input, 'checkbox')}
        </div>
        <div>
          {createForm('lookingForAJobDescription', Input, 'text', 'Description to a job...', [required, maxLength100])}
        </div>
        <div>
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
      </form>
      <div className={s.choosePhoto}>
          {props.isOwner && <input type={"file"} onChange={props.photoSelected} />}
        </div>
    </div>)
})

const PersonDataFormReduxForm = reduxForm({ form: 'personEdit' })(PersonDataForm)


export default PersonDataFormReduxForm;