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

  const dialogs = dialogsData
  .map(dialog => <Contact nickName={dialogsData[0].name} id={dialog.id} ava={dialog.ava}/>)

  return (
    <div className={s.contacts}>
      { dialogs }
    </div>
  )
}

export default Contacts