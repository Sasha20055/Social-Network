import s from './SendingPost.module.sass'
import React from 'react'


const newPostElement = React.createRef();

const SendingPost = (props) => {
  const onAddPost = () => {
    props.addPost()
  }
  const onPostChange = () => {
    let text = newPostElement.current.value
    props.postChange(text)
  }
  return (
    <div className={s.sendPost}>
      <h2>My posts</h2>
      <input className={s.input} onChange={onPostChange} placeholder='your news...' ref={newPostElement} value={props.newPostText}></input>
      <button className={s.button} onClick={onAddPost}>Send</button>
    </div>
  )
}

export default SendingPost