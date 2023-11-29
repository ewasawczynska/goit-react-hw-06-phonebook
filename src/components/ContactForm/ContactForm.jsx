import { StyledInput } from './ContactForm.styled';
import { Button } from 'components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };
    const form = e.target;

    if (
      contacts.find(contact => contact.name.toLowerCase() !== name.toLowerCase())
    ) {
      dispatch(addContact(newContact))
    } else {
      alert(`${name} already exist`)
    }

    form.reset();
  };



  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contacts.name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contacts.number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
