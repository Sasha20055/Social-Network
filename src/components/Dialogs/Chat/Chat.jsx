import s from './Chat.module.sass';
import Writer from './Writer/Writer'

const Chat = (props) => {

  const message = props.messageData
    .map(message => <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={message.message} who='me' />)

  return (
    <div className={s.chat}>
      {message}
    </div>
  )
}

export default Chat