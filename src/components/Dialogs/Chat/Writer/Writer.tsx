import React from 'react';
import { accountType, messageType, profileType } from '../../../../types/types';
import s from './Writer.module.sass';

type PropsType = {
  key: string
  message: messageType
  isMe: boolean
  chatWith: Array<accountType>
  profile: profileType
  deleteForMe: (messageId: string) => void,
  messageToSpam: (messageId: string) => void,
}

const Writer: React.FC<PropsType> = (props) => {

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