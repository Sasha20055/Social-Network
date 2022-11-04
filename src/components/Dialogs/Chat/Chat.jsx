import s from './Chat.module.sass';
import Writer from './Writer/Writer'

const Chat = () => {
  return (
    <div className={s.chat}>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message='Loerem sdafsdf asdfasd fasdf asdf ' who='me'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147142.png' message='las dhfiuw efhae jkfsd asdf' who='you'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147133.png' message='Loerem sdafsdf asdfasd fasdf asdf  asdf sadf sdafds asdfasdf asdfasdf dafdsfasdfa sdasdfasdfd  adf' who='me'/>
      <Writer ava='https://cdn-icons-png.flaticon.com/512/147/147142.png' message='asdfasd fasdf asdf ' who='you'/>
    </div>
  )
}

export default Chat