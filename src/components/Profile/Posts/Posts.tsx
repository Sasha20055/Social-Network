import React from 'react'
import { postType } from '../../../types/types';
import s from './Post.module.sass';

type PropsType = {
  posts: Array<postType>
}

const Posts: React.FC<PropsType> = React.memo((props) => {
  return (
    <div>
      {
        props.posts.map(post => <div key={post.id} className={s.myPost}>
          <div className={s.postAva}></div>
          <p className={s.postMsg}>{post.message}</p>
          <p className={s.like}>Likes: {post.likes}</p>
        </div>)
      }
    </div>
  )
})

export default Posts