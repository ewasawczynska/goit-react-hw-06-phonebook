import { StyledForm, StyledInput, StyledLabel } from './ContactForm.styled';
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
    form.reset();
   
      if (
        contacts.find(contact => contact.name.toLowerCase() ===
        name.toLowerCase())
      ) {
        alert(`${newContact.name} already exists!`);
        } else {
          dispatch(addContact(newContact));
        }

  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
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
      </StyledLabel>
      <StyledLabel>
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
      </StyledLabel>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};
