import s from './Writer.module.sass';


const Writer = (props) => {
  return (
    <div className={s.writer}>
      <img src={props.ava} className={s.ava}></img>
      <div className={s.message}>
        <p>{props.message}</p>
      </div>
    </div>

  )
}

export default Writer