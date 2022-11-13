import s from './Profile.module.sass';
import Post from './Post/Post';
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';


const Profile = (props) => {

   const posts = props.profileData.postData
      .map(post => <Post message={post.message} likes={post.likes} />)

   return (
      <div>
         <Head />
         <Person
            nickName='Alex'
            dateOfBirth='26 january'
            city='Berdyansk'
            education='High'
            webSite='https://trainingToDoSocialN.com' />

         <SendingPost
            newPostText={props.profileData.newPostText}
            dispatch={props.dispatch}/>
         {posts}
      </div>
   )
}

export default Profile