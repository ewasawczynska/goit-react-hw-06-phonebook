import {
  ContactForm,
  Contacts,
  Container,
  InputFiltr,
  Section,
} from 'components';

export const App = () => {
  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <InputFiltr />
        <Contacts />
      </Section>
    </Container>
  );
}
