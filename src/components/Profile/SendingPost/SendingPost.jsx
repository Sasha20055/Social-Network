import s from './SendingPost.module.sass'
import React from 'react'
import { actionAddPost, actionOnPostChangePost } from '../../../redux/state';

const newPostElement = React.createRef();

const SendingPost = (props) => {
  const addPost = () => {
    props.dispatch(actionAddPost())
  }
  const onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(actionOnPostChangePost(text))
  }
  return (
    <div className={s.sendPost}>
      <h2>My posts</h2>
      <input className={s.input} onChange={onPostChange} placeholder='your news...' ref={newPostElement} value={props.newPostText}></input>
      <button className={s.button} onClick={addPost}>Send</button>
    </div>
  )
}

export default SendingPost