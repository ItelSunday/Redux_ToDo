import React, { Component } from 'react';
import './App.css';

import { ToDoForm, ToDoList} from './component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
