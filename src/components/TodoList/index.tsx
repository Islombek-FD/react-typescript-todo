import React from 'react';

import {ITodo} from "../../interfaces";

import TodoItem from "../TodoItem";

interface TodoListProps {
    todos: ITodo[];
    onUpdate: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdate, onDelete }) => {

    if (!todos.length) {
        return (
            <div className='text-center'>
                <strong className='text-danger fs-4'>No todos!</strong>
            </div>
        )
    }

    return (
        <div>
            <ul className='list-unstyled'>
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;