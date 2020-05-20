import React from "react";
import './TodoItem.css';

const TodoItem = ({text, checked, id, onToggle, onRemove}) => {
    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)}
            }>&times;</div>

            <div className={'todo-text ${checked}'}>
                <div>{text}</div>
            </div>
            {
                checked && (<div className="check-mark">✓</div>)
            }
        </div>
    );
};

export default TodoItem;