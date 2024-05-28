import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from './redux/contacts/operations';
import * as React from 'react';
import Button from '@mui/material/Button';


export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <span>
        {contact.name} : {contact.phone}
      </span>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
