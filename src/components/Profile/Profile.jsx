import Person from './Person/Person';
import Status from './Status/Status';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';
import React from 'react';


const Profile = (props) => {
   return (
      <div>
         <Head />
         <Status status={props.status} UpdateStatus={props.UpdateStatus} />
         <Person
            profile={props.profile}
            nickName='Alex'
            dateOfBirth='26 january'
            city='Berdyansk'
            education='High'
            webSite='https://trainingToDoSocialN.com' />

         <SendingPost {...props} />
         {props.posts}
      </div>
   )
}

export default Profile