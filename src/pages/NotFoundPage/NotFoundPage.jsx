import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.box}>
      <img
        src="https://www.svgrepo.com/show/280412/error.svg"
        alt="error icon"
        className={style.icon}
      />
      <h2>Oopps.. 404 error!</h2>
      <p className={style.textExpl}>Page not found!</p>
      <p className={style.text}>
        Try searching or go to{' '}
        <Link className={style.link} to="/">
          home page.
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
