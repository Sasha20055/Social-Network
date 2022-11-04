import s from './Profile.module.sass';
import Post from './Post/Post';
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';


const Profile = () => {
   return (
      <div>
         <Head />
         <Person nickName='Alex' dateOfBirth='26 january' city='Berdyansk' education='High' webSite='https://trainingToDoSocialN.com'/>
         <SendingPost />
         <Post message='Testing props on comments!' likes='15'/>
         <Post message='Hello props!!!' likes='5'/>
      </div>
   )
}

export default Profile