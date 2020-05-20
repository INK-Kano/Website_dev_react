import React, { useState } from 'react';
import './App.css';
import './components/To_do.js';
import Todo from "./components/To_do";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";


function App() {

    const [ todosState, settodosState ] = useState({
        input: '',
        todos: [
            {id: 0, text: ' 리액트 소개', checked: false},
            {id: 1, text: ' 리액트 소개', checked: true},
            {id: 2, text: ' 리액트 소개', checked: false}
        ]
    });


    const handleChange = (e) => {
        settodosState({
            input: e.target.value
        });
    };

    const handleCreate = ({input, todos}) => {
        settodosState({
            input: '',
            todos: todosState.todos.concat({
                id: handleCreate.id++,
                text: input,
                checked: false
            })
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleCreate();
        }
    };

  return (
      <Todo form={(
          <Form
              value={App.input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreat={handleCreate}
          />
      )}>
          <TodoItemList todos={todosState}/>
      </Todo>
  );
}

export default App;
