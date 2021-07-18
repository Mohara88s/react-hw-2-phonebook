import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  hendelInputChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default App;
