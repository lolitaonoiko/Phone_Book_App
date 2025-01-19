import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import style from './ContactList.module.css';
import { selectProfiles } from '../../redux/contactsSlice';
import { filtersValue } from '../../redux/filtersSlice';

function ContactList() {
  const profiles = useSelector(selectProfiles);
  const filter = useSelector(filtersValue);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredProfiles.map(profile => (
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
