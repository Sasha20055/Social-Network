import React from 'react';
import s from './SendingMessage.module.sass';
import { actionAddMessage, actionOnPostChangeMessage } from '../../../../redux/state';

const newMessage = React.createRef()

const SendingMessage = (props) => {

  const addMessage = () => {
    props.dispatch(actionAddMessage())
  }
  const onMessageChange = () => {
    let text = newMessage.current.value
    props.dispatch(actionOnPostChangeMessage(text))
  }

  return (
    <div className={s.sendingMessage}>
        <input type="text" ref={newMessage} onChange={ onMessageChange } value={props.newMessageText}/>
        <button onClick={ addMessage }>Send</button>
    </div>
  )
}

export default SendingMessage