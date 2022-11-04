import s from './Person.module.sass'

const Person = (props) => {
  return (
    <div className={s.person}>
      <div className={s.ava}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"></img>
      </div>
      <div className={s.info}>
        <h2>{props.nickName}</h2>
        <p>Date of Birth: {props.dateOfBirth}</p>
        <p>City: {props.city}</p>
        <p>Education: {props.education}</p>
        <p>Web Site: {props.webSite}</p>
      </div>
    </div>
  )
}

export default Person