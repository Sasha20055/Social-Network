import s from './Profile.module.sass';
import Post from './Post/Post';
import Person from './Person/Person';
import SendingPostContainer from './SendingPost/SendingPostContainer';
import Head from './Head/Head';


const Profile = (props) => {

   const posts = props.store.getState().profilePage.postData
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

         <SendingPostContainer store={props.store}/>
         {posts}
      </div>
   )
}

export default Profile