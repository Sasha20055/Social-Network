import React from 'react'
import s from './Post.module.sass';

const Posts = React.memo((props) => {
  return (
    <div>
      {
        props.posts.map(post => <div className={s.myPost}>
          <div className={s.postAva}></div>
          <p className={s.postMsg}>{post.message}</p>
          <p className={s.like}>Likes: {post.likes}</p>
        </div>)
      }
    </div>
  )
})

export default Posts