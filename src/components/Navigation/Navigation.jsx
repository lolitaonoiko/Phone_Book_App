import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import style from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const classNavLink = ({ isActive }) =>
    isActive ? `${style.navlink} ${style.active}` : style.navlink;

  return (
    <div className={style.linkBox}>
      <NavLink className={classNavLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={classNavLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
