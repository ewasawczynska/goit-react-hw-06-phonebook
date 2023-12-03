import { Button } from 'components/Button';
import { StyledContact } from './Contacts.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFilters } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <StyledContact key={contact.id}>
        {contact.name}: {contact.number}
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
          colorchange="red"
          marginchange="10px"
        >
          Delete
        </Button>
      </StyledContact>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};
