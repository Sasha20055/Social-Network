import React from 'react'
import s from './Dialogs.module.sass';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/Chat';

const Dialogs = React.memo((props) => {
  return (
    <div className={s.wrapper}>
      <h1>Чат</h1>
      <div className={s.chat}>
        <Contacts users={props.users} getProfile={props.getProfile} user={props.user} YourId={props.YourId} findPerson={props.findPerson} />
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
        {props.newMessages > 0 && <div>New Messages: {props.newMessages}</div>}
      </div>
    </div>
  )
})

export default Dialogs