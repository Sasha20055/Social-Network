import React, { useState } from 'react';
import s from './Person.module.sass';
import UserIcon from "../../../assets/images/unknown.png";
import Status from '../Status/Status';
import PersonDataFormReduxForm from "./PersonDataForm";
import FriendsContainer from '../../common/Friends/FriendsContainer'





const Person = (props) => {
  /*
    const [editMode, setEditMode] = useState(false)
  */
  if (!props.profile) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    )
  }
  /*
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
    
    <PersonDataFormReduxForm
    initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}
    isOwner={props.isOwner} UpdateStatus={props.UpdateStatus}
    editMode={editMode} offToEditMode={() => setEditMode(false)} photoSelected={photoSelected} />
    
    */
  /*
  {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
  */
  return (
    <div className={s.person}>
      <div className={s.firstBlock}>
        <div className={s.ava}>
          <img src={props.profile.photos.large || UserIcon}></img>
        </div>
        <ContactsData profile={props.profile} />
        <Following user={props.user} isOwner={props.isOwner} follow={props.followProf} Unfollow={props.UnFollowProf} isFollowing={props.isFollowing} isFollowingUser={props.isFollowingUser}/>
      </div>
      <div className={s.secondBlock}>
        <PersonData
          profile={props.profile} isOwner={props.isOwner}
          UpdateStatus={props.UpdateStatus} status={props.status} />
      </div>
      {props.isOwner &&
        <div className={s.friends}>
          <h3>Подписки</h3>
          <FriendsContainer />
        </div>}
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
      <p>
        {profile.lookingForAJob ? "Looking for a job" : "No looking for a job"}
      </p>
    </div>
    <div>
      {profile.aboutMe ? profile.aboutMe : "Empty"}
    </div>
    {profile.lookingForAJobDescription || <div>{profile.lookingForAJobDescription}</div>}
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

const Following = (props) => {
  
  if (props.user && !props.isOwner) {
    if (props.isFollowing) {
      return (
        <button disabled={props.isFollowingUser.length > 0} onClick={() => { props.Unfollow(props.user.items[0].id) }}> Unfollow</button>
      )
    } else {
      return (
        <button disabled={props.isFollowingUser.length > 0} onClick={() => { props.follow(props.user.items[0].id) }}>Follow</button>
      )
    }
  }
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