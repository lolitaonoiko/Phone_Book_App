import Contact from '../Contact/Contact';

import style from './ContactList.module.css';

import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

function ContactList() {
  const profiles = useSelector(selectFilteredContacts);

  return (
    <ul>
      {profiles.map(profile => (
        <li className={style.li} key={profile.id}>
          <Contact
            name={profile.name}
            number={profile.number}
            id={profile.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
