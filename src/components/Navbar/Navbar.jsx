import s from './Navbar.module.sass';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.items}>
                <li className={s.item1}><NavLink to={"/profile/" + props.userId} className={navData => navData.isActive ? s.active : s.link}></NavLink></li>
                <li className={s.item2}><NavLink to="/dialogs/12" className={navData => navData.isActive ? s.active : s.link}></NavLink></li>
                <li className={s.item3}><NavLink to="/users" className={navData => navData.isActive ? s.active : s.link}></NavLink></li>
                <li className={s.item4}>
                    {props.isAuth
                        ? <div className={s.item5}>
                            <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink>
                            <button className={s.button} onClick={props.logout}>Выйти</button>
                        </div>
                        : <NavLink to='/login'><button className={s.button} onClick={props.logout}>Войти</button></NavLink>}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar