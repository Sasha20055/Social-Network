import s from './Writer.module.sass';
import UserIcon from "../../../../assets/images/unknown.png";



const Writer = (props) => {

  const deleteMessage = () => {
    props.deleteForMe(props.message.id)
  }
  const messageToSpam = () => {
    props.messageToSpam(props.message.id)
  }

  return (
    <div className={props.isMe ? s.me : s.you}>
      <div className={s.message}>
        <p>{props.message.body}</p>
      </div>
      <div className={s.delView}>
        <span className={props.message.viewed ? s.viewed : s.unViewed}></span>
        <button onClick={deleteMessage} className={s.deleteMsg}></button>
      </div>
    </div>
  )
}

export default Writer