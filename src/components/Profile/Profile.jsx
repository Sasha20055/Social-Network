import React from "react";
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Posts from './Posts/Posts';
import s from './Profile.module.sass'


const Profile = React.memo((props) => {
   return (
      <div className={s.body}>
         <h1>Профиль</h1>
         <Person
            profile={props.profile}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            status={props.status}
            UpdateStatus={props.UpdateStatus}
            saveProfile={props.saveProfile} />
      </div>
   )
})

//posts NOT WORKED API
/*
<SendingPost {...props} />
<Posts posts={props.posts} />
*/


export default Profile