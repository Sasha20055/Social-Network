import React from 'react';
import s from './Person.module.sass';
import UserIcon from "../../../assets/images/unknown.png";



const Person = React.memo((props) => {
  if (!props.profile) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    )
  }

  const photoSelected = (e) => {
    props.savePhoto(e.target.files[0])
  }
  
  return (
    <div className={s.person}>
      <div className={s.ava}>
        <img src={props.profile.photos.large || UserIcon}></img>
      </div>
      <div className={s.info}>
        <h2>{props.profile.fullName}</h2>
        <div>{props.profile.aboutMe}</div>
      </div>
      <div className={s.choosePhoto}>
        {props.isOwner && <input type={"file"} onChange={photoSelected}/>}
      </div>
    </div>
  )
})

export default Person