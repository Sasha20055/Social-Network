import s from './SendingPost.module.sass'

const SendingPost = () => {
  return (
        <div className={s.sendPost}>
          <h2>My posts</h2>
          <form>
            <input className={s.input} placeholder='your news...'></input>
            <button className={s.button}>Send</button>
          </form>
        </div>
  )
}

export default SendingPost