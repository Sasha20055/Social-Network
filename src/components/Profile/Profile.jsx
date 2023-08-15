import React from "react";
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Posts from './Posts/Posts';


const Profile = React.memo((props) => {
   return (
      <div>
         <Person
            profile={props.profile}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            status={props.status}
            UpdateStatus={props.UpdateStatus}
            saveProfile={props.saveProfile} />
         <SendingPost {...props} />
         <Posts posts={props.posts} />
      </div>
   )
})

export default Profile