import './App.css';
import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';

const lists = [{
  id: '1',
  value: 'Collect trash'
},
{
  id: '2',
  value: 'Go To School'
}
]

function App() {
  const [state, setState] = useState([...lists])
  const inputHandler = (list) => {
    lists.push({ id: (lists.length + 1).toString(), value: list })
    setState([...lists])
  }
  const deleteHandler = (id) => {
    lists.splice(id-1,1)
    setState([...lists])
  }
  return (
    <div className='todo'>
      <Form getInput={inputHandler} />
      <List lists={state} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
