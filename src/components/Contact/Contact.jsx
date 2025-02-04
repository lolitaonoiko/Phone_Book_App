import style from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteFromStore = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        <li className={style.item}>
          <img
            className={style.img}
            src="https://www.svgrepo.com/show/115674/profile.svg"
          ></img>
          <p>{name}</p>
        </li>
        <li className={style.item}>
          <img
            className={style.img}
            src="https://www.svgrepo.com/show/152977/telephone.svg"
          ></img>
          <p>{number}</p>
        </li>
      </ul>
      <button className={style.button} onClick={() => deleteFromStore(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
