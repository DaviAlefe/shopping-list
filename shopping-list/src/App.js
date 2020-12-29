import React, { useState, useEffect } from 'react';
import Item from './components/Item'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

import firebase from 'firebase';
import { db } from './firebase/firebase';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('items').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setItems(snapshot.docs.map(doc => doc.data().item))
    })
  }, []);

  const addItem = (e) => {
    e.preventDefault();

    db.collection('items').add({
      item: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <form>
        <FormControl>
          <InputLabel>Adicione um item</InputLabel>
          <Input value={input} onChange={ e => setInput(e.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addItem} variant='contained' color='primary' >+</Button>
      </form>


      <ul>
        {items.map(item => 
          <Item description={item} />
        )}
      </ul>
    </div>
  );
}

export default App;
