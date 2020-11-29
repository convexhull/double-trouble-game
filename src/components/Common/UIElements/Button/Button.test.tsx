import React from 'react';
import { render } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from '@testing-library/user-event';

describe("Customer <Button /> component", () => {

    it("should render a component", () => {
        const mockFunc = jest.fn();
        const testProps = {
            type: "cta",
            children: "some text",
            clicked: mockFunc
        }
        const { container } = render(<Button {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should render children text node", () => {
        const mockFunc = jest.fn();
        const testProps = {
            type: "cta",
            children: "some text",
            clicked: mockFunc
        }
        const { queryByText } = render(<Button {...testProps} />);
        expect(queryByText(testProps.children)).toBeInTheDocument();
    })

    it("should create button of type cta", () => {
        const mockFunc = jest.fn();
        const testProps = {
            type: "cta",
            children: "some text",
            clicked: mockFunc
        }
        const { queryByText } = render(<Button {...testProps} />);
        expect(queryByText(testProps.children)).toHaveClass(testProps.type);
    })

    it("should execute callback on click", () => {
        const mockFunc = jest.fn();
        const testProps = {
            type: "cta",
            children: "some text",
            clicked: mockFunc
        }
        const { queryByText } = render(<Button {...testProps} />);
        userEvent.click(queryByText(testProps.children));
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })

})