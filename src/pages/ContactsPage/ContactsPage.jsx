import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectProfiles } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const profiles = useSelector(selectProfiles);

  useEffect(() => {
    if (profiles.length === 0) {
      dispatch(fetchContacts()), [dispatch];
    }
  }, [dispatch, profiles.length]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
