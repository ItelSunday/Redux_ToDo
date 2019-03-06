import React, { useState } from 'react';

const Todoform = () => {
  const [todo, setTodo] = useState('');
  return (
      <form action=''>
      <input type= 'text' value = {todo} onChange= {e => setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
        <button>Completed</button>
      </form>
  );
};

export default Todoform; 
