import React from 'react';

import { render } from '@testing-library/react';
import { GameResult } from './GameResult';




describe('Unit Test: <GameResult />', () => {

    it("should update score on mounting", () => {
        const fakeProps = {
            loading: false,
            updatedScore: 10,
            onUpdateScore: jest.fn()
        }
        render(<GameResult {...fakeProps} />);
        expect(fakeProps.onUpdateScore).toHaveBeenCalledTimes(1);
    });

    it("shouldn't render anything when score is updating/loading", () => {
        const fakeProps = {
            loading: true,
            updatedScore: 10,
            onUpdateScore: jest.fn()
        }
        const { queryByText } = render(<GameResult {...fakeProps} />);
        expect(queryByText("Thank you!")).not.toBeInTheDocument();
        expect(queryByText(/Your score is/i)).not.toBeInTheDocument();
        expect(queryByText("We will reach you as soon as we carefully review your interview.")).not.toBeInTheDocument();
    });

    it("should render correct score", () => {
        const fakeProps = {
            loading: false,
            updatedScore: 10,
            onUpdateScore: jest.fn()
        }
        const { queryByText } = render(<GameResult {...fakeProps} />);
        expect(queryByText(/Your score is/i)).toHaveTextContent(`${fakeProps.updatedScore}`);
    })

    it("should render thank you and feedback message, score message once finished loading", () => {
        const fakeProps = {
            loading: false,
            updatedScore: 10,
            onUpdateScore: jest.fn()
        }
        const { container, queryByText } = render(<GameResult {...fakeProps} />);
        expect(queryByText(/Thank you!/i)).toBeInTheDocument();
        expect(queryByText(/Your score is/i)).toBeInTheDocument();
        expect(container.querySelector(".final-word")).toBeInTheDocument();

    })

})




