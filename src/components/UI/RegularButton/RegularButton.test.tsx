import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import RegularButton from './RegularButton';

describe('RegularButton tests', () => {
    let component: RenderResult;

    const clickFn = jest.fn();
    const isActive = false;
    const title = 'testTitle';
    const dataTestId = 'dataTestId';

    beforeEach(() => {
        component = render(
            <RegularButton
                clickAction={clickFn}
                title={title}
                isActive={isActive}
                dataTestId={dataTestId}
            />
        );
      });

    it('should match snapshot', () => {

        expect(component).toMatchSnapshot();
    });

    it('button should trigger click function', () => {
        fireEvent.click(screen.getByText(title));

        expect(clickFn).toHaveBeenCalled();
    });
});