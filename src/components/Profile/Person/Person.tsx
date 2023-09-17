import React from 'react';
import s from './Person.module.sass';
import UserIcon from "../../../assets/images/unknown.png";
import Status from '../Status/Status';
import FriendsContainer from '../../common/Friends/FriendsContainer'
import { profileType, usersType, userType } from '../../../types/types';
import Contact from '../../Dialogs/Contacts/Contact/Contact';

type PersonPropsType = {
  profile: profileType
  isOwner: boolean
  savePhoto: any
  status: string
  UpdateStatus: any
  saveProfile: any
  user: usersType
  UnFollowProf: (id: number) => void
  followProf: (id: number) => void
  isFollowing: boolean | null
  isFollowingUser: Array<number>
}

const Person: React.FC<PersonPropsType> = React.memo((props) => {
  if (!props.profile) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    )
  }
  return (
    <div className={s.person}>
      <div className={s.firstBlock}>
        <div className={s.ava}>
          <img src={props.profile.photos.large || UserIcon}></img>
        </div>
        <ContactsData profile={props.profile} />
        {(props.user && !props.isOwner) ? <Following user={props.user} isOwner={props.isOwner} follow={props.followProf} Unfollow={props.UnFollowProf} isFollowing={props.isFollowing} isFollowingUser={props.isFollowingUser} /> : null}
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
})

type PersonDataPropsType = {
  profile: profileType
  status: string
  UpdateStatus: (status: string) => void
  isOwner: boolean

}

const PersonData: React.FC<PersonDataPropsType> = ({ profile, ...props }) => {
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
    {profile.lookingForAJobDescription || <div>{profile.lookingForAJobDescription}</div>}
  </div>)
}

type ContactsDataPropsType = {
  profile: profileType
}

const ContactsData: React.FC<ContactsDataPropsType> = ({ profile, ...props }) => {
  return (
    <div className={s.contacts}>{Object.keys(profile.contacts)
      .map(key => {
        // @ts-ignore
        return <Contacts key={key} ContactValue={profile.contacts[key]} />
      })}</div>
  )
}

type FollowingPropsType = {
  isOwner: boolean
  user: usersType
  isFollowingUser: Array<number>
  Unfollow: (id: number) => void
  isFollowing: boolean | null
  follow: (id: number) => void
}

const Following: React.FC<FollowingPropsType> = (props) => {
  if (props.isFollowing) {
    return (
      <button disabled={props.isFollowingUser.length > 0} onClick={() => { props.Unfollow(props.user.items[0].id) }}> Отписаться</button>
    )
  } else {
    return (
      <button disabled={props.isFollowingUser.length > 0} onClick={() => { props.follow(props.user.items[0].id) }}>Подписаться</button>
    )
  }
}

type ContactsPropsType = {
  ContactValue: string
}

const Contacts: React.FC<ContactsPropsType> = ({ ContactValue }) => {
  if (ContactValue) {
    return (
      <div className={s.contacts}>
        <a href={ContactValue} className={s.contact}></a>
      </div>
    )
  } else {return(<></>)}
}

export default Person