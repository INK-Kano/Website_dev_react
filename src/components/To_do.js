import React from "react";
import './To_do.css'

const Todo = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>

            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
};

export default Todo;