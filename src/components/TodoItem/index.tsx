import React from 'react';

import {ITodo} from "../../interfaces";

interface TodoItemProps {
    todo: ITodo;
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem:React.FC<TodoItemProps> = ({ todo, onUpdate, onDelete }) => (
    <li onClick={() => onUpdate(todo.id)} className='mb-3' >
        <label className='d-flex justify-content-between align-items-center w-100 p-4 shadow'>
            <input className='form-check-input mb-0 me-3' type="checkbox" defaultChecked={todo.completed} />

            <span className={`me-auto ${todo.completed ? 'text-decoration-line-through text-success' : ''}`}>{todo.title}</span>

            <button onClick={() => onDelete(todo.id)} className="btn btn-danger">Delete</button>
        </label>
    </li>
)

export default TodoItem;