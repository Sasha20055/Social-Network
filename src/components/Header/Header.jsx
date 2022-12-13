import s from './Header.module.sass';
import { NavLink } from 'react-router-dom'
import React from "react";



const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'></img>
            <div className={s.login}>
                {props.isAuth ? <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header