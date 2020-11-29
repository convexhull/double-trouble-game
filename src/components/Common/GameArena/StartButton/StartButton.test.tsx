import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { StartButton } from "./StartButton";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';


describe("<StartButton />", () => {


    it("should render the component", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { container } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        expect(container).toBeInTheDocument();
    })



    it("should redirect to intro page if allowedTime is 0(not fetched from backend)", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 0,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        expect(historyPushMock).toBeCalledTimes(1);
    })

    it("should display start btn and instructions when internal timer is not running", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { queryByAltText } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        expect(queryByAltText("start-button")).toBeInTheDocument();
    })

    it("should display link to intro page when timer not running", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { queryByText } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        expect(queryByText(/Instructions/)?.getAttribute("href")).toBe('/intro');
    })

    it("should show the text 'Start game' when internal timer not running", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { queryByText } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        expect(queryByText(/start the game/i)).toBeInTheDocument();
    })




    it("should start the internal timer on clicking start button", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { container } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        //start internal timer by clicking start btn
        userEvent.click(container.querySelector(".start-btn"));
        expect(container.querySelector(".countdown-container")).toBeInTheDocument();
    })

    it("should stop displaying the start btn when internal timer started", () => {
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { container } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        userEvent.click(container.querySelector(".start-btn"));
        expect(container.querySelector(".start-btn")).not.toBeInTheDocument();
    })

    it("should start central redux timer when internal timer of 4 seconds elapses", () => {
        jest.useFakeTimers();
        const startGameTimerMock = jest.fn()
        const historyPushMock = jest.fn();
        const testProps = {
            allowedTime: 10,
            onStartGameTimer: startGameTimerMock,
            history: {
                push: historyPushMock
            }
        }
        const { container } = render(<BrowserRouter><StartButton {...testProps} /></BrowserRouter>);
        //start internal timer
        userEvent.click(container.querySelector(".start-btn"));
        //advance by 4 seconds
        jest.advanceTimersByTime(4000);
        //expect redux timer to have started
        expect(startGameTimerMock).toHaveBeenCalledTimes(1);
    })


})


