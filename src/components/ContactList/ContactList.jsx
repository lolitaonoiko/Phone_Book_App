import Contact from '../Contact/Contact';

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';

import style from './ContactList.module.css';
import { Alert, Box, CircularProgress } from '@mui/material';

function ContactList() {
  const profiles = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={style.box}>
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
      {loading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
}

export default ContactList;
