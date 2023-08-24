import React from "react";
import s from "./Users.module.sass";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User"
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utilities/validation';


const Users = React.memo(({ totalUsersCount, pageSize, onPageChange, currentPage, ...props }) => {

  const onSubmit = (formData) => {
    props.getUsersByName(formData.nameUser)
  }

  return (
    <div className={s.body}>
      <h1>Пользователи</h1>
      <div className={s.usersBlock}>
        <div className={s.findUser}>
          <FindUserReduxForm onSubmit={onSubmit} />
        </div>
        <div className={s.users}>
          {
            props.users.map(user =>
              <User key={user.id} user={user} isFollowing={props.isFollowing} UnFollow={props.UnFollow} Follow={props.Follow} />
            )
          }
        </div>
        <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage} portionSize={6} />
      </div>
    </div>
  )
})


const FindUserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.contactFormBlock}>
      <Field name={"nameUser"} component={Input} type={"text"} placeholder={"Имя пользователя"} validate={[required]} />
      <button className={s.contactBtn}>Искать</button>
    </form>
  )
}

const FindUserReduxForm = reduxForm({ form: 'FindUser' })(FindUserForm)



export default Users;