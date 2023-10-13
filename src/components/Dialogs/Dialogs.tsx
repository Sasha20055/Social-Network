import React from 'react'
import s from './Dialogs.module.sass'
import Contacts from './Contacts/Contacts'
import Chat from './Chat/Chat'
import { accountType, messageType, profileType, userType } from '../../types/types'

type PropsType = {
  chatWith: Array<userType>,
  users: Array<any>,
  messageData: Array<messageType>,
  user: any,
  YourId: number,
  profile: profileType,
  currentPage: number,
  totalMessageCount: number | null,
  pageSize: number,
  portionCount: number,
  listOfMessages: (userId: number, currentPage: number | null,
    pageSize: number | null) => void,
  sendMessage: (userId: number, message: []) => void,
  deleteForMe: (messageId: string) => void,
  getProfile: (profileId: number) => void,
  SetPageSize: (pageSize: number) => void,
  messageToSpam: (messageId: string) => void,
  listOfNewMessages: () => void,
  SetCurrentPage: (currentPage: number) => void,
  moreMessages: (userId: number, currentPage: number, pageSize:
    number, messages: Array<messageType>) => void,
  findPerson: (name: string) => void
}

const Dialogs: React.FC<PropsType> = React.memo((props) => {
  return (
    <div className={s.wrapper}>
      <h1>Чат</h1>
      <div className={s.chat}>
        <Contacts users={props.users} getProfile={props.getProfile}
          user={props.user} YourId={props.YourId} findPerson={props.findPerson} />
        <Chat
          messageData={props.messageData}
          sendMessage={props.sendMessage}
          chatWith={props.chatWith}
          deleteForMe={props.deleteForMe}
          YourId={props.YourId}
          profile={props.profile}
          listOfMessages={props.listOfMessages}
          SetPageSize={props.SetPageSize}
          currentPage={props.currentPage}
          totalMessageCount={props.totalMessageCount}
          pageSize={props.pageSize}
          messageToSpam={props.messageToSpam}
          users={props.users}
          portionCount={props.portionCount}
          SetCurrentPage={props.SetCurrentPage}
          moreMessages={props.moreMessages}
        />
      </div>
    </div>
  )
})

export default Dialogs