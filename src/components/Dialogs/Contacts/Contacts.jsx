import s from './Contacts.module.sass';
import Contact from './Contact/Contact'

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <Contact nickName='Mr Ben' ava='https://cdn-icons-png.flaticon.com/512/147/147133.png'/>
      <Contact nickName='Mom' ava='https://cdn-icons-png.flaticon.com/512/147/147142.png'/>
      <Contact nickName='Pap' ava='https://cdn-icons-png.flaticon.com/512/147/147133.png'/>
      <Contact nickName='Gurry' ava='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
      <Contact nickName='GrandMother' ava='https://cdn-icons-png.flaticon.com/512/147/147142.png'/>
    </div>
  )
}

export default Contacts