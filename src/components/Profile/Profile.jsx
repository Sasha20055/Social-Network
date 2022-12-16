import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';
import React from 'react';
import { Navigate } from 'react-router-dom'


const Profile = (props) => {
   if (!props.isAuth) return <Navigate to='/login' />

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

         <SendingPost {...props} />
         {props.posts}
      </div>
   )
}

export default Profile