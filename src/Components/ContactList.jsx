import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, editContact } from '../actions'; 

const ContactList = ({ contacts, deleteContact, editContact }) => {
  if (!Array.isArray(contacts)) {
    return <p>No contacts available</p>;
  }

  const handleEdit = (id) => {
    const editedContact = prompt('Enter new contact details (name - phone):');
    if (editedContact) {
      const [name, phone] = editedContact.split('-').map((item) => item.trim());
      editContact({ id, name, phone });
    }
  };

  return (
    <div className='text-center'>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            <button onClick={() => handleEdit(contact.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = {
  deleteContact,
  editContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
