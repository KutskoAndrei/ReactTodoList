import ITodoItem from "../../models/ITodoItem";
import TodoList from "./TodoList";
import { RenderResult, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store"; 
import { useTodoRepository } from "../../hooks/useTodoRepository";

const mockItem: ITodoItem[] = [
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

describe('TodoList tests', () => {
    const { saveTodoList } = useTodoRepository();
    let component: RenderResult;

    saveTodoList(mockItem);
    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render component with 3 todos', () => {
        expect(screen.queryAllByText(/testDescription/).length).toBe(3);
    });
});