import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.info}>
      <p>Welcome, {user.name}!</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
