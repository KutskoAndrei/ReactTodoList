import FilterType from "../models/FilterType";
import ITodoItem from "../models/ITodoItem";
import { removeTodo, updateTodos } from "../store/todoSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { useTodoRepository } from "./useTodoRepository";

export function useTodos() {
    const {
        saveTodoList,
        getTodoList,
        getFinishedTodos,
        getUnfinishedTodos,
        removeFinishedTodos,
        switchTodo
    } = useTodoRepository();
    const dispatch = useAppDispatch();
    const filter = useAppSelector((state) => state.todos.filter);

    function set(todos: ITodoItem[]) {
        dispatch(updateTodos(todos));
    }

    function getAll() {
        const todos = getTodoList();
        set(todos);
    }

    function getFinished() {
        const todos = getFinishedTodos();
        set(todos);
    }

    function getUnfinished() {
        const todos = getUnfinishedTodos();
        set(todos);
    }

    function setFiltered() {
        if(filter === FilterType.FINISHED) {
            getFinished();
        }
        else if(filter === FilterType.UNFINISHED) {
            getUnfinished();
        }
        else {
            getAll();
        }
    }

    function add(text: string, isActive: boolean) {
        const todoList = getTodoList();
        const todo: ITodoItem = {
            id: new Date().toISOString(),
            description: text,
            checked: isActive
        };
        todoList.push(todo);
        saveTodoList(todoList);
        setFiltered();
    }

    function switchStatus(todo: ITodoItem) {
        switchTodo(todo);
        setFiltered();
    }

    function remove(todo: ITodoItem) {
        let todoList = getTodoList();
        todoList = todoList.filter((item) => item.id !== todo.id);
        saveTodoList(todoList);
        dispatch(removeTodo(todo));
    }

    function clearFinished() {
        const todoList = removeFinishedTodos();
        set(todoList);
    }

    return {
        set,
        getAll,
        getFinished,
        getUnfinished,
        setFiltered,
        add,
        switchStatus,
        remove,
        clearFinished
    }
}