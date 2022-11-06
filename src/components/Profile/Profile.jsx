import s from './Profile.module.sass';
import Post from './Post/Post';
import Person from './Person/Person';
import SendingPost from './SendingPost/SendingPost';
import Head from './Head/Head';


const Profile = () => {

   const postData = [
      {id: 1, message: 'Testing props on comments!', likes: '15'},
      {id: 2, message: 'Hello props!!!', likes: '5'},
      {id: 3, message: 'Everybody is coming here)', likes: '23'}
   ];

   const posts = postData
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