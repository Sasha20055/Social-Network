import s from './Contacts.module.sass';
import Contact from './Contact/Contact'

const Contacts = () => {

  const dialogsData = [
    {id: 1, name: 'Mr Ben', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png'},
    {id: 2, name: 'Mom', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'},
    {id: 3, name: 'Pap', ava: 'https://cdn-icons-png.flaticon.com/512/147/147133.png'},
    {id: 4, name: 'Gurry', ava: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'},
    {id: 5, name: 'GrandMother', ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'},
  ];

  

  return (
    <div className={s.contacts}>
      <Contact nickName={dialogsData[0].name} id={dialogsData[0].id} ava={dialogsData[0].ava}/>
      <Contact nickName={dialogsData[1].name} id={dialogsData[1].id} ava={dialogsData[1].ava}/>
      <Contact nickName={dialogsData[2].name} id={dialogsData[2].id} ava={dialogsData[2].ava}/>
      <Contact nickName={dialogsData[3].name} id={dialogsData[3].id} ava={dialogsData[3].ava}/>
      <Contact nickName={dialogsData[4].name} id={dialogsData[4].id} ava={dialogsData[4].ava}/>
    </div>
  )
}

export default Contacts