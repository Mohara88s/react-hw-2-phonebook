import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  hendelInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  hendelSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const contactsList = this.state.contacts;
    return (
      <>
        <form onSubmit={this.hendelSubmit}>
          <h2>Phonebook</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.hendelInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contactsList.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
