import s from './SendingPost.module.sass'
import React from 'react'

const newPostElement = React.createRef();

const SendingPost = (props) => {
  const addPost = () => {
    props.dispatch({type: "ADD-POST"})
  }
  const onPostChange = () => {
    let text = newPostElement.current.value
    let action = {type: "UPDATE-NEW-POST-TEXT", newText: text}
    props.dispatch(action)
  }
  return (
        <div className={s.sendPost}>
          <h2>My posts</h2>
            <input className={s.input} onChange={onPostChange} placeholder='your news...' ref={ newPostElement } value={props.newPostText}></input>
            <button className={s.button} onClick={ addPost }>Send</button>
        </div>
  )
}

export default SendingPost