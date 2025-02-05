import style from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteFromStore = id => {
    dispatch(deleteContact(id));
  };

  const editContact = ({ id, newName, newNumber }) => {
    dispatch(updateContact({ id, name: newName, number: newNumber }));
  };

  return (
    <div className={style.contact}>
      <ul>
        <li className={style.item}>
          <img
            width="20px"
            height="20px"
            src="https://www.svgrepo.com/show/524211/user.svg"
          ></img>
          <p>{name}</p>
        </li>
        <li className={style.item}>
          <a href={`tel:${number}`} className={style.imgTel}>
            <img
              width="20px"
              height="20px"
              src="https://www.svgrepo.com/show/524804/phone-rounded.svg"
            ></img>
          </a>

          <p className={style.number}>{number}</p>
        </li>
      </ul>
      <div className={style.btnBox}>
        <DeleteModal onDelete={() => deleteFromStore(id)} />
        <EditModal
          currentNumber={number}
          id={id}
          currentName={name}
          onUpdate={editContact}
        />
      </div>
    </div>
  );
}

export default Contact;
