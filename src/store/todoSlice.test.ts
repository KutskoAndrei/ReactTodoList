import ITodoItem from "../models/ITodoItem";
import { store } from "./store";
import { addTodo, removeTodo, updateTodos, switchTodoStatus } from "./todoSlice";

describe('todoSlice tests', () => {
    const todoListMock: ITodoItem[] = [
        {
            id: 'testId',
            description: 'testDescription',
            checked: true
        },
        {
            id: 'testId2',
            description: 'testDescription2',
            checked: false
        },
        {
            id: 'testId3',
            description: 'testDescription3',
            checked: true
        }
    ];

    const todoMock: ITodoItem = {
        id: 'mockId',
        description: 'mockDescription',
        checked: true
    };

    beforeEach(() => {
        store.dispatch(updateTodos([]));
    });

    it('should be empty todoList on init', () => {
        const state = store.getState().todos;
        expect(state.todos).toEqual([]);
    });

    it('updateTodo should set todoList', () => {
        store.dispatch(updateTodos(todoListMock));
        const state = store.getState().todos;
        expect(state.todos.length).toEqual(3);
    });

    it('addTodo should add new todo', () => {
        store.dispatch(addTodo(todoMock));
        const state = store.getState().todos;
        expect(state.todos.find((todo) => todo.id === 'mockId')).toBeTruthy();
    });

    it('removeTodo should remove todo from store', () => {
        store.dispatch(addTodo(todoMock));
        store.dispatch(removeTodo(todoMock));
        const state = store.getState().todos;
        expect(state.todos.find((todo) => todo.id === todoMock.id)).toBeFalsy();
    });

    it('switchTodoStatus should update todo status', () => {
        store.dispatch(addTodo(todoMock));
        store.dispatch(switchTodoStatus(todoMock));
        const state = store.getState().todos;
        expect(state.todos.find((todo) => todo.id === todoMock.id)?.checked).toBe(!todoMock.checked);
    });
});