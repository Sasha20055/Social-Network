import React from 'react';
import s from './Chat.module.sass';
import Writer from './Writer/Writer';
import SendingMessage from './SendingMessage/SendingMessage'

const Chat = (props) => {
  const message = props.messageData
    .map(message => <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={message.message} who='me' />)

  return (
    <div className={s.chat}>
      {message}
      <SendingMessage
        newMessageText={props.newMessageText}
        dispatch={props.dispatch}
        message={props.message}
        messageChange={props.messageChange}
      />
    </div>
  )
}

export default Chat