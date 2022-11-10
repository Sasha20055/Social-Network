import s from './SendingPost.module.sass'
import React from 'react'

const newPostElement = React.createRef();

const SendingPost = (props) => {
  const addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }
  return (
        <div className={s.sendPost}>
          <h2>My posts</h2>
            <input className={s.input} placeholder='your news...' ref={ newPostElement }></input>
            <button className={s.button} onClick={ addPost }>Send</button>
        </div>
  )
}

export default SendingPost