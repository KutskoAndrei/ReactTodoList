import { RenderResult } from "@testing-library/react";
import ButtonPanel from "./ButtonPanel";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe('ButtontPanel tests', () => {
    let component: RenderResult;

    beforeEach(() => {
        <Provider store={store}>
            component = render(
                <ButtonPanel />
            );
        </Provider>
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});