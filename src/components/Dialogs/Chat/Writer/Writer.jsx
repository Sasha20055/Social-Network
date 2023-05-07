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
      {props.isMe 
      ? <img src={props.profile.photos.small || UserIcon} className={s.ava}></img> 
      : <img src={props.chatWith[0].photos.small || UserIcon} className={s.ava}></img>}
      <div className={s.message}>
        <p>{props.message.body}</p>
      </div>
      <div>
        <div className={s.viewed}>
          {props.message.viewed ? <p>viewed</p> : <p>unViewed</p>}
        </div>
        <div className={s.delete}>
          <button onClick={deleteMessage}>delete</button>
        </div>
        <div className={s.spam}>
          <button onClick={messageToSpam}>spam</button>
        </div>
      </div>
    </div>

  )
}

export default Writer