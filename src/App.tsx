import React from 'react';
import {increment, decrement, multiply, selectCount} from './counterSlice'
import { setUserName, selectUser } from './userSlice';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const user = useAppSelector(selectUser)

  return (
    <div className="App">
      <h1>hi</h1>
      <p>{user.name}, {user.age}</p>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply(3))}>*3</button>
      <button onClick={() => dispatch(setUserName('kkk'))}>name</button>
    </div>
  );
}

export default App;
