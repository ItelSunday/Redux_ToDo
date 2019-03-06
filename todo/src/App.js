import React, { Component } from 'react';
import './App.css';

import { TodoForm, TodoList} from './component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;