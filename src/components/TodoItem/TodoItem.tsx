import { FC } from 'react';
import ITodoItem from '../../models/ITodoItem';
import classes from './TodoItem.module.scss';
import Checkbox from '../UI/Chexkbox/Checkbox';
import { useTodos } from '../../hooks/useTodos';
import { AiOutlineClose } from 'react-icons/ai';

interface TodoItemProps {
    todoItem: ITodoItem;
}

const TodoItem: FC<TodoItemProps> = ({ todoItem }) => {
    const { remove, switchStatus } = useTodos();

    return (
        <div className={classes.todoItem}>
            <div className={todoItem.checked ? classes.checkedTodo : classes.uncheckedTodo}>
                <Checkbox isActive={todoItem.checked} switchCheckboxHandler={() => switchStatus(todoItem)} dataTestId='checkBoxContainer' />
                <h3>{todoItem.description}</h3>
            </div>
            <button className={classes.removeBtn} onClick={() => remove(todoItem)}>
                <AiOutlineClose size={30} />
            </button>
        </div>

    );
};

export default TodoItem;