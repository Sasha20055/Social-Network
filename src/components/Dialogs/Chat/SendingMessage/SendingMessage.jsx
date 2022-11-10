import React from 'react';
import s from './SendingMessage.module.sass';

const newMessage = React.createRef()

const newMessF = () => {
  let text = newMessage.current.value
  alert(text)
}

const SendingMessage = (props) => {
  return (
    <div className={s.sendingMessage}>
        <input type="text" ref={newMessage} />
        <button onClick={ newMessF }>Send</button>
    </div>
  )
}

export default SendingMessage