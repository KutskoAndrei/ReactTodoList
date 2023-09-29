import { FilterType } from "../models/FilterType";
import { ITodoItem } from "../models/ITodoItem";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const todos: ITodoItem[] = [];
const filter: number = FilterType.ALL;

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos,
        filter
    },
    reducers: {
        addTodo(state, action: PayloadAction<ITodoItem>) {
            state.todos.push(action.payload);
        },
        removeTodo(state, action: PayloadAction<ITodoItem>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        switchTodoStatus(state, action: PayloadAction<ITodoItem>) {
            const switchTodo = state.todos.find((todo) => todo.id = action.payload.id);
            if (switchTodo) switchTodo.checked = !switchTodo.checked;
        },
        updateTodos(state, action: PayloadAction<ITodoItem[]>) {
            state.todos = action.payload;
        },
        updateFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload;
        }
    }
});

export const {
    addTodo,
    removeTodo,
    switchTodoStatus,
    updateTodos,
    updateFilter
} = todoSlice.actions;

export default todoSlice.reducer;