import { Link } from 'react-router-dom';
import ColorsTimeline from '../../components/ColorsTimeLine/ColorsTimeLine';

import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.home}>
      <h1 className={style.text}>About us</h1>
      <h2 className={style.descr}>
        📌 <Link className={style.link}>Join us </Link> on our journey – because
        connections matter
      </h2>
      <ColorsTimeline />
    </div>
  );
};

export default HomePage;
