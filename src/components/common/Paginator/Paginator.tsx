import React, { useState } from "react";
import s from "./Paginator.module.sass";

type PropsType = {
  totalItemsCount: number
  pageSize: number
  onPageChange: (pageNumber: number) => void 
  currentPage: number 
  portionSize: number
}

const Paginator: React.FC<PropsType> = React.memo((props) => {

  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1
  let rightPortionNumber = portionNumber * props.portionSize


  return (
    <div className={s.paginator}>
      {portionNumber > 1 && <button className={s.Prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>Пред</button>}
      <div className={s.pagesNumbers}>
        {pages
          .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
          .map(p => {
            return <span key={p} className={props.currentPage === p && s.selectedPage} onClick={() => { props.onPageChange(p) }}>{p}</span>
          })}
      </div>

      {portionCount > portionNumber && <button className={s.Next} onClick={() => { setPortionNumber(portionNumber + 1) }}>След</button>}
    </div>
  )
})




export default Paginator;