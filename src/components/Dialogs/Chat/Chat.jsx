import { useRef, useEffect } from 'react'
import React from 'react';
import s from './Chat.module.sass';
import Writer from './Writer/Writer';
import SendingMessage from './SendingMessage/SendingMessage'


const Chat = React.memo((props) => {

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [props.messageData]);

  const message = props.messageData
    .map(message => <Writer
      key={message.id}
      message={message}
      isMe={message.senderId === props.YourId}
      deleteForMe={props.deleteForMe}
      chatWith={props.chatWith}
      profile={props.profile}
      messageToSpam={props.messageToSpam}
    />)

  const more = () => {
    props.moreMessages(props.chatWith[0].id, props.currentPage + 1, 20, props.messageData)
    props.SetCurrentPage(props.currentPage + 1)
  }

  return (
    <div className={s.chat}>
      <h2 className={s.header}>{props.chatWith[0] && (props.chatWith[0].userName ? props.chatWith[0].userName : props.chatWith[0].name)}</h2>
      <div className={s.messages}>
        {props.currentPage < props.portionCount && <button onClick={() => { more() }} className={s.moreBtn}>more</button>}
        {message}
        <div ref={messagesEndRef}></div>
      </div>
      {props.users && <SendingMessage
        sendMessage={props.sendMessage}
        users={props.users}
        chatWith={props.chatWith}
        profile={props.profile}
      />}
    </div>
  )
})

export default Chat