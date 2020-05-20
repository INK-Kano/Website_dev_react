import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({todos, onToggle, onRemove}) => {
    console.log(todos);
    const todoList = todos.todos.map(
        ({id, text, checked}) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        )
    );

    return (
        <div>
            {todoList}
        </div>
    );
};

export default TodoItemList;