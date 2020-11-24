import React from 'react';

import { render } from '@testing-library/react';
import { Score } from './Score';




describe('Unit Test: <Score />', () => {
    const testData = {
        currentScore: 10
    }

    it("should render the component", () => {
        const { container } = render(<Score currentScore={testData.currentScore} />);
        expect(container).toBeInTheDocument();
    })

    it("should render the word 'Score'", () => {
        const { queryByText } = render(<Score currentScore={testData.currentScore} />);
        expect(queryByText(/Score/i)).toBeInTheDocument();
    })

    it("should display the correct current score", () => {
        const { container } = render(<Score currentScore={testData.currentScore} />);
        expect(container.querySelector(".score-card__score")).toHaveTextContent("10");
    })

})




