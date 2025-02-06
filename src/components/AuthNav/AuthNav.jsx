import { NavLink } from 'react-router-dom';

import style from './AuthNav.module.css';

const AuthNav = () => {
  const classNavLink = ({ isActive }) =>
    isActive ? `${style.navlink} ${style.active}` : style.navlink;
  return (
    <>
      <NavLink className={classNavLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={classNavLink} to="/login">
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
