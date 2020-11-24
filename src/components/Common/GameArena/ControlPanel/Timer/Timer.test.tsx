import React from 'react';
import { render } from "@testing-library/react";
import { Timer } from './Timer';

//Mock child components


describe("<Timer />", () => {

    it("should render the component", () => {
        const testProps = {
            baseTime: 100,
            timeRemaining: 10
        }
        const { container } = render(<Timer {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should display countdown progress bar", () => {
        const testProps = {
            baseTime: 100,
            timeRemaining: 10
        }
        const { container } = render(<Timer {...testProps} />);

        expect(container.querySelector(".timer-progressbar-container")).toBeInTheDocument();
        expect(container.querySelector(".timer-progressbar")).toBeInTheDocument();

    })

    it("should not display digital timer", () => {
        const testProps = {
            baseTime: 100,
            timeRemaining: 10
        }
        const { queryByText } = render(<Timer {...testProps} />);

        expect(queryByText(/TIME/)).toBeInTheDocument();
    })


    it("should display remaining time in the digital timer", () => {
        const testProps = {
            baseTime: 100,
            timeRemaining: 10
        }
        const { container, queryByText } = render(<Timer {...testProps} />);

        expect(container.querySelector(".timer-digital__value")).toHaveTextContent(`${testProps.timeRemaining}`);
    })

})