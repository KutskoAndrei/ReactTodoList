import ITodoItem from "../../models/ITodoItem";
import TodoItem from "./TodoItem";
import { RenderResult, render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Reorder } from 'framer-motion';

const mockItem: ITodoItem = {
    id: 'testId',
    description: 'testDescription',
    checked: true
};

let component: RenderResult;
describe('TodoItem tests', () => {
    const reorder = jest.fn();
    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <Reorder.Group values={[mockItem]} onReorder={reorder}>
                    <TodoItem todoItem={mockItem} />
                </Reorder.Group>
            </Provider>
        )
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render component', () => {
        expect(screen.getByText(mockItem.description)).toBeInTheDocument();
    });

    it('should change checkbox value', () => {
        const checkbox = screen.getByRole('checkbox');
        fireEvent.change(checkbox, {target: { checked: true }});
        expect(checkbox).toBeChecked();
    });
});

