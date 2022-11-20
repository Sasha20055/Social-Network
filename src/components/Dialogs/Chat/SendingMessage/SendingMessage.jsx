import React from 'react';
import s from './SendingMessage.module.sass';

const newMessage = React.createRef()

const SendingMessage = (props) => {
  const addMessage = () => {
    props.message()
  }
  const onMessageChange = () => {
    let text = newMessage.current.value
    console.log(text)
    props.messageChange(text)
  }

  return (
    <div className={s.sendingMessage}>
      <input type="text" ref={newMessage} onChange={onMessageChange} value={props.newMessageText} />
      <button onClick={addMessage}>Send</button>
    </div>
  )
}

export default SendingMessage