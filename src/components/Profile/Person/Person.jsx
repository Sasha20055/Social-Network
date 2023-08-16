import React, { useState } from 'react';
import s from './Person.module.sass';
import UserIcon from "../../../assets/images/unknown.png";
import Status from '../Status/Status';
import PersonDataFormReduxForm from "./PersonDataForm";
import FriendsContainer from '../../common/Friends/FriendsContainer'





const Person = (props) => {

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
      <div className={s.firstBlock}>
        <div className={s.ava}>
          <img src={props.profile.photos.large || UserIcon}></img>
        </div>
        <ContactsData profile={props.profile} />
      </div>
      <div className={s.secondBlock}>
        {editMode
          ? <PersonDataFormReduxForm
            initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}
            isOwner={props.isOwner} UpdateStatus={props.UpdateStatus}
            editMode={editMode} offToEditMode={() => setEditMode(false)} photoSelected={photoSelected} />
          : <PersonData
            profile={props.profile} isOwner={props.isOwner}
            UpdateStatus={props.UpdateStatus} status={props.status}
            editMode={editMode} goToEditMode={() => setEditMode(true)} />
        }
      </div>
      <div className={s.friends}>
        <FriendsContainer />
      </div>
    </div>
  )
}

const PersonData = ({ profile, ...props }) => {
  return (<div className={s.info}>
    <div>
      <h2 className={s.fullName}>{profile.fullName}</h2>
    </div>
    <div className={s.status}>
      <Status status={props.status} UpdateStatus={props.UpdateStatus} isOwner={props.isOwner} />
    </div>
    <div>
      {profile.lookingForAJob ? "Looking for a job" : "No looking for a job"}
    </div>
    <div>
      {profile.aboutMe ? profile.aboutMe : "Empty"}
    </div>
    {profile.lookingForAJobDescription || <div>{profile.lookingForAJobDescription}</div>}
    {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
  </div>)
}

const ContactsData = ({ profile, ...props }) => {
  return (
    <div className={s.contacts}>{Object.keys(profile.contacts)
      .map(key => {
        return <Contacts key={key} ContactTitle={key} ContactValue={profile.contacts[key]} />
      })}</div>
  )
}


const Contacts = ({ ContactTitle, ContactValue }) => {
  if (ContactValue) {
    return (
      <div className={s.contacts}>
        <a href={ContactValue} className={s.contact}></a>
      </div>
    )
  }
}

export default Person