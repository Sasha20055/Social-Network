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
   ]

   return (
      <div>
         <Head />
         <Person nickName='Alex' dateOfBirth='26 january' city='Berdyansk' education='High' webSite='https://trainingToDoSocialN.com'/>
         <SendingPost />
         <Post message={postData[0].message} likes={postData[0].likes}/>
         <Post message={postData[1].message} likes={postData[1].likes}/>
         <Post message={postData[2].message} likes={postData[2].likes}/>
      </div>
   )
}

export default Profile