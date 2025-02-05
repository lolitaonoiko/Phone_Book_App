import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import style from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.header}>
      <Navigation />
      <div className={style.menu}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};

export default AppBar;
