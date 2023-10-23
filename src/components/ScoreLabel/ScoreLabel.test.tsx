import ScoreLabel from "./ScoreLabel";
import { RenderResult, render, screen } from "@testing-library/react";

const scoreMock: number = 583;
let component: RenderResult;

describe('ScoreLabel tests', () => {
    beforeEach(() => {
        component = render(
            <ScoreLabel score={scoreMock} />
        );
    });

    it('should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render component', () => {
        expect(screen.getByText(scoreMock)).toBeInTheDocument();
    });
});