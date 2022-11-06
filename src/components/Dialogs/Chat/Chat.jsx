import s from './Chat.module.sass';
import Writer from './Writer/Writer'

const Chat = (props) => {

  const messages = props.messageData
    .map(message => <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={message.message} who='me' />)

  return (
    <div className={s.chat}>
      {messages}
    </div>
  )
}

export default Chat