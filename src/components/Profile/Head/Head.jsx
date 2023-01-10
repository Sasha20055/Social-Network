import React from 'react'
import s from './Head.module.sass'

const Head = React.memo(() => {
  return (
      <div className={s.head}></div>
  )
})

export default Head