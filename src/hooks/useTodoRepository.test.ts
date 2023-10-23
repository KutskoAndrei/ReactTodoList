import ITodoItem from "../models/ITodoItem";
import { useTodoRepository } from "./useTodoRepository";

describe('useTodoRepository tests', () => {
    const {
        saveTodoList,
        getTodoList,
        getFinishedTodos,
        getUnfinishedTodos,
        switchTodo,
        removeFinishedTodos
    } = useTodoRepository();

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
        localStorage.removeItem('todoList');
        saveTodoList(todoListMock);
    });

    it('getTodoList should return todoList', () => {
        const todoList = getTodoList();
        expect(todoList.length).toBe(3);
    });

    it('getFinishedTodos should should return checked todos', () => {
        const todoList = getFinishedTodos();
        expect(todoList.filter((todo) => todo.checked === true).length).toBe(2);
    });

    it('getUnfinishedTodos should should return unchecked todos', () => {
        const todoList = getUnfinishedTodos();
        expect(todoList.filter((todo) => todo.checked === false).length).toBe(1);
    });

    it('switchTodo should change todo status', () => {
        saveTodoList([todoMock]);
        const todoList = switchTodo(todoMock);
        expect(todoList.find((todo) => todo.id === todoMock.id)?.checked).not.toBe(todoMock.checked);
    });

    it('removeFinishedTodos should remove completed totos', () => {
        const todoList = removeFinishedTodos();
        expect(todoList.length).toBe(1);
    });
});