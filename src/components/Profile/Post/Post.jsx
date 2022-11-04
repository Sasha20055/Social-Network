import s from './Post.module.sass';

const Post = (props) => {
  return (
        <div className={s.myPost}>
          <div className={s.postAva}></div>
          <p className={s.postMsg}>{props.message}</p>
          <p className={s.like}>Likes: {props.likes}</p>
        </div>
  )
}

export default Post