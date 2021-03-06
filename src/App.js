// Loading the `Component` as a property of React.
import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const {characters} = this.state;
    // const characters = this.state.characters; // ES5

    this.setState({
      // To update the state, we'll use this.setState(),
      // a built-in method for manipulating state.
      // We'll filter the array based on an index that
      // we pass through, and return the new array.
      characters: characters.filter((characters, i) => {
        // `filter` does not mutate but rather creates a new array,
        // and is a preferred method for modifying arrays in JavaScript.
        // This particular method is testing an index vs. all the indices
        // in the array, and returning all but the one that is passed through.
        return i !== index;
      }),
    })
  }

  // Create a function handleSubmit() to update the state by taking the
  // existing this.state.characters and adding the new character parameter,
  // using the ES6 spread operator.
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const {characters} = this.state;

    return (
      <div className="container">
        <h1 className='mt-3'>React Table Demo</h1>
        <p className='mb-5'>Add a character with a name and a job to the table.</p>
        {/*
        We can call the property whatever we want, so I'll go with characterData.
        The data I'm passing through is the characters variable, and I'll put
        curly braces around it as it's a JavaScript expression.
        We'll pass the `removeCharacter` function through as a prop to Table.
        */}
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <br />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App
