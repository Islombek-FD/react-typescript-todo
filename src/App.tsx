import React, {useState} from 'react';

import {ITodo} from "./interfaces";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const onAdd = (title: string) => {
        const newTodo = {
            id: todos[todos.length - 1]?.id + 1 || 0,
            title: title,
            completed: false
        }

        setTodos(prev => [newTodo, ...prev]);
    }

    const onUpdate = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        }))
    }

    const onDelete = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <div className='app'>
            <div className="container">
                <div className="w-50 mx-auto mt-5">
                    <TodoForm
                        onAdd={onAdd}
                    />

                    <TodoList
                        todos={todos}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
