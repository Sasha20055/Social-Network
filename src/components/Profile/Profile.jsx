import Person from './Person/Person';
import Status from './Status/Status';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';
import Posts from './Posts/Posts'
import React from 'react';


const Profile = React.memo((props) => {
   return (
      <div>
         <Head />
         <Status status={props.status} UpdateStatus={props.UpdateStatus} />
         <Person profile={props.profile}/>
         <SendingPost {...props} />
         <Posts posts={props.posts}/>
      </div>
   )
})

export default Profile