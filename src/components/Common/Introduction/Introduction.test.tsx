import React from 'react';
import { render } from "@testing-library/react";
import { IntroductionPage } from "./Introduction";
import { BrowserRouter } from "react-router-dom";

//Mock child components
jest.mock('../../DoubleTrouble/IntroIllustration/IntroIllustration');


describe("<IntroductionPage />", () => {

    it("should render the component", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { container } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);
        expect(container).toBeInTheDocument();
    })


    it("should load the game info on mounting", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { container } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    })

    it("should not display any text while game loading", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: true,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { container } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);
        expect(container.querySelector(".Container")).toBeEmptyDOMElement();
    })

    it("should display instructions when finished loading", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { container } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);

        expect(container.querySelector(".title")).toBeInTheDocument();
        expect(container.querySelector(".intro-text")).toBeInTheDocument();
        expect(container.querySelector(".illustration")).toBeInTheDocument();
    })


    it("should display the intro text", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { container } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);
        expect(container.querySelector(".intro-text")).toHaveTextContent(new RegExp(testProps.introText, 'i'));
    })


    it("should have button to direct user to play the game", () => {
        const mockFunc = jest.fn()
        const testProps = {
            loading: false,
            introText: "Please find the instructions for the game",
            onLoad: mockFunc
        }
        const { queryByText, queryByTestId } = render(<BrowserRouter><IntroductionPage {...testProps} /></BrowserRouter>);

        expect(queryByText("I understand")).toBeInTheDocument();
        expect(queryByTestId("link-to-play")?.getAttribute("href")).toBe("/play");
    })
    
})