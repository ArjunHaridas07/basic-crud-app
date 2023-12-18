import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/index';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, phone };
    addContact(newContact);
    setName('');
    setPhone('');
  };

  return (
    <div className='text-center'>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className='m-2' type="submit">Add</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
