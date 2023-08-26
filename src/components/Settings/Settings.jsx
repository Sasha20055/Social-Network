import React from 'react'
import s from './Settings.module.sass'
import { createForm } from '../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utilities/validation';


const Settings = React.memo((props) => {

  const photoSelected = (e) => {
    props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => { alert('Внесены изменения!') }
    )
  }

  return (
    <div>
      <h1>Настройки</h1>
      <PersonDataFormReduxForm
        initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}
        UpdateStatus={props.UpdateStatus} photoSelected={photoSelected} />
    </div>
  )
})

export default Settings


const PersonDataForm = React.memo((props) => {

  const maxLength30 = maxLengthCreator(50)
  const maxLength100 = maxLengthCreator(100)

  return (
    <div className={s.settingsFields}>
      <div className={s.choosePhoto}>
        <div className={s.photo}>
          <img src={props.profile.photos.small} alt="photo" />
        </div>
        <label htmlFor="photoSelected" className="photoSelectedLabel">Выберите фото</label>
        <input type={"file"} name="photoSelected" className={s.photoSelected} id="photoSelected" onChange={props.photoSelected} />
      </div>
      <form className={s.info} onSubmit={props.handleSubmit}>
        <div className={s.mainInfoBlock}>
          <div className={s.fields}>
            {createForm('fullName', Input, 'text', 'Полное имя...', [required, maxLength30])}
          </div>
          <div class={s.lookingJovBlock}>
            <div className={s.fields}>
              {createForm('lookingForAJob', Input, 'checkbox')}
            </div>
            <div className={s.fields}>
              {createForm('lookingForAJobDescription', Input, 'text', 'Описание работы...', [required, maxLength100])}
            </div>
          </div>
          <div className={s.fields}>
            {createForm('aboutMe', Input, 'text', 'Биография...', [required, maxLength100])}
          </div>
        </div>
        <div className={s.contacts}><b>Контакты :</b> {Object.keys(props.profile.contacts)
          .map(key => {
            return <div className={s.contacts}>
              <b>{createForm('contacts.' + key, Input, 'text', key + '...')}</b>
            </div>
          })}</div>
        <div>
          {props.error && <div className={s.commonError}>{props.error}</div>}
          <button>Подтверждаю</button>
        </div>
      </form>
    </div>)
})

const PersonDataFormReduxForm = reduxForm({ form: 'personEdit' })(PersonDataForm)