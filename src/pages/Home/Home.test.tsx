import React from 'react';
import { render } from "@testing-library/react";
import { Home } from './Home';
import { MemoryRouter } from "react-router-dom";

//Mock child components


describe("<Home />", () => {

    it("should render the component", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container } = render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
        expect(container).toBeInTheDocument();
    })

    it("should load all games on mounting", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })


    it("should not display anything while loading all games", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: true,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { container } = render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
        expect(container.querySelector(".Container")).toBeEmptyDOMElement();
    })


    it("should display the welcome message once loading over", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [],
            onLoadAllGames: mockFunc
        }
        const { queryByText } = render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
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

        const { container } = render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
        expect(container.querySelector(".game-list")?.childElementCount).toBe(testProps.availableGames.length);
    })

    it("should have direct user to /double-trouble/intro on clicking game link for Double Trouble game", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            availableGames: [{
                id: 1,
                name: 'Double Trouble',
                intro_text: "test-intro",
                farewell_text: "test-farewell",
                time: 10
            }],
            onLoadAllGames: mockFunc
        }
        const { queryByText } = render(<MemoryRouter>
            <Home {...testProps} />
        </MemoryRouter>);
        expect(queryByText("Double Trouble")?.getAttribute("href")).toBe("/double-trouble/intro");
    })
})