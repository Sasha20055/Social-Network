import Person from './Person/Person';
import SendingPostContainer from './SendingPost/SendingPostContainer';
import Head from './Head/Head';


const Profile = (props) => {

   return (
      <div>
         <Head />
         <Person
            nickName='Alex'
            dateOfBirth='26 january'
            city='Berdyansk'
            education='High'
            webSite='https://trainingToDoSocialN.com' />

         <SendingPostContainer />
         {props.posts}
      </div>
   )
}

export default Profile