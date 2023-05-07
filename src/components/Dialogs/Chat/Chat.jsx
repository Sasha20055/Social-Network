import React from 'react';
import s from './Chat.module.sass';
import Writer from './Writer/Writer';
import SendingMessage from './SendingMessage/SendingMessage'


const Chat = React.memo((props) => {

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

  let countViewMsg = props.pageSize + ((props.currentPage - 1) * 20)

  const start = () => {
    props.SetCurrentPage(1)
    props.SetPageSize(5)
    props.listOfMessages(props.chatWith[0].id, 1, 5)

  }

  const more = () => {
    if (props.pageSize >= 15) {
      if (props.currentPage < props.portionCount) {
        props.SetCurrentPage(props.currentPage + 1)
        props.SetPageSize(0)
      } else {
        props.SetCurrentPage(1)
      }
      props.SetPageSize(0)
    } else if (props.pageSize < 15 && props.totalMessageCount > countViewMsg) {
      props.SetPageSize(props.pageSize + 5)
    }

    props.listOfMessages(props.chatWith[0].id, props.currentPage, props.pageSize + 5)
  }

  return (
    <div className={s.chat}>

      <div className={s.messages}>
        {message}
      </div>
      <div>
        {props.totalMessageCount > countViewMsg && <button onClick={() => { more() }}>more</button>}
        {props.totalMessageCount <= countViewMsg && <button onClick={() => { start() }}>start</button>}
        {props.currentPage}
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