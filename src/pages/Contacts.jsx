import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
import { ContactsList } from 'components/ContactsList';
import { Form } from 'components/Form';
import { fetchContacts } from '../components/redux/contacts/operations';
import { getIsLoading } from '../components/redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Form />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
}
