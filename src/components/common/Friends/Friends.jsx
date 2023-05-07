import React from "react";
import s from "./Friends.module.sass"


const Friends = React.memo((props) => {
  return (
    <div className={s.friends}>
      {props.friends && props.friends.items.map(item => <p>{item.name}</p>)}
    </div>
  )
})

export default Friends