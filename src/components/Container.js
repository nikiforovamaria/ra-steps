import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Form from './Form'
import List from './List'

const toDate = (input) => {
  const parts = input.split('.')
  const date = new Date(
    parseInt(parts[2], 10), 
    parseInt(parts[1], 10) - 1, 
    parseInt(parts[0], 10)
  );
  const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return {
    date,
    string: `${day}.${(month).toString()}.${date.getFullYear()}`
  }
};

let ITEMS = [
  {
    key: nanoid(5),
    timestamp: '20.07.2019',
    distance: '5'
  },
  {
    key: nanoid(5),
    timestamp: '08.12.1996',
    distance: '10'
  },
  {
    key: nanoid(5),
    timestamp: '18.07.2019',
    distance: '8.8'
  },
];

export default function Container() {

  const [state, setState] = useState(ITEMS.sort((a, b) => toDate(a.timestamp).date < toDate(b.timestamp).date ? 1 : -1));
  const [form, setForm] = useState({
    timestamp: '',
    distance: ''
  })

  const handleTimestamp = (event) => {
    const { value } = event.target;
    setForm( prev => ({ ...prev, timestamp: value }));
  }

  const handleDistance = (event) => {
    const { value } = event.target;
    setForm( prev => ({ ...prev, distance: value }));
  }

  const onAddItem = (e) => {
    e.preventDefault();
    const date = toDate(form.timestamp).string;
    const { distance } = form;
    if (state.find(item => item.timestamp === date)) {
      setState(prev => {
        const newState = [];
        prev.forEach(item => {
          if (item.timestamp === date) {
            const newDistance = (+item.distance + +distance).toString();
            item = {
              key: nanoid(5),
              timestamp: date,
              distance: newDistance,
            }
          }
          newState.push(item);
        })
        return newState.sort((a, b) => toDate(a.timestamp).date < toDate(b.timestamp).date ? 1 : -1);
      })
    } else {
      setState(prev => {
        return [
          ...prev,
          {
            key: nanoid(5),
            timestamp: date,
            distance,
          }
         ].sort((a, b) => toDate(a.timestamp).date < toDate(b.timestamp).date ? 1 : -1)
      })
    }
  }

  return (
    <div className="container">
      <Form setForm={setForm} onAddItem={onAddItem} handleTimestamp={handleTimestamp} handleDistance={handleDistance} />
      <List items={state} setState={setState} />
    </div>
  )
}
