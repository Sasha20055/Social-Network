import s from './Profile.module.sass';
import Post from './Post/Post';
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';


const Profile = (props) => {

   const posts = props.postData
   .map(post => <Post message={post.message} likes={post.likes}/>)

   return (
      <div>
         <Head />
         <Person nickName='Alex' dateOfBirth='26 january' city='Berdyansk' education='High' webSite='https://trainingToDoSocialN.com'/>
         <SendingPost />
         { posts }
      </div>
   )
}

export default Profile