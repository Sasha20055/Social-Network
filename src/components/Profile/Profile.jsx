import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';
import React from "react";


const Profile = (props) => {
   return (
      <div>
         <Head />
         <Person
            profile={props.profile}
            nickName='Alex'
            dateOfBirth='26 january'
            city='Berdyansk'
            education='High'
            webSite='https://trainingToDoSocialN.com' />

         <SendingPost {...props}/>
         {props.posts}
      </div>
   )
}

export default Profile