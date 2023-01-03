import s from './Person.module.sass'


const Person = (props) => {
  if (!props.profile) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img>
    )
  }


  return (
    <div className={s.person}>
      <div className={s.ava}>
        <img src={props.profile.photos.small}></img>
      </div>
      <div className={s.info}>
        <h2>{props.profile.fullName}</h2>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  )
}

export default Person