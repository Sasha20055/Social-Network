import { useRef, useEffect } from 'react'
import React from 'react';
import s from './Chat.module.sass';
import Writer from './Writer/Writer';
import SendingMessage from './SendingMessage/SendingMessage'
import { NavLink } from 'react-router-dom';
import { accountType, messageType, profileType, userType } from '../../../types/types';

type PropsType = {
  users: Array<any>
  chatWith: Array<userType>,
  messageData: Array<messageType>,
  profile: profileType,
  YourId: number,
  currentPage: number,
  totalMessageCount: number | null,
  pageSize: number,
  portionCount: number,
  listOfMessages: (userId: number, currentPage: number | null,
    pageSize: number | null) => void,
  sendMessage: (userId: number, message: []) => void,
  deleteForMe: (messageId: string) => void,
  SetPageSize: (pageSize: number) => void,
  messageToSpam: (messageId: string) => void,
  SetCurrentPage: (currentPage: number) => void,
  moreMessages: (userId: number, currentPage: number, pageSize:
    number, messages: Array<messageType>) => void,
}

const Chat = React.memo<PropsType>((props) => {

  const messagesEndRef: any = useRef(null)

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

  const chatWithName = props.chatWith[0] && (props.chatWith[0].name ? props.chatWith[0].name : props.chatWith[0].name)

  return (
    <div className={s.chat}>
      <NavLink to={'/profile/' + (props.chatWith[0] && props.chatWith[0].id)} className={s.dialogWith}>
        <h2 className={s.header}>{chatWithName}</h2>
      </NavLink>
      <div className={s.messages}>
        {props.currentPage < props.portionCount && <button onClick={() => { more() }} className={s.moreBtn}>Больше</button>}
        {message}
        <div ref={messagesEndRef}></div>
      </div>
      {props.users && <SendingMessage
        sendMessage={props.sendMessage}
        chatWith={props.chatWith}
      />}
    </div>
  )
})

export default Chat