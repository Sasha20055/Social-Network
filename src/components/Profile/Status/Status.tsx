import React, { useEffect, useState } from "react";
import s from "./Status.module.sass"

type PropsType = {
  status: string
  UpdateStatus: (status: string) => void
  isOwner: boolean
}

const Status = React.memo<PropsType>((props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(
    () => setStatus(props.status),
    [props.status]
  )

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.UpdateStatus(status)
  }

  const onStatusChange = (e: any) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status}</span>
        </div>
      }
      {editMode &&
        <div>
          {props.isOwner
            ? <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} type="text" />
            : <b>{status}</b>
          }
        </div>
      }
    </div>
  )
})



export default Status