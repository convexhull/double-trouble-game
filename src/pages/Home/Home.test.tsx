import React from 'react';
import { render } from "@testing-library/react";
import { Home } from './Home';

//Mock child components


describe("<Home />", () => {

    it("should render the component", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container } = render(<Home {...testProps} />);
        expect(container).toBeInTheDocument();
    })

    it("should load all games on mounting", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container } = render(<Home {...testProps} />);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })


    it("should not display anything while loading all games", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: true,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container } = render(<Home {...testProps} />);
        expect(container.querySelector(".Container")).toBeEmptyDOMElement();
    })


    it("should display the welcome message once loading over", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container, queryByText } = render(<Home {...testProps} />);
        expect(queryByText(/welcome/i)).toBeInTheDocument();
    })

    it("should display links for each available game", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [{
                id: 1,
                name: 'test-game',
                intro_text: "test-intro",
                farewell_text: "test-farewell",
                time: 10
            }],
            onLoadAllGames: mockFunc
        }

        const { container } = render(<Home {...testProps} />);

        expect(container.querySelector(".game-list")?.childElementCount).toBe(testProps.availableGames.length);
    })
})