import React, { useState } from 'react';
import s from './Person.module.sass';
import UserIcon from "../../../assets/images/unknown.png";
import Status from '../Status/Status';
import PersonDataFormReduxForm from "./PersonDataForm"




const Person = React.memo((props) => {

  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    )
  }

  const photoSelected = (e) => {
    props.savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div className={s.person}>
      <div className={s.ava}>
        <img src={props.profile.photos.large || UserIcon}></img>
      </div>
      {editMode

        ? <PersonDataFormReduxForm
          initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}
          isOwner={props.isOwner} UpdateStatus={props.UpdateStatus}
          editMode={editMode} offToEditMode={() => setEditMode(false)} />

        : <PersonData
          profile={props.profile} isOwner={props.isOwner}
          UpdateStatus={props.UpdateStatus} status={props.status}
          editMode={editMode} goToEditMode={() => setEditMode(true)} />

      }
      <div className={s.choosePhoto}>
        {props.isOwner && <input type={"file"} onChange={photoSelected} />}
      </div>
    </div>
  )
})

const PersonData = ({ profile, ...props }) => {
  return (<div className={s.info}>
    <div>
      <b>Name</b>: {profile.fullName}
    </div>
    <div className={s.status}>
      <b>Status</b>: <Status status={props.status} UpdateStatus={props.UpdateStatus} isOwner={props.isOwner}/>
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "Yes" : "No"}
    </div>
    <div>
      <b>About me</b>: {profile.aboutMe ? profile.aboutMe : "Empty"}
    </div>
    <div>
      <b>Skills</b>: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "Absent"}
    </div>
    <div className={s.contacts}><b>Contacts</b>: {Object.keys(profile.contacts)
      .map(key => {
        return <Contacts key={key} ContactTitle={key} ContactValue={profile.contacts[key]} />
      })}</div>
    {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
  </div>)
}

const Contacts = ({ ContactTitle, ContactValue }) => {
  return <div className={s.contact_item}><b>{ContactTitle}</b>: {ContactValue ? ContactValue : "empty"}</div>
}

export default Person