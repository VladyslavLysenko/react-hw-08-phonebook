import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList';
import { Form } from 'components/Form';
import { fetchContacts } from '../components/redux/contacts/operations';
import { getIsLoading } from '../components/redux/contacts/selectors';
import Filter from 'components/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <Form />
      <Filter/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
