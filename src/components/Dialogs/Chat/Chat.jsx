import s from './Chat.module.sass';
import Writer from './Writer/Writer'

const Chat = () => {

  const messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Wafsdfadf asdf sda adsafadsf asdf' },
    { id: 3, message: 'FSDF sdfasd dafsdf adf' },
    { id: 4, message: 'Sadfdsa adsfasd ' },
  ];

  const messages = messageData
    .map(message => <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={message.message} who='me' />)

  return (
    <div className={s.chat}>
      {messages}
    </div>
  )
}

export default Chat