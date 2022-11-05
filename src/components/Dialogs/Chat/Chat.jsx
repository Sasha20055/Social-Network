import s from './Chat.module.sass';
import Writer from './Writer/Writer'

const Chat = () => {

  const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Wafsdfadf asdf sda adsafadsf asdf'},
    {id: 3, message: 'FSDF sdfasd dafsdf adf'},
    {id: 4, message: 'Sadfdsa adsfasd '},
  ]

  return (
    <div className={s.chat}>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={messageData[0].message} who='me'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={messageData[1].message} who='me'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={messageData[2].message} who='me'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message={messageData[3].message} who='me'/>
    </div>
  )
}

export default Chat