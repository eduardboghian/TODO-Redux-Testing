import React from 'react';
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux'

import ToDoList from './components/ToDoList'

function App() {
  return (
    <Provider store={store}>
        <div className="App  wr">
            <ToDoList />
        </div>
    </Provider>
  )
}

export default App
