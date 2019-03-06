import React, { Component } from 'react';
import './App.css';

import { TodoForm, TodoList} from './component/'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>What do you want to do today?</h1>
      <TodoForm /> 
      <TodoList />
        
      </div>
    );
  }
}

export default App;