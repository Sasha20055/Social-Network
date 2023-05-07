import s from'./Navbar.module.sass';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.items}>
                <li className={s.item}><NavLink to={"/profile/" + props.userId} className = { navData => navData.isActive ? s.active : s.link }>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs/12" className = { navData => navData.isActive ? s.active : s.link }>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/users" className = { navData => navData.isActive ? s.active : s.link }>Users</NavLink></li>
                <li className={s.item}><NavLink to="/news" className = { navData => navData.isActive ? s.active : s.link }>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" className = { navData => navData.isActive ? s.active : s.link }>Music</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar