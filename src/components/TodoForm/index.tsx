import React, {useState} from 'react';

interface TodoFormProps {
    onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && !!title) {
            onAdd(e.target.value);

            setTitle('');
        }
    }

    const clickHandler:React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!!title) {
            onAdd(title);

            setTitle('');
        }
    }

    return (
        <div className='mb-4 p-4 shadow'>
            <div className="mb-3">
                <label htmlFor="title">Title</label>
                <input onChange={changeHandler} onKeyPress={keyPressHandler} value={title} className='form-control' type="text" id='title' />
            </div>

            <div className='text-end'>
                <button onClick={clickHandler} className='btn btn-primary'>Add Todo</button>
            </div>
        </div>
    )
}

export default TodoForm;