import ITodoItem from '../../models/ITodoItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import classes from './TodoLilst.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import { useEffect } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useTodoRepository } from '../../hooks/useTodoRepository';

const TodoList = () => {
    const todos: ITodoItem[] = useAppSelector((state) => state.todos.todos);
    const { set } = useTodos();
    const { getTodoList } = useTodoRepository();

    useEffect(() => {
        const initTodoList = getTodoList();
        set(initTodoList);
    }, []);

    return (
        <ul className={classes.todoList} data-testid="todoList">
            {todos && todos.map((todo: ITodoItem) =>
                <li>
                    <TodoItem key={todo.id} todoItem={todo} />
                </li>
            )}
        </ul>
    )
}

export default TodoList;