import React from 'react'
import s from './Footer.module.sass'

type PropsType = {

}

const Footer: React.FC<PropsType> = (props) => {
  return (
    <h2 className={s.lockNet}>LOCK NET</h2>
  )
}

export default Footer