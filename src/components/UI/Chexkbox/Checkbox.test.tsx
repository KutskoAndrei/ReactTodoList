import { RenderResult, render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe('Checkbox tests', () => {
    const mockItem = {
        isActive: true,
        switchCheckboxHandler: jest.fn(),
        dataTestId: 'dataTestId'
    };
    let component: RenderResult;
    beforeEach(() => {
        component = render(
            <Checkbox
                isActive={mockItem.isActive}
                switchCheckboxHandler={mockItem.switchCheckboxHandler}
                dataTestId={mockItem.dataTestId}
            />
        );
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render component', () => {
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('should trigger handler on check', () => {
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockItem.switchCheckboxHandler).toHaveBeenCalled();
    });
});