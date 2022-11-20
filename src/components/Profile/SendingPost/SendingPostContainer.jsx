import React from 'react'
import { actionAddPost, actionOnPostChange } from '../../../redux/profileReducer';
import SendingPost from './SendingPost';


const SendingPostContainer = (props) => {
  const addPost = () => {
    props.store.dispatch(actionAddPost())
  }
  const postChange = (text) => {
    props.store.dispatch(actionOnPostChange(text))
  }
  let newPostText = props.store.getState().profilePage.newPostText
  return (
    <SendingPost addPost={addPost} postChange={postChange} newPostText={newPostText}/>
  )
}

export default SendingPostContainer