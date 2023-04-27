import './App.css';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './Todo';
import { db } from './firebase';
import firebase from 'firebase/compat';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');


  // db.collection('todo')
  // .onSnapshot(snapshot)
  // snapshot=>{setTodos(x)}
  // x=snap
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  function handleSubmitClick(event) {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }
  console.log(todos)

  return (
    <div className="App">
      <h3>Todo app</h3>
      <form noValidate autoComplete="off">
        <TextField value={input} onChange={event => setInput(event.target.value)} type='text' id="standard-basic" label="Input" />
        <Button disabled={!input} type='submit' onClick={handleSubmitClick} variant="contained" color="primary">
          Add todo
        </Button>
      </form>
      {todos.map((todo) =>
        <Todo item={todo} />
      )}

    </div>
  );
}

export default App;



// Deploy firebase

// first import firebase from firebase/compt
// firebase login is must
// 1.firebase init
// 2. Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
// 3. choose existing project
// 4. build yes X2
// 5.  ephyg/React-Todo username/repo
// 