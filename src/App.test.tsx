import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

//Since we are unit testing, just mock child components
jest.mock('./pages/Home/Home', () => {})

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

})
