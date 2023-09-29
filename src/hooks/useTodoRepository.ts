import { ITodoItem } from "../models/ITodoItem";

export function useTodoRepository() {
    const key = 'todoList';

    function saveTodoList(todos: ITodoItem[]) {
        localStorage.setItem(key, JSON.stringify(todos));
    }

    function getTodoList(): ITodoItem[] {
        const data = localStorage.getItem(key);
        if(data) {
            const todos = JSON.parse(data) as ITodoItem[];
            return todos;
        }
        return [];
    }

    function getFinishedTodos(): ITodoItem[] {
        const data = localStorage.getItem(key);
        if(data) {
            const todos = JSON.parse(data) as ITodoItem[];
            return todos.filter((todo) => todo.checked);
        }
        return [];
    }

    function getUnfinishedTodos(): ITodoItem[] {
        const data = localStorage.getItem(key);
        if(data) {
            const todos = JSON.parse(data) as ITodoItem[];
            return todos.filter((todo) => !todo.checked);
        }
        return [];
    }

    function removeFinishedTodos(): ITodoItem[] {
        const todos = getUnfinishedTodos();
        saveTodoList(todos);
        return todos;
    }

    function switchTodo(todo: ITodoItem): ITodoItem[] {
        const data = localStorage.getItem(key);
        if(data) {
            const todos = JSON.parse(data) as ITodoItem[];
            const todoToSwitch = todos.find((item) => item.id === todo.id);
            if(todoToSwitch) {
                todoToSwitch.checked = !todoToSwitch.checked;
                saveTodoList(todos);
                return todos;
            }
        }
        return [];
    }

    return {
        saveTodoList,
        getTodoList,
        getFinishedTodos,
        getUnfinishedTodos,
        removeFinishedTodos,
        switchTodo
    }
}