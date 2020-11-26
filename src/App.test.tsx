import React from "react";
import { App } from "./App";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Console } from "console";

//Since we are unit testing, just mock child components
jest.mock('./pages/Home/Home');
jest.mock('./pages/DoubleTrouble/DoubleTrouble');
jest.mock('./pages/Page404/Page404');

describe("<App />", () => {

    it("should render the component", () => {
        const mockFunc = jest.fn()
        const testProps = {
            availableGames: [],
            onFetchUserInfo: mockFunc
        }
        const { container } = render(<BrowserRouter><App {...testProps} /></BrowserRouter>);
        expect(container).toBeInTheDocument();
    })


    it("should fetch user info after mounting", () => {
        const mockFunc = jest.fn()
        const testProps = {
            availableGames: [],
            onFetchUserInfo: mockFunc
        }
        const { container } = render(<BrowserRouter><App {...testProps} /></BrowserRouter>);

        expect(mockFunc).toHaveBeenCalledTimes(1);
    })

    it("should render <Home /> if route is current path is '/'", () => {
        const mockFunc = jest.fn()
        const testProps = {
            availableGames: [],
            onFetchUserInfo: mockFunc
        }
        const { container, queryByText } = render(<MemoryRouter initialEntries={["/"]}><App {...testProps} /></MemoryRouter>);
        expect(queryByText("HOME COMPONENT")).toBeInTheDocument();
    })

    it("should render <DoubleTrouble /> if route is current path is '/double-trouble'", () => {
        const mockFunc = jest.fn()
        const testProps = {
            availableGames: [],
            onFetchUserInfo: mockFunc
        }
        const { queryByText } = render(<MemoryRouter initialEntries={["/double-trouble"]}><App {...testProps} /></MemoryRouter>);
        expect(queryByText("DOUBLE TROUBLE COMPONENT")).toBeInTheDocument();
    })

    it("should render <Page404 /> if no route matches", () => {
        const mockFunc = jest.fn()
        const testProps = {
            availableGames: [],
            onFetchUserInfo: mockFunc
        }
        const { container, queryByText } = render(<MemoryRouter initialEntries={["/some-random-test-route"]}><App {...testProps} /></MemoryRouter>);
        expect(queryByText("PAGE404 COMPONENT")).toBeInTheDocument();
    })

})
