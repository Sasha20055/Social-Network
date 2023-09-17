import React from "react";
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Posts from './Posts/Posts';
import s from './Profile.module.sass'
import { profileType, usersType, userType } from "../../types/types";

type PropsType = {
   posts: any,
   newPostText: string,
   profile: profileType,
   user: usersType,
   isFollowing: boolean | null,
   userId: number,
   status: string,
   friends: usersType,
   isFollowingUser: Array<number>,
   match: any,
   isOwner: boolean
   actionAddPost: any, 
   getProfile: any, 
   SetStatus: any, 
   UpdateStatus: any, 
   savePhoto: any, 
   saveProfile: any, 
   getFriends: any, 
   getUser: any, 
   UnFollowProf: any, 
   followProf: any,
}

const Profile = React.memo<PropsType>((props) => {
   return (
      <div className={s.body}>
         <h1>Профиль</h1>
         <Person
            profile={props.profile}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            status={props.status}
            UpdateStatus={props.UpdateStatus}
            saveProfile={props.saveProfile} 
            user={props.user}
            UnFollowProf={props.UnFollowProf}
            followProf={props.followProf}
            isFollowing={props.isFollowing}
            isFollowingUser={props.isFollowingUser}
            />
      </div>
   )
})

//posts NOT WORKED API
/*
<SendingPost {...props} />
<Posts posts={props.posts} />
*/


export default Profile